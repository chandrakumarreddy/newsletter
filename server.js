const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const async=require('async');
const request=require('request');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.get('/',(req,res,next)=>{
    res.json('Fuck your ass');
    });

app.listen(3000,(err)=>{
if(err){
    console.log('connection error');
}else{
    console.log('connected');
}
});