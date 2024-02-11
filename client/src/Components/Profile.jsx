import React, { useState, useEffect } from "react";
import axios from "axios";
import urls from "../../utils/url";
import "./style.css";
export default function Profile() {
  const HOSTED_SERVER_URL=urls()
  const [userData, setuserData] = useState({});
  useEffect(() => {
    getprofile();
  }, []);
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
    } catch {
      if (error.response && error.response.status === 404) {
        //  not found error
        console.log("user not  found");
      } else {
        console.error("Error fetching  details:", error);
      }
    }
  };
  return (
    <>
     <h3 style={{ color: "gray", fontSize: "20px", textAlign: "center",fontWeight:"bold"}} className="m-3 ms-4">
        My Profile
      </h3>
      {/* <div className="container col-sm-12 col-md-12 col-lg-3  "> */}
            <div className="container col-sm-12 col-md-12   ">

        <form className="shadow-lg bg-body rounded">
          <div className="container text-center pr">
            <div className="mb-3">
              <label className="form-label text-center">Name</label>
              <input
                className="form-control"
                value={userData.name}
                style={{ width: 300, margin: "0 auto",textAlign:"center" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                className="form-control"
                value={userData.email}
                style={{ width: 300, margin: "0 auto",textAlign:"center"  }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                value={userData.phone}
                style={{ width: 300, margin: "0 auto" ,textAlign:"center" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">District</label>
              <input
                className="form-control"
                value={userData.district}
                style={{ width: 300, margin: "0 auto" ,textAlign:"center" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
