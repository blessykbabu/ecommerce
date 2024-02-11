import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import urls from "../../utils/url";
import toast,{Toaster} from "react-hot-toast";

export default function Cart() {
  const HOSTED_SERVER_URL=urls();
  const { id } = useParams("");
  // console.log("user id get:", id);
  // const [userData, setuserData] = useState({});
  // const[cartData,setCartData]=useState({})
const[empty,setempty]=useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // getprofile();
    getCart();
  }, []);

  // const getprofile = async () => {
  //   try {
  //     console.log("call getprofile");
  //     const token = localStorage.getItem("token");
  //     console.log("token:", token);

  //     const response = await axios.get(
  //       "http://localhost:3000/user/profile",

  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     setuserData(response.data.data);
  //   } catch {
  //     if (error.response && error.response.status === 404) {
  //       //  not found error
  //       console.log("user not  found");
  //     } else {
  //       console.error("Error fetching  details:", error);
  //     }
  //   }
  // };
  // // console.log("userid:",userData._id)
  // var uid = userData._id;
  // console.log("uid in cart:", uid);
  const getCart = async () => {
    try {
      // console.log("user id inside getcart:",uid);
      const token = localStorage.getItem("token");
      // console.log("token in cart product", token);
      const response = await axios.get(
        `${HOSTED_SERVER_URL}/fetch/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setCartProducts(response.data.data);
      if((response.data.data).length ==0){
        setempty(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("Product not  found");
      } else {
        console.error("Error fetching product details:", error);
      }
    }
  };
 
const Delete = async (id) =>{
  try {
    const token = localStorage.getItem("token");
      const response = await axios.delete(
        `${HOSTED_SERVER_URL}/delete/cart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getCart();
      toast.success("product remove from cart")
  } catch (error) {
    console.log("error:",error)
    toast.error(error)
  }
}
  return (
    <>
      {/* <h3>My cart</h3>
      <div className="container">
        {cartProducts.map((item) => {
          return (
            <div key={item._id} className="mb-3">
              <div className="row">
                <div className="col-md-3">
                  <div className="card mb-3">
                    <img
                      src={item.pid.pimage}
                      height={300}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">name {item.pid.name}</h5>
                      <p className="card-text">
                        {" "}
                        ${item.pid.price}
                        <span className="text-warning"></span>
                      </p>

                      <button
                        // onClick={() => handleOrderClick(list)}
                        className="btn btn-primary"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* <h3>My cart</h3> */}
      <div className="container">
      <h3 style={{textAlign:"center"}}>My cart</h3>
      {/* <ToastContainer position="top-right"  hideProgressBar={false} /> */}
      <Toaster/>
        <div className="row">
        {empty && <div className="empty text-center m-4">
          <div className="inner-div" style={{color:"red"}}>Your cart is empty</div></div>}
          {cartProducts.map((item) => (
            <div key={item._id} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={`${HOSTED_SERVER_URL}/${item.pid.pimage}`}
                  height={300}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.pid.name}</h5>
                  <p className="card-text">${item.pid.price}</p>
                  <div className="cbutn d-flex align-items-center justify-content-between">

                  <Link to={`/order/product/${item.pid._id}`}>
                    <button   className="btn btn-primary"> Place Order</button>
                    </Link>
                  <button onClick={() => Delete(item.pid._id)}  className="btn btn-primary"> Remove </button>
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
