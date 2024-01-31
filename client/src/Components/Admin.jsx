import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import profile from "../image/profile.png";
// import "./profile-icon.css";
// import Icon from "./Icon";
// import Profile from "./profile";
// import ResetPassword from "./ResetPassword";
import urls from "../../utils/url";
export default function Admin() {
  const HOSTED_SERVER_URL=urls();
  const [selecteIcon, setSelecteIcon] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const [userData, setuserData] = useState({});
  const handleClick = (component) => {
    setSelecteIcon(null); // Reset previous component
    setSelecteIcon(component); // Set the new component
  };
  const handleLinkClick = (component) => {
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  const getprofile = async () => {
    try {
      // console.log("call getprofile");
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

  return (
    <>
      <div className="admin">
        <div className="container who mt-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter">AdminZen</h3>
            </div>
          </div>
        </div>

        <div className="top-right-div">
          <Link
            to="/admin/dashboard/icon"
            onClick={() => handleClick(<Icon />)}
          >
            {/* <img src={profile} /> */}
          </Link>
        </div>
        <div className="top-side">{selecteIcon}</div>

        <div className="ad-table">
          <div className="container">
            <div className="row">
              <div className="col">
                <table className="table border border-black ">
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td style={{ fontWeight: "bolder" }} className="p-4">
                        Account
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        {" "}
                        <Link
                            to="/admin/dashboard/profile"
                            onClick={() => handleLinkClick(<Profile/>)}

                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Profile
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                            to="/admin/dashboard/forgot/password"
                            onClick={() => handleLinkClick(<ResetPassword/>)}

                          style={{ textDecoration: "none", color: "black" }}
                        >
                          Account Security
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                            to="/viewall/user"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          View All Users
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row"></th>
                      <td className="p-4">
                        <Link
                            to="/viewall/products"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          View All Products
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col">{selectedComponent}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
