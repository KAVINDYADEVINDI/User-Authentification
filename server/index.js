const express = require('express');
const mongoose=require('mongoose');
//
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/usersAuth',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
app.listen(3001, () => { console.log("server is running") })
