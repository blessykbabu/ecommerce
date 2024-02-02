import "./style.css";
import logo from "../images/logo.jpg";
import { useState, useEffect } from "react";
import trol from "../images/trol.png";
import urls from "../../utils/url";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Navbar() {
  const HOSTED_SERVER_URL = urls();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setuserData] = useState({});

  useEffect(() => {

    const token = localStorage.getItem("token");

    if(token) {
      setIsLoggedIn(true);
    }else {
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
        console.log("data", response.data.data);
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
          <a className="navbar-brand" href="#">
            <img src={trol} height={20} width={20} alt="Logo" />
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
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
              </ul>
              <ul className="navbar-nav">
              {isLoggedIn ? (
                <li className="nav-item logout" style={{position:"relative",right:"0px"}}>
                  
                  <Link className="nav-link" to="/logout">
                   <button className="btn log">
                    Logout
                    </button>
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
