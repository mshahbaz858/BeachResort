// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');


// const app = express();
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
// app.use(cookieParser());

// app.get("/api/sendDataToNode", (req, res) => {

//     console.log(req.body);
//     res.send(req.body);

// })

// app.get("/", (req, res) => {

//     res.send('hahhahh')
//     // console.log(req.body)
//     // sendEmail(req.body.email, req.body.name, "hello")

// })

// app.listen(5000,  () => {
//     console.log( "Server Running at 5000 ");
// })




let express = require('express');
let app = express();

// For POST-Support
let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/sayHello', upload.array(), (request, response) => {
    let a = request.body.a;
    let b = request.body.b;

    let c = parseInt(a) + parseInt(b);
    response.send('Result : '+c);
    console.log('Result : '+c);
});

app.listen(3000);