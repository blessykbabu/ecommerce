

import React, { useState } from "react";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from a popular icon library
import axios from "axios";
import { useNavigate,useLocation} from "react-router-dom";
import urls from "../../utils/url";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ResetPassword() {
  const HOSTED_SERVER_URL=urls()
  const navigate = useNavigate();
  const location = useLocation();
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    email: "",
    password: "",
    confirm: "",
  };
  useEffect(() => {
   
    const queryParams = new URLSearchParams(location.search);
    const tokenFromQuery = queryParams.get("token");

    if (tokenFromQuery) {
      // If token is present in the query, set it in the local storage
      localStorage.setItem("token", tokenFromQuery);
    }
  }, [location.search]);
  const handleSubmit = async (values, { setErrors, resetForm }) => {
    try {
      console.log("values::", values);
      const token = localStorage.getItem("token");

      var response = await axios.post(`${HOSTED_SERVER_URL}/reset-password`, values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
   
 
      console.log("Reset password:", response.data);
       console.log("response",response)
      toast.success("your password is changed");

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
       console.log("token in reset:", token);

        localStorage.setItem("token", token);
        navigate('/login')
      }
      resetForm();
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      console.log("error", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="lgfrm">
      <ToastContainer position="top-right" hideProgressBar={false} />
        {/* col-sm-12 col-md-12 col-lg-5 */}
        <div
          className="container mx-auto  justify-content-center mb-3"
        >
          <h1
            className="m-3"
            style={{ color: "gray", fontSize: "20px", textAlign: "center",fontWeight:"bold" }}
          >
            Reset  Password
          </h1>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={object().shape({
              email: string().email().required("Required"),
           
              password: string()
                .required("Required")
                .min(6, "Password is too short - should be 6 chars minimum"),
              confirm: string()
                .required("Required")
                .min(6, "Password is too short - should be 6 chars minimum"),
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
                  className="shadow-lg bg-body rounded"
                  style={{ backgroundColor: "white", opacity: 0.75 }}
                >
             
                  <div className="form-group text-center">
                    <label
                      htmlFor="email"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      Email
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </label>
                    {backendError.email && <div>{backendError.email}</div>}
                    {backendError.email_empty && (
                      <div>{backendError.email_empty}</div>
                    )}
                    {backendError.email_invalid && (
                      <div>{backendError.email_invalid}</div>
                    )}
                  </div>
                  {/* <div className="form-group text-center">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      Password
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
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
                  </div> */}

                  <div className="form-group text-center">
                    <label
                      htmlFor="password"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      New Password
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
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
                    {backendError.password_empty && (
                      <div>{backendError.password_empty}</div>
                    )}
                    
                  </div>
                  <div className="form-group text-center">
                    <label
                      htmlFor="confirm"
                      className="form-label"
                      style={{ color: "black" }}
                    >
                      Confirm Password
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="confirm"
                        name="confirm"
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
                    {backendError.password_empty && (
                      <div>{backendError.password_empty}</div>
                    )}
                    
                  </div>
                  <div className="text-center">
                    {/* <Link to="/login"> */}
                      <button
                        className="btn btn-primary m-3"
                        type="submit"
                      >
                        Change
                      </button>
                    {/* </Link> */}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
