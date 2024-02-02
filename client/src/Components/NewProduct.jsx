// .............................yup.......................
import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { object, string, number } from "yup";
import axios from "axios";
import Success from "./Success";
import urls from "../../utils/url";
import ErrorComponent from "./ErrorComponent";
export default function NewProduct() {
  
const HOSTED_SERVER_URL=urls();
  const [serverSuccess, setServerSuccess] = useState("");
  const [serverError, setServeError] = useState("");
  const [validationMsg, setvalidationMsg] = useState("");
  const [backendError, setbackendError] = useState({});
  const [loading, setLoading] = useState();
  const[userData,setuserData]=useState({});
  useEffect(() => {
    getprofile();
  }, []);
  const getprofile = async () => {
    try {
      // console.log("call getprofile in seller");
      const token = localStorage.getItem("token");
      // console.log("token:", token);

      const response = await axios.get(
        `${HOSTED_SERVER_URL}/user/profile`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setuserData(response.data.data);
      // console.log("userid:", response.data.data._id);
    } catch(error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  var sid=userData._id;
//  console.log("seller id:",sid)

  const handleNameChange = (e, setFieldValue) => {
    const name = e.target.value;
    setFieldValue("name", name);
  };

  const handleCategoryChange = (e, setFieldValue) => {
    const category = e.target.value;
    setFieldValue("category", category);
  };
  const handlePriceChange = (e, setFieldValue) => {
    const price = e.target.value;
    setFieldValue("price", price);
  };

  const handleQuantityChange = (e, setFieldValue) => {
    const quantity = e.target.value;
    setFieldValue("quantity", quantity);
  };
  const handleDescriptionChange = (e, setFieldValue) => {
    const description = e.target.value;
    setFieldValue("description", description);
  };
  const handleImageChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    convertToBase64(file)
      .then((base64) => {
        setFieldValue("pimage", base64);
      })
      .catch((error) => {
        console.error("Error converting image to base64:", error);
      });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = () => {
        reject(error);
      };
    });
  };
  // const convertAndSetImage = async (file, setFieldValue) => {
  //   try {
  //     const img = await convertToBase64(file);
  //     setFieldValue('pimage', img);
  //   } catch (error) {
  //     console.error('Error converting image to base64:', error);
  //   }
  // };
  const handleSubmit = async (
    values,
    { setErrors, resetForm, setFieldValue }
  ) => {
    try {
      
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("_id"); 
      // console.log("user id:",userId)
      // console.log("values in product:",values);
      // const img = await convertToBase64(e.target[6].files[0]);
      const response = await axios.post(
        `${HOSTED_SERVER_URL}/addproduct?sid=${sid}`,
        
        values,
       
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log("data Submitted", response.data);

      if (response.data.error) {
        setbackendError(response.data.error);
        setErrors(response.data.error);
        setvalidationMsg(response.data.message);
        setServeError(true);
        setServerSuccess(false);
      } else if (response.data.success) {
        setServerSuccess(true);
        setvalidationMsg(response.data.message);
      }
  
      resetForm();
    } catch (error) {
      console.error("Not Submitted", error);
      setServeError(true);
      // console.log("response.data.errors::",response.data.errors);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
  };

 
  const initialValues = {
    name: "",
    category: "",
    price: "",
    quantity: "",
    description:"",
    pimage: "",
  };
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h3 style={{ textAlign: "center", padding: 20, color: "gray" }}>
              Prduct Entry
            </h3>
            <div className="regfrm mb-2">

              {/* col-sm-12 col-md-12 col-lg-3 */}
              <div className="container mx-auto ">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={object().shape({
                    name: string()
                      .min(2, "Too Short!")
                      .max(50, "Too Long!")
                      .required("Required"),
                    category: string().required("Required"),

                    price: number().required("Required"),
                    quantity: number().required("Required"),
                    description: string().required("Required"),
                    // image:string().required("Required")
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
                    setFieldValue,
                  }) => (
                    <Form>
                      <div
                        className="shadow-lg bg-body rounded text-center"
                        style={{ backgroundColor: "white", opacity: 0.75 }}
                      >
                        <div
                          className="mb-3 "
                          style={{ padding: 10, color: "red" }}
                        >
                          <label
                            htmlFor="name"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Product Name
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              onChange={(e) =>
                                handleNameChange(e, setFieldValue)
                              }
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              style={{ color: "red" }}
                            />
                            {backendError.name && (
                              <div>{backendError.name}</div>
                            )}
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
                            htmlFor="category"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Category
                            <input
                              type="text"
                              id="category"
                              name="category"
                              className="form-control"
                              onChange={(e) =>
                                handleCategoryChange(e, setFieldValue)
                              }
                            />
                            <ErrorMessage
                              name="category"
                              component="div"
                              style={{ color: "red" }}
                            />
                            {backendError.category && (
                              <div>{backendError.category}</div>
                            )}
                          </label>
                        </div>
                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          <label
                            htmlFor="price"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Price
                            <input
                              type="text"
                              id="price"
                              name="price"
                              className="form-control"
                              onChange={(e) =>
                                handlePriceChange(e, setFieldValue)
                              }
                            />
                            <ErrorMessage
                              name="price"
                              component="div"
                              style={{ color: "red" }}
                            />
                            {backendError.price && (
                              <div>{backendError.price}</div>
                            )}
                          </label>
                        </div>

                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          <label
                            htmlFor="quantity"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Quantity
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              className="form-control"
                              onChange={(e) =>
                                handleQuantityChange(e, setFieldValue)
                              }
                            />
                            <ErrorMessage
                              name="quantity"
                              component="div"
                              style={{ color: "red" }}
                            />
                            {backendError.quantity_empty && (
                              <div>{backendError.quantity_empty}</div>
                            )}
                          </label>
                        </div>


                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          <label
                            htmlFor="description"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Description
                            <textarea
                              id="description"
                              name="description"
                              className="form-control"
                              onChange={(e) =>
                                handleDescriptionChange(e, setFieldValue)
                              }
                            />
                            <ErrorMessage
                              name="description"
                              component="div"
                              style={{ color: "red" }}
                            />
                            {backendError.description_empty && (
                              <div>{backendError.description_empty}</div>
                            )}
                          </label>
                        </div>


                        <div
                          className="mb-3"
                          style={{ padding: 10, color: "red" }}
                        >
                          <label
                            htmlFor="pimage"
                            className="form-label"
                            style={{ color: "black" }}
                          >
                            Image
                            <input
                              type="file"
                              id="pimage"
                              name="pimage"
                              className="form-control"
                              onChange={(e) =>
                                handleImageChange(e, setFieldValue)
                              }
                            />
                            <ErrorMessage
                              name="pimage"
                              component="div"
                              style={{ color: "red" }}
                            />
                            {backendError.pimage_empty && (
                              <div>{backendError.pimage_empty}</div>
                            )}
                          </label>
                        </div>
                       
                        <button className="btn btn-dark m-3" type="submit">
                          Add
                        </button>
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
