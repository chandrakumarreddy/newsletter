const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const async=require('async');
const request=require('request');
const expressHbs=require('express-handlebars');

const app=express();
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine','hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.get('/',(req,res,next)=>{
    res.render('main/home');
    });

app.listen(3000,(err)=>{
if(err){
    console.log('connection error');
}else{
    console.log('connected');
}
});