import React from "react";
import "./style.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import urls from "../../utils/url";
import Success from "./Success";


export default function Login() {
  const HOSTED_SERVER_URL=urls();
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      console.log("values::", values);
      const response = await axios.post(`${HOSTED_SERVER_URL}/login`, values);
      console.log("Login:", response.data);

      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.message);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
        const token = response.data.data;
        localStorage.setItem("token", token);
        console.log("token:", token);

        if (response.data.usertype === "admin") {
          navigate("/admin/dashboard");
        } else if (response.data.usertype === "buyer") {
          navigate("/user");
        } else if (response.data.usertype === "seller") {
          navigate("/seller");
        } else {
          console.error("Unknown user:", response.data.usertype);
        }
      }
      resetForm();
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      // console.log("response.data.errors::",response.data.errors);
      console.log("error", error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="lgfrm">
        <div className="mx-auto col-sm-12 col-md-12 col-lg-5 justify-content-center lg-container">
        {/* <div className="mx-auto col-sm-12 col-md-12 col-lg-7 justify-content-center lg-container"> */}

          <Formik className="log"
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={object().shape({
              email: string().email().required("Required"),
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
                <h4
                  className="m-3"
                  style={{ textAlign: "center", color: "gray",fontWeight:"bolder" }}
                >
                  WELCOME BACK
                </h4>
                <div
                  className="shadow-lg bg-body rounded log-bg login"
                  style={{  opacity: 0.82 }}
                >
                  <div className="form-group text-center">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ color: "gray" }}
                    >
                      {/* Email */}
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="form-control mt-3"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>
                    {backendError.email_exist && (
                      <div>{backendError.email_exist}</div>
                    )}
                    {backendError.email && <div>{backendError.email}</div>}
                    {backendError.email_empty && (
                      <div>{backendError.email_empty}</div>
                    )}
                    {backendError.email_invalid && (
                      <div>{backendError.email_invalid}</div>
                    )}
                  </div>
                  <div className="form-group text-center">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ color: "gray" }}
                    >
                      {/* Password */}
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                      <span onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>

                    {backendError.name_empty && (
                      <div>{backendError.name_empty}</div>
                    )}
                  </div>

                  <div className="text-center">
                    <p>
                      <Link
                        style={{ textDecoration: "none", color: "green" }}
                        to="/forgot/password"
                      >
                        Forgot Password?
                      </Link>
                    </p>
                    <p >
                     
                        Don't have an account?
                        <Link
                        style={{ textDecoration: "none"}}
                        to="/registration"
                      >
                        <span style={{color:"orange"}}>&nbsp; Register</span> 
                      </Link>
                    </p>
                    <button className="btn btn-primary m-3" type="submit">
                      Login
                    </button>
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
        <Error
          message={validationMsg}
          onClose={() => setServeError("")}
        />
      )}
    </>
  );
}
