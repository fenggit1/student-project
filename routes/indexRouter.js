const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    console.log("我是首页")
    if(req.session.nickName){
        res.render("index",{
            nickName:req.session.nickName,
            isAdmin:req.session.isAdmin
        });
    }else{
        res.redirect("/login.html")
    }  
})

router.get("/login.html",(req,res)=>{
    console.log('我是login');
    
    console.log(req.session);
    res.render("login");
})
router.get("/register.html",(req,res)=>{
    res.render("register");
})

module.exports = router;