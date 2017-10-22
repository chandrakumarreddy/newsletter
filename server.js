const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const async=require('async');
const request=require('request');
const expressHbs=require('express-handlebars');

const app=express();
app.engine('.hbs',expressHbs({defaultLayout:'layout',extname:'.hbs'}));
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));

app.route('/')
        .get((req,res,next)=>{
            res.render('main/home');
              })
        .post((req,res,next)=>{
          request({
       url: 'https://us17.api.mailchimp.com/3.0/lists/4978726d24/members',
       method: 'POST',
       headers: {
         'Authorization': 'randomUser e35bb7cb0cbfd6533569ea82741e4c7e-us17',
         'Content-Type': 'application/json'
       },
       json: {
         'email_address': req.body.email,
         'status': 'subscribed'
       },fun(err,res,body){
          if(err){
            console.log('error');
          }else{
            console.log('Succeed');
            res.redirect('/');
          }
        }
      });
      });
app.listen(process.env.PORT || 3000,(err)=>{
if(err){
    console.log('connection error');
}else{
    console.log('connected');
}
});
