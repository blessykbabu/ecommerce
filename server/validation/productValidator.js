const products=require('../db/models/products.js')
const isEmpty=require('./isEmpty.js');
const validator=require('validator');
 async function Productvalidator(data){
// console.log("data:::",data)
let errors={}


data.name=!isEmpty(data.name)?data.name:"";

data.category=!isEmpty(data.category)?data.category:"";

data.price=!isEmpty(data.price)?data.price:"";

data.quantity=!isEmpty(data.quantity)?data.quantity:"";

data.description=!isEmpty(data.description)?data.description:"";

data.pimage=!isEmpty(data.pimage)?data.pimage:"";






if(validator.isEmpty(data.name)){
    errors.name_empty="Name is equired"
}


if(!validator.isLength(data.name,{min:2,max:30})){
    errors.name="Name must be between 2 and 30"
}


if(validator.isEmpty(data.category)){
    errors.category_empty="category is required"
}



if(validator.isEmpty(data.price)){
    errors.price_empty="price required"
}



if(validator.isEmpty(data.quantity)){
    errors.quantity_empty="quantity required"
}

if(validator.isEmpty(data.description)){
    errors.description_empty="description required"
}

if(validator.isEmpty(data.pimage)){
    errors.pimage_empty="image  required"
}










return{
    errors,
    isValid:isEmpty(errors)
};
}
module.exports=Productvalidator;