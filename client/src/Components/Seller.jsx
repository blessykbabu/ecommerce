import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./profile-icon.css";
// import "./style.css";
import urls from "../../utils/url";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";
import Adress from "./Adress";
import NewProduct from "./NewProduct";

function Seller() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selecteIcon, setSelecteIcon] = useState(null);
  const [userData, setuserData] = useState({});
  const HOSTED_SERVER_URL = urls();
  const handleLinkClick = (component) => {
    console.log("click");
    setSelectedComponent(null);
    setSelectedComponent(component);
  };
  const handleClick = (component) => {
    setSelecteIcon(null); // Reset previous component
    setSelecteIcon(component); // Set the new component
  };
  useEffect(() => {
    getprofile();
  }, []);
  const getprofile = async () => {
    try {
      // console.log("call getprofile in seller");
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
      console.log("userid:", response.data.data._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  var id = userData._id;
  //  console.log("seller id log:",id)
  return (
    <>
      <div className="seller">
        <div className="container ">
        <h6 className="txt ">Join Our Marketplace and Boost Your Sales</h6>
        </div>
        {/* card start */}
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <table className="table border border-white ">
                <tbody className="data">
                  <tr>
                    <th scope="row" className="bc"></th>
                    <td style={{ fontWeight: "bolder"}} className="p-4 bc">
                      Account
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bc"></th>
                    <td className="p-4 bc">
                      {" "}
                      <Link
                        to="/seller/profile"
                        onClick={() => handleLinkClick(<Profile/>)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bc"></th>
                    <td className="p-4 bc">
                      <Link
                        to="/seller/forgot/password"
                        onClick={() => handleLinkClick(<ResetPassword/>)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Account Security
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bc"></th>
                    <td className="p-4 bc">
                      <Link
                        to="/seller/address"
                        onClick={() => handleLinkClick(<Adress/>)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Address
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bc"></th>
                    <td className="p-4 bc">
                      <Link
                        to="/seller/add/product"
                        onClick={() => handleLinkClick(<NewProduct/>)}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Add New Product
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="bc"></th>
                    <td className="p-4 bc">
                      <Link
                        to={`/view/products/${id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        View Products
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col">
             {selectedComponent}
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
export default Seller;
