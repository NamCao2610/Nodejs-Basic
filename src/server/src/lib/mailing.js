const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tênmail',
        pass: 'password'
    }
});
 function sendVerifyEmail(activeCode, name, email,  addlink) {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: '"ADmin Vuong" <adminVuong@ITEXAM.vn',
            to: email,
            subject: 'http://testitvuong.herokuapp.com Verification email',
            html: `
            <div>
            <h4>hi ${name}</h4>
                Click to <a href=${addlink} >ĐÂY</a>để verify account.
            </div>`,
        }, (err, info) => {
            if (err) return reject(err);
            resolve(info);
        });
    })
};

function sendKQ(activeCode ,email, subject, score) {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: '"ADmin Vuong" <adminVuong@ITEXAM.vn',
            to: email,
            subject: 'Kết Qủa Thi ',
            html: `
            <div>
            <h4>hi</h4>
                <p>Môn ${subject} bạn đã làm được ${score} điểm :))</p>
            </div>`,
        }, (err, info) => {
            if (err) return reject(err);
            resolve(info);
        });
    })
};

function sendCode(activeCode,email,code) {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: '"ADmin Vuong" <adminVuong@ITEXAM.vn',
            to: email,
            subject: `${code} là mã xác nhận`,
            html: `
            <div>
                <p>${code} là mã xác nhận của bạn</p>
            </div>`,
        }, (err, info) => {
            if (err) return reject(err);
            resolve(info);
        });
    })
}

module.exports ={sendVerifyEmail, sendKQ, sendCode};  

//https://myaccount.google.com/lesssecureapps
//https://accounts.google.com/DisplayUnlockCaptcha

