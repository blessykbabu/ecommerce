import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import "./style.css";
import urls from "../../utils/url";
export default function MyProducts() {
  const { id } = useParams("");
  const HOSTED_SERVER_URL=urls()
  console.log("user id get in seller:", id);
  // const [userData, setuserData] = useState({});
  // const[cartData,setCartData]=useState({})

  const [Products, setProducts] = useState([]);
  const[empty,setempty]=useState(false);

  useEffect(() => {
    // getprofile();
    myProducts();
  }, []);


  const myProducts = async () => {
    try {
      // console.log("user id inside getcart:",uid);
      const token = localStorage.getItem("token");
    //   console.log("token in cart product", token);
      const response = await axios.get(
        `${HOSTED_SERVER_URL}/seller/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setProducts(response.data.data);
      if( (response.data.data).length == 0){
        // alert("No products have been added yet")
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
 

  return (
    <>
     
      <div className="container">
      <h3 style={{textAlign:"center",color:"gray"}}>My Store</h3>

        <div className="row">
        {empty && <div className="empty text-center m-4"><div className="inner-div" style={{color:"red"}}>No products have been added yet</div></div>}
          {Products.map((item) => (
            <div key={item._id} className="col-md-3 mb-3">
              <div className="card">
                <img
                  src={`${HOSTED_SERVER_URL}/${item.pimage}`}
                  height={300}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"><span style={{color:"orange"}}>$</span>{item.price}</p>
                  <div className="cbutn d-flex align-items-center justify-content-between">

                  <Link to={`/product/details/${item._id}`}>
                  <button   className="btn btn-primary"> View </button>
                  </Link>
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
