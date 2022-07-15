const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const {signout,signup,signin,isSignedIn} = require("../controllers/auth")


router.post("/signup",[
    check("name").isLength({ min: 3 })
    .withMessage('name must be at least 3 chars long'),

    check("email").isEmail().withMessage("email is required"),

    check("password").isLength({min: 3}).withMessage("password should be at leat 3 char")
],signup);

router.post(
    "/signin",
    [
    
   check("email").isEmail().withMessage("email is required"),

    check("password").isLength({min: 1}).withMessage("password field is required")
],
signin);



router.get("/signout",signout);

router.get("/testroute",isSignedIn,(req,res)=>{
    res.json(req.auth);
})

module.exports=router;