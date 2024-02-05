import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
import "./style.css";
import Loader from "./Loader";
import Success from "./Success";
import urls from "../../utils/url";
export default function SRemoveProduct() {
  const HOSTED_SERVER_URL=urls()
  const navigate=useNavigate();
  const { id } = useParams("");
  const [Data, setData] = useState({});
  const [userData, setuserData] = useState({});
  const[loading,setLoading]=useState(false)

  const [deletedata, setDeletedata] = useState(false);
  const [error, setError] = useState(false);

  const [validationMessage, setValidationMessage] = useState();
  const handledelete = () => {
    
    setDeletedata(false);
    navigate('/seller')
  };


  const onDelete = async (id) => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(`${HOSTED_SERVER_URL}/userproducts/delete/${id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );;
      if (response.data.success) {
        setDeletedata(true); // Set deletedata to true upon successful deletion
        setValidationMessage(response.data.message);
      
      } else {
        setError(true); // Set error in case of deletion failure
      }
    } catch (error) {
      setError(true); // Set error in case of request failure
      console.log("Error in delete", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
    
  };
  useEffect(() => {
    getprofile();
    getDetails();
  }, []);
  const getprofile = async () => {
    try {
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
    } catch {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  // console.log("userid:",userData._id)
  const uid = userData._id;
  // console.log("uid:",uid)
  const getDetails = async () => {
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
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("Product found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };
  
 
  return (
    <>
      

      <div className="container  porder m-2">
        <div className="product">
          <p style={{ color: "green" }}>Available stock {Data.quantity}</p>
          <img src={`${HOSTED_SERVER_URL}/${Data.pimage}`} height={500} width={500} />
        </div>
        <div className="prodata">
          <table className=" mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td>{Data.name}</td>
              </tr>
              <tr>
                <td>Category</td>
                <td>:</td>
                <td>{Data.category}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>:</td>
                <td>{Data.quantity}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>:</td>
                <td>${Data.price}</td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "top" }}>Description</td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{Data.description}</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-center">
                  <button   className="btn btn-primary m-2">Update</button>
                  <button  className="btn btn-primary"  onClick= {() => onDelete(Data._id)}>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {deletedata && (
        <SuccessComponent message={validationMessage} onClose={handledelete} />
      )}  
    </>
  );
}
