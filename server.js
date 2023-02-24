const express=require('express');
const app=express();
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const { resolve } = require('path');
const PORT=process.env.PORT||8080
const connectDB=require('./server/database/connection');

dotenv.config({path:'config.env'});

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,"views/ejs"));
app.use(morgan('tiny'));

connectDB();
app.use(bodyparser.urlencoded({extended:true}));



app.set("view engine","ejs")
app.set('views', './views');



//app.use("views".path.resolve(__dirname));

//laod assets 
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));

//load routes
app.use('/',require('./server/routes/router'));

app.listen(3000,(req,res)=>{
    console.log(`server is running on http://localhost:${3000}`)
})


