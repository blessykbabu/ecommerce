import React, { useState, useEffect } from "react";
import axios from "axios";
import urls from "../../utils/url";
export default function Adress() {
  const HOSTED_SERVER_URL=urls();
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
        `${HOSTED_SERVER_URL}/address`,

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
     {/* <h3 style={{ color: "gray", fontSize: "20px", textAlign: "center",fontWeight:"bold"}} className="m-3 ms-4">
        My Profile
      </h3> */}
      <div className="container">
        <form>
          <div className="container text-center">
            <div className="mb-3">
              <label className="form-label text-center">Address</label>
              <textarea
                className="form-control"
                value={userData.address}
                cols={10}
                rows={10}
                style={{ width: 300, margin: "0 auto",textAlign:"center",backgroundColor:"beige" }}
              />
            </div>

          

          

           
          </div>
        </form>
      </div>
    </>
  );
}
