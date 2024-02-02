import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import urls from "../../utils/url";
import Success from "./Success";
export default function ProductDetails() {
  const HOSTED_SERVER_URL=urls();
  const { id } = useParams("");
  // const [serverSuccess, setServerSuccess] = useState("");
  // const [validationMsg, setvalidationMsg] = useState("");
  // const [backendError, setbackendError] = useState({});
  const [Data, setData] = useState({});
  const [userData, setuserData] = useState({});
  const [CartData, setCartData] = useState({});
  const [info, setinfo] = useState(false);
  const [infoOrder, setinfoOrder] = useState(false);
  const [order, setorder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  // const [showAddress, setShowAddress] = useState(true);

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
        console.log("Product not found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };
  const cart = async () => {
    console.log("type:", userData.usertype);
    if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${HOSTED_SERVER_URL}/add/cart/?pid=${id}&uid=${uid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartData(response.data.data);
        alert("product added to the cart");
        console.log(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("not added to cart");
        } else {
          console.error("Error occured:", error);
        }
      }
    } else {
      // alert("Only customers can add items to the cart!")
      setinfo(true);
    }
  };

  const Order = async () => {
    // if (setorder(true)) {
    if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${HOSTED_SERVER_URL}/add/order/?pid=${id}&uid=${uid}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartData(response.data.data);
        // alert("Thank you so much for your order! ");
        setOrderSuccess(true);
        console.log(response.data.data);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("your order is failed");
        } else {
          console.error("Error occured:", error);
        }
      }
    } else {
      // alert("Only customers can place orders!")
      setinfoOrder(true);
    }
    // } else {
    //   alert("please confirm the address");
    // }
  };
  function click() {
    if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      setorder(true);
    } else {
      setinfoOrder(true);
    }
  }

    return(
        <>


        <div className="container pdata">

  <div className="card pd">
    <div className="card__title">
      <div className="icon">
        <a href="#">
          <i className="fa fa-arrow-left" />
        </a>
      </div>
      <h3>New products</h3>
    </div>
    <div className="card__body">
      <div className="half">
        <div className="featured_text">
          <h1 className="mb-2">{Data.name}</h1>
          {/* <p className="sub">{Data.name}</p> */}
          <p className="price">${Data.price}</p>
        </div>
        <div className="image">
          <img
           src={`${HOSTED_SERVER_URL}/${Data.pimage}`}      
           height={350}
          />
        </div>
      </div>
      <div className="half">
        <div className="description">
          <p style={{textAlign:"justify"}}>
          {Data.description}
          </p>
        </div>
        <span className="stock">
          <i className="fa fa-pen" /> In stock
        </span>
        <div className="reviews">
          <ul className="stars">
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star" />
            </li>
            <li>
              <i className="fa fa-star-o" />
            </li>
          </ul>
          <span>(64 reviews)</span>
        </div>
      </div>
    </div>
    <div className="card__footer">
      {/* <div className="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div> */}
      <div className="action">
        <button type="button">Add to cart</button>
      </div>
      <div className="action ms-2">
        <button type="button">Order</button>
      </div>
    </div>
  </div>
  </div>


        </>
    )
}
