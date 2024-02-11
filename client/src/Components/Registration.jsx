

// .............................yup.......................
import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { object, string, number } from "yup";
import axios from "axios";
// import Loading from "./Loading";
import Loader from "./Loader";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import urls from "../../utils/url";
import ErrorComponent from "./ErrorComponent";
import Success from "./Success";
export default function Registration() {
  const HOSTED_SERVER_URL=urls()
  const navigate=useNavigate();
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [loading, setLoading] = useState();
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    district: "",
    category:"",
   address:"",
    password:""
    
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${HOSTED_SERVER_URL}/adduser`,
        values,
     
      );

      console.log("Form Submitted", response.data);

     
      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.messag);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
      }
      resetForm();
      navigate("/login")
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      // console.log("response.data.errors::",response.data.errors);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 400);
    }
  };

  return (
    <>
    
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h3 style={{ textAlign: "center", padding: 20, color: "gray",fontWeight:"bold" }}>
            WELCOME TO EZYMART
            </h3>
            
            <div className="regfrm">
            {/* <div className="image-reg">
            <img
                src={img1}
                height={"635px"}
                width={"400px"}
                // className="d-block w-100"
                alt="..."
              />
              </div> */}
              {/* <div className="col-sm-12 col-md-12 col-lg-3 rr"> */}
              <div className="col-sm-12 col-md- col-lg-6 rr">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={object().shape({
                    name: string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required("Required"),
                    email: string().email().required("Required"),

                    phone: string()
                      // .typeError("That doesn't look like a phone number")
                      // .positive("A phone number can't start with a minus")
                      // .integer("A phone number can't include a decimal point")
                      .matches(
                        /^[6-9]\d{9}$/,
                        "Please enter valid phone number."
                      )
                      .min(10, "Invalid phone number,it must contain 10 digit")
                      .required("Required"),
                    district: string().required("Required"),
                    address: string().required("Required").min(10,"The address may contain up to 10 characters"),
                    category: string().required("Required"),



                    password: string().required("Required"),
                  })}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form>
                     
                      <div
                        className="shadow-lg bg-body rounded text-center frm"
                        style={{ backgroundColor: "white",opacity:0.8}}
                      >
                        {/* <h4 className="welcome">WELCOME TO EZYMART</h4> */}
                        <div
                          className="mb-3 "
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ color: "black",fontWeight:"bold" }}
                          >
                            {/* Name */}
                            <Field
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.name && <div>{backendError.name}</div>}
                          {backendError.name_empty && (
                            <div>{backendError.name_empty}</div>
                          )}
                          </label>
                         
                        </div>
                        <div
                          className="mb-3 "
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="email"
                            className="form-label"
                            style={{ color: "black",fontWeight:"bold" }}
                          >
                            {/* Email */}
                            <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.email_exist && (
                            <div>{backendError.email_exist}</div>
                          )}
                          {backendError.email && (
                            <div>{backendError.email}</div>
                          )}
                          {backendError.email_empty && (
                            <div>{backendError.email_empty}</div>
                          )}
                          {backendError.email_invalid && (
                            <div>{backendError.email_invalid}</div>
                          )}
                          </label>
                         
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="phone"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            {/* Phone */}
                            <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                            placeholder="Phone"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.phone_empty && (
                            <div>{backendError.phone_empty}</div>
                          )}
                          </label>
                          
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="district"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            {/* District */}
                            <Field
                            type="text"
                            id="district"
                            name="district"
                            className="form-control"
                            placeholder="District"
                          />
                          <ErrorMessage
                            name="district"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.district_empty && (
                            <div>{backendError.district_empty}</div>
                          )}
                          </label>
                          
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="category"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            {/* I am a Seller/Buyer */}
                            <Field
                            type="text"
                            id="category"
                            name="category"
                            className="form-control"
                            placeholder=" I am a Seller/Buyer"
                          />
                          <ErrorMessage
                            name="category"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.category_empty && (
                            <div>{backendError.category_empty}</div>
                          )}
                          </label>
                         
                        </div>


                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="address"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                           {/* Address */}
                            <Field
                            as="textarea"
                            // type="textarea"
                            id="address"
                            name="address"
                            rows={4}
                            cols={23}
                            className="form-control"
                            placeholder=" Address"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.address_empty && ( <div>{backendError.address_empty}</div> )}
                           {/* {backendError.address && (
                           <div>{backendError.address}</div>
                           
                          )}   */}


                          </label>
                         
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          
                          <label
                            htmlFor="password"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            {/* Password */}
                            <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder=" Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            style={{ color: "red" }}
                          />
                          {backendError.password_empty && (
                            <div>{backendError.password_empty}</div>
                          )}
                          </label>
                         
                        </div>
                        <p style={{color:"green",fontWeight:"bolder"}}>Already have an Account? <Link to='/login' style={{textDecoration:"none"}}><span style={{color:"orange"}}> Login Now!</span></Link></p>
                        {/* <Link to='/login'> */}
                          <button className="btn btn-primary m-3" type="submit">
                          Create
                        </button>
                        {/* </Link> */}
                        <div className="d-flex m-5">
                          SignIn With
                          <img
                    src={google}
                    height={30}
                    className="d-block ms-3 mb-3 me-3"
                    alt="..."
                  />
                  SignIn With
                       <img
                    src={facebook}
                    height={30}
                    className="d-block ms-2"
                    alt="..."
                  />
                  </div>
                      </div>
                    
                    </Form>
                  )}
                </Formik>
              
              </div>
            
            </div>
            
              
            {serverSuccess && (
        <Success
          message={validationMsg}
        
          onClose={() => setServerSuccess(false)}
        />
      )}
      {serverError && (
        <ErrorComponent
          message={validationMsg}
          onClose={() => setServeError("")}
        />
      )}
          </div>
          
        )}
      </div>

      
    </>
  );
}
