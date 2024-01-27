
const users=require('../db/models/users.js')
const isEmpty=require('./isEmpty.js');
const validator=require('validator');
 async function Regvalidator(data){

let errors={}


data.name=!isEmpty(data.name)?data.name:"";

data.email=!isEmpty(data.email)?data.email:"";

data.phone=!isEmpty(data.phone)?data.phone:"";


data.category=!isEmpty(data.category)?data.category:"";

data.address=!isEmpty(data.address)?data.address:"";






data.password=!isEmpty(data.password)?data.password:"";

if(validator.isEmpty(data.name)){
    errors.name_empty="Name is equired"
}


if(!validator.isLength(data.name,{min:2,max:30})){
    errors.name="Name must be between 2 and 30"
}


if(validator.isEmpty(data.email)){
    errors.email_empty="Email is required"
}


if(!validator.isLength(data.email,{min:2,max:30})){
    errors.email="Email must be between 2 and 30"
}



if(!validator.isEmail(data.email)){
    errors.email_invalid="Email is invalid"
}



let email_count=await users.countDocuments({
    "email":data.email,deleted:{$ne:true}
});

if(email_count>0){
    errors.email_exist="email already exist"
}




if(validator.isEmpty(data.phone)){
    errors.phone_empty="phone required"
}

if(!validator.isLength(data.phone,{min:10,max:10})){
    errors.phone="phone must be containe only 10 digits"
}


if(validator.isEmpty(data.district)){
    errors.district_empty="District equired"
}



if(validator.isEmpty(data.category)){
    errors.category_empty="Category is equired"
}

if(validator.isEmpty(data.address)){
    errors.address_empty="Address is equired"
}

// if(!validator.isLength(data.address,{min:10,max:50})){
//     errors.address="Address must be between 10 and 50"
// }





if(validator.isEmpty(data.password)){
    errors.password_empty="password is required"
}


return{
    errors,
    isValid:isEmpty(errors)
};
}
module.exports=Regvalidator;