
const express=require("express");
const router=express.Router();
const authControle=require('../controller/authControler');
const accesscontrol=require("../utils/accesscontrol").accessControl;
const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
        accesscontrol(access_type,req,res,next)
    }
}
router.post('/login',setAccessControl('*'),authControle.login);
router.post('/logout',setAccessControl('*'),authControle.logout);
router.post('/forgot-password',setAccessControl('*'),authControle.forgotPasswordController);
router.post('/reset-password',setAccessControl('*'),authControle.resetPasswordControler);

module.exports=router