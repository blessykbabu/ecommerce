// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Form } from "formik";
// import "./style.css";
// import Loader from "./Loader";
// import Success from "./Success";
// import urls from "../../utils/url";
// export default function SRemoveProduct() {
//   const HOSTED_SERVER_URL = urls();
//   const navigate = useNavigate();
//   const { id } = useParams("");
//   const [Data, setData] = useState({});
//   const [userData, setuserData] = useState({});
//   const [loading, setLoading] = useState(false);

//   const [deletedata, setDeletedata] = useState(false);
//   const [error, setError] = useState(false);

//   const [validationMessage, setValidationMessage] = useState();
//   const handledelete = () => {
//     setDeletedata(false);
//     navigate("/seller");
//   };

//   const onDelete = async (id) => {
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.delete(
//         `${HOSTED_SERVER_URL}/userproducts/delete/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         setDeletedata(true); // Set deletedata to true upon successful deletion
//         setValidationMessage(response.data.message);
//       } else {
//         setError(true); // Set error in case of deletion failure
//       }
//     } catch (error) {
//       setError(true); // Set error in case of request failure
//       console.log("Error in delete", error);
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//       }, 300);
//     }
//   };
//   useEffect(() => {
//     getprofile();
//     getDetails();
//   }, []);
//   const getprofile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       // console.log("token:", token);

//       const response = await axios.get(
//         `${HOSTED_SERVER_URL}/user/profile`,

//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setuserData(response.data.data);
//     } catch {
//       if (error.response && error.response.status === 404) {
//         //  not found error
//         console.log("user not  found");
//       } else {
//         console.error("Error fetching  details:", error);
//       }
//     }
//   };
//   // console.log("userid:",userData._id)
//   const uid = userData._id;
//   // console.log("uid:",uid)
//   const getDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         `${HOSTED_SERVER_URL}/order/product/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setData(response.data.data);
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         //  not found error
//         console.log("Product found");
//       } else {
//         console.error("Error fetching product details:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="container  porder m-2">
//         <div className="product">
//           <p style={{ color: "green" }}>Available stock {Data.quantity}</p>
//           <img
//             src={`${HOSTED_SERVER_URL}/${Data.pimage}`}
//             height={500}
//             width={500}
//           />
//         </div>
//         <div className="prodata">
//           {/* <table className=" mx-auto ">
//             <tbody>
//               <tr>
//                 <td>Name</td>
//                 <td>:</td>
//                 <td>{Data.name}</td>
//               </tr>
//               <tr>
//                 <td>Category</td>
//                 <td>:</td>
//                 <td>{Data.category}</td>
//               </tr>
//               <tr>
//                 <td>Quantity</td>
//                 <td>:</td>
//                 <td>{Data.quantity}</td>
//               </tr>
//               <tr>
//                 <td>Price</td>
//                 <td>:</td>
//                 <td>${Data.price}</td>
//               </tr>
//               <tr>
//                 <td style={{ verticalAlign: "top" }}>Description</td>
//                 <td style={{ verticalAlign: "top" }}>:</td>
//                 <td style={{ verticalAlign: "top" }}>{Data.description}</td>
//               </tr>
//               <tr>
//                 <td colSpan="3" className="text-center">
//                   <button   className="btn btn-primary m-2">Update</button>
//                   <button  className="btn btn-primary"  onClick= {() => onDelete(Data._id)}>
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table> */}

//           <Form>
//             <div
//               className="shadow-lg bg-body rounded text-center"
//               style={{ backgroundColor: "white", opacity: 0.75 }}
//             >
//               <div className="mb-3 " style={{ padding: 10, color: "red" }}>
//                 <label
//                   htmlFor="name"
//                   className="form-label"
//                   style={{ color: "black" }}
//                 >
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={Data.name}
//                     className="form-control"
//                     // onChange={(e) =>
//                     //   handleNameChange(e, setFieldValue)
//                     // }
//                   />
//                   {/* <ErrorMessage
//                               name="name"
//                               component="div"
//                               style={{ color: "red" }}
//                             />
//                             {backendError.name && (
//                               <div>{backendError.name}</div>
//                             )}
//                             {backendError.name_empty && (
//                               <div>{backendError.name_empty}</div>
//                             )} */}
//                 </label>
//               </div>
//               <div className="mb-3 " style={{ padding: 10, color: "red" }}>
//                 <label
//                   htmlFor="category"
//                   className="form-label"
//                   style={{ color: "black" }}
//                 >
//                   Category
//                   <input
//                     type="text"
//                     id="category"
//                     name="category"
//                     value={Data.category}
//                     className="form-control"
//                     // onChange={(e) =>
//                     //   handleCategoryChange(e, setFieldValue)
//                     // }
//                   />
//                   {/* <ErrorMessage
//                               name="category"
//                               component="div"
//                               style={{ color: "red" }}
//                             />
//                             {backendError.category && (
//                               <div>{backendError.category}</div>
//                             )} */}
//                 </label>
//               </div>
//               <div className="mb-3" style={{ padding: 10, color: "red" }}>
//                 <label
//                   htmlFor="price"
//                   className="form-label"
//                   style={{ color: "black" }}
//                 >
//                   Price
//                   <input
//                     type="text"
//                     id="price"
//                     name="price"
//                     value={Data.price}
//                     className="form-control"
//                     // onChange={(e) =>
//                     //   handlePriceChange(e, setFieldValue)
//                     // }
//                   />
//                   {/* <ErrorMessage
//                               name="price"
//                               component="div"
//                               style={{ color: "red" }}
//                             />
//                             {backendError.price && (
//                               <div>{backendError.price}</div>
//                             )} */}
//                 </label>
//               </div>

//               <div className="mb-3" style={{ padding: 10, color: "red" }}>
//                 <label
//                   htmlFor="quantity"
//                   className="form-label"
//                   style={{ color: "black" }}
//                 >
//                   Quantity
//                   <input
//                     type="text"
//                     id="quantity"
//                     name="quantity"
//                     className="form-control"
//                     value={Data.quantity}
//                     // onChange={(e) =>
//                     //   handleQuantityChange(e, setFieldValue)
//                     // }
//                   />
//                   {/* <ErrorMessage
//                               name="quantity"
//                               component="div"
//                               style={{ color: "red" }}
//                             />
//                             {backendError.quantity_empty && (
//                               <div>{backendError.quantity_empty}</div>
//                             )} */}
//                 </label>
//               </div>

//               <div className="mb-3" style={{ padding: 10, color: "red" }}>
//                 <label
//                   htmlFor="description"
//                   className="form-label"
//                   style={{ color: "black" }}
//                 >
//                   Description
//                   <textarea
//                     id="description"
//                     name="description"
//                     cols={20}
//                     rows={20}
//                     className="form-control"
//                     value={Data.description}
//                     // onChange={(e) =>
//                     //   handleDescriptionChange(e, setFieldValue)
//                     // }
//                   />
//                   {/* <ErrorMessage
//                               name="description"
//                               component="div"
//                               style={{ color: "red" }}
//                             />
//                             {backendError.description_empty && (
//                               <div>{backendError.description_empty}</div>
//                             )} */}
//                 </label>
//               </div>

//               {/* <div
//                           className="mb-3"
//                           style={{ padding: 10, color: "red" }}
//                         >
//                           <label
//                             htmlFor="pimage"
//                             className="form-label"
//                             style={{ color: "black" }}
//                           >
//                             Image
//                             <input
//                               type="text"
//                               id="pimage"
//                               name="pimage"
//                               className="form-control"
//                               value={Data.pimage}
//                               // onChange={(e) =>
//                               //   handleImageChange(e, setFieldValue)
//                               // }
//                             />
//                             {/* <ErrorMessage
//                               name="pimage"
//                               component="div"
//                               style={{ color: "red" }}
//                             />
//                             {backendError.pimage_empty && (
//                               <div>{backendError.pimage_empty}</div>
//                             )} */}
//               {/* </label>
//                         </div>  */}

//               <button className="btn btn-primary m-3" type="submit">
//                 Delete
//               </button>
//             </div>
//           </Form>
//         </div>
//       </div>

//       {deletedata && (
//         <SuccessComponent message={validationMessage} onClose={handledelete} />
//       )}
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.css";
import Loader from "./Loader";
import Success from "./Success";
import urls from "../../utils/url";

export default function SRemoveProduct() {
  const HOSTED_SERVER_URL = urls();
  const navigate = useNavigate();
  const { id } = useParams("");
  const [Data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [deletedata, setDeletedata] = useState(false);
  const [error, setError] = useState(false);
  const [validationMessage, setValidationMessage] = useState();

  const handleDelete = () => {
    setDeletedata(false);
    navigate("/seller");
  };

  const onDelete = async (id) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `${HOSTED_SERVER_URL}/userproducts/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setDeletedata(true);
        setValidationMessage(response.data.message);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log("Error in delete", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${HOSTED_SERVER_URL}/order/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <>
      <div className="container porder m-2">
        <div className="product">
          <p style={{ color: "green" }}>Available stock {Data.quantity}</p>
          <img
            src={`${HOSTED_SERVER_URL}/${Data.pimage}`}
            height={400}
            width={400}
          />
        </div>
        <div className="prodata col-sm-12 col-md-12 col-lg-3 ms-5">
          <Formik
            initialValues={{
              name: Data.name || "",
              category: Data.category || "",
              price: Data.price || "",
              quantity: Data.quantity || "",
              description: Data.description || "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              onDelete(id);
              setSubmitting(false);
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="shadow-lg bg-body rounded text-center" style={{ backgroundColor: "white", opacity: 0.75 }}>
                  <div className="mb-3 " style={{ padding: 10, color: "red" }}>
                    <label htmlFor="name" className="form-label" style={{ color: "black" }}>
                      Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={Data.name}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-3 " style={{ padding: 10, color: "red" }}>
                    <label htmlFor="category" className="form-label" style={{ color: "black" }}>
                      Category
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={Data.category}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-3 " style={{ padding: 10, color: "red" }}>
                    <label htmlFor="price" className="form-label" style={{ color: "black" }}>
                      Price
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={Data.price}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-3 " style={{ padding: 10, color: "red" }}>
                    <label htmlFor="quantity" className="form-label" style={{ color: "black" }}>
                      Quantity
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={Data.quantity}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-3 " style={{ padding: 10, color: "red" }}>
                    <label htmlFor="description" className="form-label" style={{ color: "black" }}>
                      Description
                      <textarea
                        id="description"
                        name="description"
                        cols={20}
                        rows={10}
                        value={Data.description}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <button className="btn btn-primary m-3" type="submit"   onClick= {() => onDelete(Data._id)}>
                    Remove
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {deletedata && <Success message={validationMessage} onClose={handleDelete} />}
    </>
  );
}
