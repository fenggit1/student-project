const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path")
const session = require('express-session')
const app = express();

const indexRouter = require("./routes/indexRouter")
const userRouter = require("./routes/userRouter");


app.use(express.static(path.resolve(__dirname,"./public")));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret: 'mygod'  
}));

app.set("views", path.resolve(__dirname,"./views"));
app.set("view engine","ejs");


app.use("/",(req,res,next)=>{
    res.set('Cache-Control','no-cache,no-store,must-revalidate')
    next();
},indexRouter);
app.use("/user",userRouter);






app.listen(3000);