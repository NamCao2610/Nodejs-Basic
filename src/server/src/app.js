const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

const userRoute = require('./controllers/userController');

// app.use(express.static(path.join(__dirname + '../src/dist/cllient')));

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../src/dist/cllient/index.html'));
// })


// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header(
//         "Acess-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if( req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });


// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname))
// });

app.use('/user', userRoute );


app.use(express.static(__dirname + '/dist'));

app.use(express.static(path.join(__dirname + '/dist/cllient')));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname+ '/dist/cllient/index.html'));
})


module.exports = app ;