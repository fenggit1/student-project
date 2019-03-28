const db = require('../config/db');


const schema = new db.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    nickName:{
        type:String,
        default(){
            return "普通用户"
        }
    },
    sex:{
        type:Number,
        default(){
            return 0;
        }
    },
    avator:{
        type:String,
        default(){
            return "/images/avator.png";
        }
    },
    is_admin:{
        type:Number,
        default(){
            return 0;
        }
    }

},{
    collection:"users"
})

module.exports = db.model("user",schema);