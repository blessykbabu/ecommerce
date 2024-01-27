

const jwt = require("jsonwebtoken");
const authControle = require("../controller/authControler");
// const userControler=require("../controller/userControle");
const errorFunction = require("./response-handler").errorFunction;
const control_data=require("../utils/control-data.json");
const user_types=require("../db/models/usertypes");
const users = require("../db/models/users");
exports.accessControl = async function (access_types, req, res, next) {
  try {
    //middleware to check JWT
    
    if (access_types == "*") {
      next();
    } else {
      console.log("order")
      const authHeader = req.headers["authorization"];
      const token = authHeader ? authHeader.split(" ")[1] : null;
      if (
        token == null ||
        token == "null" ||
        token == "" ||
        token == "undefined"
      ) {
        let response = errorFunction({
          status: 401,
          message: "Invalid Access Token",
        });
        res.status(401).send(response);
      } else {
        //verifying token
        console.log("else");
        jwt.verify(
          token,
          process.env.PRIVATE_KEY,
          async function (err, decoded) {
            if (err) {
              let response = errorFunction({
                status: 401,
                message: err.message,
              });
              res.status(401).send(response);
            } else {
              //checking access control

              console.log("ckeck acess");
              let allowed = access_types
                .split(",")
                .map((obj) => control_data[obj]);

              //Fetching user_type details
              //console.log("Token from access control : ", decoded.user_id);
              let user_type_id = (await users.findOne({ _id: decoded.user_id })).usertype;
              let user_type = (await user_types.findOne({ _id: user_type_id })).usertype;

              //console.log("User type : ", user_type);

              if (allowed && allowed.includes(user_type)) {
                //checking if the token is in revoked list
                let revoked = await authControle.checkRevoked(req, res);
                if (revoked === false) {
                  //token not in revoked list
                  next();
                } else if (revoked === true) {
                  //token is in revoked list
                  let response = errorFunction({
                    status: 401,
                    message: "Revoked Access Token",
                  });
                  res.status(401).send(response);
                } else {
                  let response = errorFunction({
                    status: 400,
                    message: "Something Went Wrong",
                  });
                  res.status(400).send(response);
                }
              } else {
                let response = errorFunction({
                  status: 403,
                  message: "Not allowed to access the route",
                });
                res.status(403).send(response);
              }
            }
          }
        );
      }
    }
  } catch (error) {
    let response = errorFunction(error);
    res.status(400).send(response);
  }
};

