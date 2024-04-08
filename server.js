const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
    
)

const uri =  'mongodb+srv://gayathraN:dgnk1234@cluster0.rvnekqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async() =>{
    try{
        await mongoose.connect(uri);
        console.log('connected to MongoDB');
    }
    catch(error){
         console.log('MongoDb Error', error)   
    }
};

connect();


const server = app.listen(port, host, () =>{
    console.log(`Node server is listining to ${server.address().port}`)
});

app.use('/api', router);