const express= require("express");
const router = express.Router();


const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getUserById, pushOrderInPurchaseList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");

const {getOrderById,createOrder,getAllOrders,getOrderStatus,updateStatus} = require("../controllers/order");


//params (also routes but work as parameter extracter )
router.param("userId",getUserById);
router.param("orderId",getOrderById);


 
//actual routes

//createorder
router.post("/order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList,updateStock,createOrder );

//read
router.get("/order/all/:userId",isSignedIn, isAuthenticated, isAdmin ,getAllOrders );

//status of order 
router.get("/order/status/:userId",isSignedIn, isAuthenticated , isAdmin,getOrderStatus);
router.put("/ordr/:orderId/status/:userId",isSignedIn , isAuthenticated , isAdmin, updateStatus);
module.exports=router;