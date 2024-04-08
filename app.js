const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');

app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
    
)

app.use(express.json());

//get method
//parameters =>  [get(path, (request,response)) => call back function ]
app.get('/users',(req,res) => {
    controller.getusers(req,res,next => {
        res.send();
    });

});


app.post('/createuser',(req,res) => {
    controller.adduser(req.body,(callack) => {
        res.send();
    });
});


app.post('/updateuser',(req,res) => {
    controller.updateUser(req.body,(callack) => {
        res.send(callack);
    });
});


app.post('/deleteuser',(req,res) => {
    controller.deleteUser(req.body,(callack) => {
        res.send(callack);
    });
});


module.exports = app;