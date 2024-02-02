import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "./product.css";
import urls from "../../Urls/url";
export default function AdDeatailsView() {
  const HOSTED_SERVER_URL=urls();
  const { id } = useParams("");
  const [Data, setData] = useState({});
  const [userData, setuserData] = useState({});
  const [CartData, setCartData] = useState({});

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
        `${HOSTED_SERVER_URL}/all/product/details/${id}`,
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
          <img src={Data.pimage} height={500} width={500} />
        </div>
        <div className="prodata">
          <table className=" mx-auto border border-white">
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
                  <button  onClick={Order} className="btn btn-primary m-2">Order</button>
                  <button onClick={cart} className="btn btn-primary">
                    Add To Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
