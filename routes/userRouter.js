const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require('../models/userModel');
const router = express.Router();
const session = require("express-session");

router.post("/register",(req,res) => {
    let username = req.body.username;
    let password = req.body.password;

    
    bcrypt.hash(password,10).then(saltPassword=>{
        let user = new UserModel({
            username:username,
            password:saltPassword
        })
        user.save()
            .then(()=>{
                console.log('写入成功')
                res.redirect('/login.html')
            })
            .catch(error=>{
                console.log('写入失败',error);
                res.send('注册失败');
    
            })
    })

   
})

router.post("/login",(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    UserModel.findOne({
        username:username
    }).then(data=>{
        if(!data){
            res.send({
                code:-1,
                msg:"用户名不存在"
            })
        }else{
            bcrypt.compare(password,data.password,(err,isok)=>{
                if(isok){
                    console.log('密码正确');
                    console.log(data);
                    req.session.nickName = data.nickName;
                    req.session.isAdmin = data.is_admin;
                    res.redirect('/');

                }else{
                    res.send({
                        code:-2,
                        msg:'密码错误'
                    })
                }
            })
        }
    })


})

router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login.html');
})

module.exports = router;