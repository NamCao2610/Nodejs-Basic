const app = require('../src/app');
const PORT = process.env.PORT || 3000;

const  mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const uri = 'mongodb+srv://vuongnguyen:nguyenquocvuong@cluster0-rmia4.mongodb.net/DbUserName?retryWrites=true&w=majority';

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect( uri, { useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connection.once('open', ()=>{
    app.listen( PORT, () => console.log('Server is started'));
})
 