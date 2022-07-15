require('dotenv').config()

const express=require("express");
const mongoose = require('mongoose');
const app=express();
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const cors=require("cors");

//Routes 
const authRoutes=require("./routes/auth.js");
const userRoutes=require("./routes/user.js");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product.js");
const orderRoutes = require("./routes/order.js");
const paymentBRoutes = require("./routes/paymentBRoutes.js");



//DB conncection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB CONNECTED")
})

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
 
//My routes
app.use("/api", authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",paymentBRoutes);





//PORT

const port = 8000;

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
});

