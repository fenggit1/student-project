const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path")
const app = express();

const indexRouter = require("./routes/indexRouter")
const userRouter = require("./routes/userRouter");


app.use(express.static(path.resolve(__dirname,"./public")));

app.use(cookieParser());

app.set("views", path.resolve(__dirname,"./views"));
app.set("view engine","ejs");


app.use("/",indexRouter);
app.use("/user",userRouter);






app.listen(3000);