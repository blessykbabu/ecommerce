import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import urls from "../../utils/url";
import Success from "./Success";
import { useNavigate } from "react-router-dom";
import StarRating from "./straRating";
import arow from "../images/arow.png";
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import toast,{Toaster} from "react-hot-toast";
export default function ProductDetails() {
  const navigate = useNavigate();
  const HOSTED_SERVER_URL = urls();
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
  const [userRating, setUserRating] = useState(0);
  const [sellerName, setSellerName] = useState('');
  // const [showAddress, setShowAddress] = useState(true);

  var handleRatingChange = (newRating) => {
    setUserRating(newRating);
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
      const sellerResponse = await axios.get(
        `${HOSTED_SERVER_URL}/user/${response.data.data.sid}`
      );
      setSellerName(sellerResponse.data.data.name);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("Product not found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };

  var value=Data.quantity;
  console.log(value);
  if (value >= 1) {
    var tcolor = "#b7dd29";
    var stock = "In stock";
  } else {
    var tcolor = "red";
    var stock = "Sold Out";
  }
  const cart = async () => {
    // console.log("type:", userData.usertype);

    // if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {

    const token = localStorage.getItem("token");

    if (token) {
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
        toast.success("product added to the cart");
        console.log(response.data.data);
        getDetails();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("not added to cart");
        } else {
          console.error("Error occured:", error);
        }
      }
    } else {
      navigate("/login");
    }
    // } else {
    //   setinfo(true);
    // }
  };

  const Order = async () => {
    // if (setorder(true)) {
    // if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
      if(value >=1){

      
    const token = localStorage.getItem("token");

    if (token) {
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
        toast.success('Thank you so much for your order!');
        setOrderSuccess(true);
        console.log(response.data.data);
        getDetails();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.log("your order is failed");
        } else {
          console.error("Error occured:", error);
        }
      }
    } else {
      navigate("/login");
    }
  }
    // } else {
    //   setinfoOrder(true);
    // }
    // } else {
    //   alert("please confirm the address");
    // }
    else{
      alert("currently unavailable.Sold out!")
    }
  };
  // function click() {
  //   if (userData.usertype == "6582ce130a0dd1bc7fe48dad") {
  //     setorder(true);
  //   } else {
  //     setinfoOrder(true);
  //   }
  // }


  
  
  return (
    <>
      <div className="container pdata">
      <Toaster />
        <div className="card pd">
          <div className="card__title">
            <div className="icon">
              <a href="#"><img src={arow} height={50} width={65}/></a>
            </div>
            {/* <h3>New products</h3> */}
            <div class="stock-text" style={{ color: tcolor }}>
              Available Stock : {Data.quantity}
            </div>
          </div>
          <div className="card__body">
            <div className="half">
              <div className="featured_text">
                <h1 className="mb-2">{Data.name}</h1>
                {/* <p className="sub">{Data.name}</p> */}
                <p className="price">${Data.price}</p>
              </div>
              <div className="image">
                <img src={`${HOSTED_SERVER_URL}/${Data.pimage}`} style={{maxWidth:350,maxHeight:350}}/>
              </div>
            </div>
            <div className="half pdes">
              <div className="description">
                <p style={{ textAlign: "justify" }}>{Data.description}</p>
              </div>
              <span className="stock" style={{ color: tcolor }}>
                <i className="fa fa-pen" />
                {stock}
              </span>
              <div className="reviews">
                {/* <ul className="stars">
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
          </ul> */}
                <p>Your current rating: {userRating}</p>
                <StarRating rating={userRating} onChange={handleRatingChange} />
                <span>(64 reviews)</span>
              </div>
            </div>
          </div>
          <div className="card__footer">
            {/* <div className="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div> */}
      <div className="buttonss">
            <div className="action">
              <button type="button" onClick={cart}>
                Add to cart
              </button>
            </div>
            <div className="action ms-2">
              <button type="button" onClick={Order}>
                Order
              </button>
            </div>
            </div>
            <div className="sel" >
              <p >Seller : {sellerName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
