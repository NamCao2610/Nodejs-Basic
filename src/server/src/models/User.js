const mongoose = require('mongoose');
const { hash, compare } = require('bcrypt');
const { createToken, verifyToken } = require('../lib/jwt');
const  randomString = require('random-string');
const {sendVerifyEmail, sendKQ, sendCode } = require('../lib/mailing');


const UserSchema = new mongoose.Schema({
    email:  { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true},
    isVerified: { type: Boolean, default: false },
    verifyCode: { type: String },
    restorePasswordCode: { type: String }
})

const UserModel = mongoose.model('user', UserSchema);

class User extends UserModel{
    
    static async signUp(email, password, name){
        const encrypted = await hash(password, 8);
        const user = new User({email, name, password: encrypted,  verifyCode: randomString(), restorePasswordCode: randomString() });
        await user.save();
        const addlink = `http://testitvuong.herokuapp.com/user/verify/${user._id}/${user.verifyCode}`;
        console.log('da goi mail toi ', addlink);
        sendVerifyEmail('1', name, email, addlink);
        const token = await createToken({ name, email, _id: user._id });
        return { token, 
            user : { email, name, _id: user._id }
         } 
    }

    static async signIn(email, password){
        const user = await User.findOne({email, isVerified: true});
        if(!user) throw new Error('Email khong ton tai');
        const same = await compare(password, user.password);
        if(!same) throw new Error('Sai password');
        const {name } = user;
        const token = await createToken({ name, email, _id: user._id});
        return { token,
             user: {  email, name , _id: user._id}
            };    
    }

    static async verifyUser(  idUser,verifyCode ){
        const user = await User.findByIdAndUpdate(idUser, { isVerified: false });
        if(!user) throw new Error('User khong ton tai');
        if( verifyCode !== user.verifyCode) throw new Error('CODE SAI ROI');
        return User.findByIdAndUpdate(user._id, { isVerified : true});
    };

    static async changeInfo(email, name, password){
        const user = await User.findOne({email});
        if(!user) throw new Error('Email khong ton tai');
        const same = await compare(password, user.password);
        if(!same) throw new Error('Sai password');
        return await User.findOneAndUpdate({email}, {name});
    }

    static async changePassword(email, newPassword, password){
        const user = await User.findOne({email});
        if(!user) throw new Error('Email khong ton tai');
        const same = await compare(password, user.password);
        if(!same) throw new Error('Sai password');
        const encrypted = await hash(newPassword, 8);
        return await User.findOneAndUpdate({email}, { password: encrypted});
    }

    static async checkToken(token){
        const obj = await verifyToken(token);
        return obj;
    }

    static async requestChangePassword(email){
        const restorePasswordCode = randomString();
        //goi mail
        sendCode('1', email, restorePasswordCode);
        return User.findOneAndUpdate({email}, { restorePasswordCode });
    }

    static async changePasswordWhenForget(email, code, newPassword) {
        const user = await User.findOne({email: email});
        if (!user) throw new Error('User khong ton tai!');
        if (user.restorePasswordCode !== code) throw new Error('Invalid code');
        const encrypted = await hash(newPassword, 8);
        return await User.findOneAndUpdate({ email }, { password: encrypted, restorePasswordCode: randomString() });
    }
    
    static async sendMail(email,name, subject , score){
        sendKQ('1', email, subject, score);
        res.send({meee: 'okkkk'});
    }
    
}

module.exports = User;



