
const express=require("express");
const router=express.Router();
const auth=require("../middleware/auth")
const userControler=require('../controller/userControle');
const accessControl = require('../utils/accesscontrol').accessControl;
const setAccessControl=(access_type)=>{
    return (req,res,next)=>{
       
        accessControl(access_type,req,res,next)
    }
}
router.post('/adduser',setAccessControl('*'),userControler.newUser);
router.post('/addproduct',setAccessControl('3'),userControler.newProduct);
router.get('/fetch/products',setAccessControl('*'),userControler.Fetch_products);
router.get('/order/product/:id',setAccessControl('*'),userControler.FetchOne_Product);
router.post('/add/cart',setAccessControl('*'),userControler.addCart);
router.get('/user/profile',setAccessControl('*'),auth,userControler.userProfile)
router.get('/fetch/cart/:id',setAccessControl('2'),userControler.fetchCart);
router.post('/add/order',setAccessControl('*'),userControler.addOrder);
router.get('/fetch/order/:id',setAccessControl('2'),userControler.fetchOrder);
router.delete('/delete/cart/:id',setAccessControl('2'),userControler.deleteCart);
router.delete('/delete/order/:id',setAccessControl('2'),userControler.CancelOrder);


router.get('/seller/product/:id',setAccessControl('3'),userControler.sellerProduct);
router.get('/user/list',setAccessControl('1'),userControler.viewUser);
router.get('all/product/details/:id',setAccessControl('1'),userControler.Product_management)

router.delete('/user/delete/:id',setAccessControl('1'),userControler.deleteUser);
router.delete('/userproducts/delete/:id',setAccessControl('1,3'),userControler.deleteProduct);
router.delete('/delete/myproduct/:id',setAccessControl('3'),userControler.Seller_deleteProduct);

router.get('/address',setAccessControl('*'),auth,userControler.userProfile)


module.exports=router
