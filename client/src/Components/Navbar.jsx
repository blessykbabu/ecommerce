import "./style.css";
import logo from "../images/logo.jpg";
import { useState, useEffect } from "react";
import trol from "../images/trol.png";
import urls from "../../utils/url";
import axios from "axios";
import { Link } from "react-router-dom";
import icon1 from "../images/icon1.png";

export default function Navbar() {
  const HOSTED_SERVER_URL = urls();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setuserData] = useState({});
  const [isSeller, setSeller] = useState(false);
  const [isUser, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

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
        var type = response.data.data.category;
        console.log(type);
        if (type == "Seller") {
          setSeller(true);
        } 
        else if (type == "Buyer") {
          setUser(true);
        }
         else {
          setSeller(false);
          setUser(false);
        }
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

  const uid = userData._id;
  console.log("user id in navbar:", uid);
  return (
    <>
      <nav className="navbar navbar-expand-lg s-nav transparent">
        <div className="container-fluid">
          <a className="navbar-brand e" href="#">
            {/* <img src={trol} height={20} width={20} alt="Logo" /> */}
            <h1 data-text="EZY" className="hd"></h1>{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nv" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Shop
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Join
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/login">
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li> */}

              {isSeller && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
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
                        <Link
                          className="dropdown-item"
                          to={`/view/products/${userData._id}`}
                        >
                          My products
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={icon1} height={20} />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/myorder/${userData._id}`}
                        >
                          My orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/mycart/${userData._id}`}
                        >
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
                </>
              )}
              {isUser && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={icon1} height={20} />
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/myorder/${userData._id}`}
                        >
                          My orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/mycart/${userData._id}`}
                        >
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
                      <li>
                        <Link className="dropdown-item" to={`/change/role/${userData._id}`}>
                          Become a Seller
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav right">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={trol} height={20} width={20} alt="Logo" />
                </a>
              </li>
              {isLoggedIn ? (
                <li
                  className="nav-item logout"
                  style={{ position: "relative", right: "0px" }}
                >
                  <Link className="nav-link" to="/logout">
                    <button className="btn log">Logout</button>
                  </Link>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn join dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Join
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/login">
                          LogIn
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/signup">
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
