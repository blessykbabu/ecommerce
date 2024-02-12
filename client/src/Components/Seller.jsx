// import react, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./profile-icon.css";
// // import "./style.css";
// import urls from "../../utils/url";
// import Profile from "./Profile";
// import ResetPassword from "./ResetPassword";
// import Adress from "./Adress";
// import NewProduct from "./NewProduct";

// function Seller() {
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [selecteIcon, setSelecteIcon] = useState(null);
//   const [userData, setuserData] = useState({});
//   const HOSTED_SERVER_URL = urls();
//   const handleLinkClick = (component) => {
//     console.log("click");
//     setSelectedComponent(null);
//     setSelectedComponent(component);
//   };
//   const handleClick = (component) => {
//     setSelecteIcon(null); // Reset previous component
//     setSelecteIcon(component); // Set the new component
//   };
//   useEffect(() => {
//     getprofile();
//   }, []);
//   const getprofile = async () => {
//     try {
//       // console.log("call getprofile in seller");
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
//       console.log("userid:", response.data.data._id);
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         //  not found error
//         console.log("user not  found");
//       } else {
//         console.error("Error fetching  details:", error);
//       }
//     }
//   };
//   var id = userData._id;
//   //  console.log("seller id log:",id)
//   return (
//     <>

//       <div className="container">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">
//             Disabled
//           </a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button className="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   </div>
// </nav>

//       </div>




//       <div className="seller">
//         <div className="container ">
//         <h6 className="txt ">Join Our Marketplace and Boost Your Sales</h6>
//         </div>
//         {/* card start */}
//         <div className="container mt-3">
//           <div className="row">
//             <div className="col">
//               <table className="table border border-white ">
//                 <tbody className="data">
//                   <tr>
//                     <th scope="row" className="bc"></th>
//                     <td style={{ fontWeight: "bolder"}} className="p-4 bc">
//                       Account
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row" className="bc"></th>
//                     <td className="p-4 bc">
//                       {" "}
//                       <Link
//                         to="/seller/profile"
//                         onClick={() => handleLinkClick(<Profile/>)}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         Profile
//                       </Link>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row" className="bc"></th>
//                     <td className="p-4 bc">
//                       <Link
//                         to="/seller/forgot/password"
//                         onClick={() => handleLinkClick(<ResetPassword/>)}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         Account Security
//                       </Link>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row" className="bc"></th>
//                     <td className="p-4 bc">
//                       <Link
//                         to="/seller/address"
//                         onClick={() => handleLinkClick(<Adress/>)}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         Address
//                       </Link>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row" className="bc"></th>
//                     <td className="p-4 bc">
//                       <Link
//                         to="/seller/add/product"
//                         onClick={() => handleLinkClick(<NewProduct/>)}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         Add New Product
//                       </Link>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row" className="bc"></th>
//                     <td className="p-4 bc">
//                       <Link
//                         to={`/view/products/${id}`}
//                         style={{ textDecoration: "none", color: "black" }}
//                       >
//                         View Products
//                       </Link>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="col">
//              {selectedComponent}
//             </div>
//           </div>


//         </div>
//       </div>
//     </>
//   );
// }
// export default Seller;



import axios from "axios";
import urls from "../../utils/url";
import { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import s1 from "../images/s1.jpeg";
import s2 from "../images/s2.webp";
import s3 from "../images/s3.jpeg";
import s4 from "../images/s4.webp";
import s5 from "../images/s5.webp";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import n7 from "../images/n7.jpg";
import n9 from "../images/n9.jpg";
import n10 from "../images/n10.jpg";
import z from "../images/z.jpeg";
import le from "../images/le.jpeg";
import nk from "../images/nk.webp";
import adidas from "../images/adidas.webp";
import ch1 from "../images/ch1.jpeg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import s from "../images/s.png";
import n from "../images/n.jfif";
import za from "../images/za.jpg";
import ad from "../images/ad.png";
import a from "../images/a.png";
import t from "../images/t.png";
import p4 from "../images/p4.jpg";
import b5 from "../images/b5.jpg";
import b10 from "../images/b10.jpg";
import gif from "../images/gif.gif";
import gif1 from "../images/gif1.gif";
import ji2 from "../images/ji2.jpg";
// import ban2 from "../images/ban2.avif";
// import ban3 from "../images/ban3.jpg";
// import ban4 from "../images/ban4.jpg";
import ban5 from "../images/ban5.jpg";
import bn1 from "../images/bn1.jpg";
import bn2 from "../images/bn2.jpg";
import bn3 from "../images/bn3.jpg";
import bn5 from "../images/bn5.jpg";
import bn6 from "../images/bn6.webp";


// import ban6 from "../images/ban6.jpg";
// import ban7 from "../images/ban7.jpg";

import icon1 from "../images/icon1.png";
import "./style.css";
export default function Seller() {
  const HOSTED_SERVER_URL=urls();
  const [userData, setuserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

 

    const getprofile = async () => {
      try {
        console.log("call profile");
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${HOSTED_SERVER_URL}/user/profile`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setuserData(response.data.data);
        
      } catch (error) {
        if (error.response && error.response.status === 404) {
          //  not found error
          console.log("user not  found");
        } else {
          console.error("Error fetching  details:", error);
        }
      }
    };
    getprofile();
  }, []);

  return (
    <>
{/* 
    <div className="container">
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Shop
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/add/products">
             New Product
              </Link>
            </li>
            <li>
              <Link className="dropdown-item"  to={`/view/products/${userData._id}`}>
               My products
              </Link>
            </li>
          
        
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <img src={icon1} height={20}/>
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to={`/myorder/${userData._id}`}>
                My orders
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={`/mycart/${userData._id}`}>
                My cart
              </Link>
            </li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            My Account
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/profile">
              My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/address">
                Address
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/resetpassword">
                Account Security
              </Link>
            </li>
        
          </ul>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>

    </div> */}
<div className="container-fluid">

<div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bn2}  style={{objectFit:"containe"}} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={bn5} style={{objectFit:"containe"}}  className="d-block w-100" alt="..." />
    </div>
    {/* <div className="carousel-item">
      <img src={bn6} style={{objectFit:"containe"}}  className="d-block w-100" alt="..." />
    </div> */}
    <div className="carousel-item">
      <img src={ban5} style={{objectFit:"containe"}} className="d-block w-100" alt="..." />
    </div>
    {/* <div className="carousel-item">
      <img src={bn5} style={{objectFit:"containe"}}  className="d-block w-100" alt="..." />
    </div> */}
    {/* <div className="carousel-item">
      <img src={ban7} style={{objectFit:"containe"}}  className="d-block w-100" alt="..." />
    </div> */}
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>



      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="row">
              <img
                src={c1}
                style={{ objectFit: "cover" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="row mt-4">
              <img
                src={p1}
                style={{ objectFit: "cover" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* carousal */}
          <div className="col-sm-4">
            <div className="row">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={n10}
                      className="d-block w-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={ji2}
                      className="d-block w-100"
                      style={{ objectFit: "cover" }}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={p2}
                      style={{ objectFit: "cover" }}
                      className="d-block w-100"
                      v
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="row mt-2">
              <img
                src={gif1}
                // height={290}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <img
                src={b5}
                // height={290}
                style={{ objectFit: "cover" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="row mt-4">
              <img
                src={p4}
                style={{ objectFit: "cover" }}
                // height={290}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner cr">
              <div className="carousel-item active">
                <img src={s1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={s2} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

      {/* slide */}

      <div className="slider mt-3">
        <div className="slide-track">
          <div className="slide">
            <img src={s} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={ad} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={za} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={a} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={n} height={100} width={250} alt="" />
          </div>
          <div className="slide">
            <img src={t} height={100} width={250} alt="" />
          </div>
          {/* <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height={100}
                width={250}
                alt=""
              />
            </div> */}
        </div>
      </div>
    </>
  );
}
