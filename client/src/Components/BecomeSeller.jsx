// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import urls from "../../utils/url";
// import "./style.css";
// export default function BecomeSeller() {
//   const HOSTED_SERVER_URL=urls()
//   const [userData, setuserData] = useState({});
//   useEffect(() => {
//     getprofile();
//   }, []);
//   const getprofile = async () => {
//     try {
//       // console.log("call getprofile");
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
//       var userid=response.data.data._id;
//       console.log(userid);
//     } catch {
//       if (error.response && error.response.status === 404) {
//         //  not found error
//         console.log("user not  found");
//       } else {
//         console.error("Error fetching  details:", error);
//       }
//     }
//   };
//   const Change = async () => {
//     console.log("change clicked");
//     try {
  

//       const response = await axios.put(
//         `${HOSTED_SERVER_URL}/change/role/${userid}`,

//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
        
//       );
//       console.log(response);
//     } catch {
//       if (error.response && error.response.status === 404) {
//         //  not found error
//         console.log("user not  found");
//       } else {
//         console.error("Error fetching  details:", error);
//       }
//     }
//   };
//   return (
//     <>
//      {/* <h3 style={{ color: "gray", fontSize: "20px", textAlign: "center",fontWeight:"bold"}} className="m-3 ms-4">
//         My Profile
//       </h3> */}
//        <div className="container">
//         <div className="container">
//             <p>Do you want to become a part of the seller community?</p>
//             <button className="btn btn-primary" onClick={Change}>Yes</button>
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import axios from "axios";
import urls from "../../utils/url";
import "./style.css";
import toast,{Toaster} from "react-hot-toast";


export default function BecomeSeller() {
  const HOSTED_SERVER_URL = urls();
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);

      const response = await axios.get(
        `${HOSTED_SERVER_URL}/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      setUserData(response.data.data);
      setUserId(response.data.data._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("User not found");
      } else {
        console.error("Error fetching details:", error);
      }
    }
  };

  const changeRole = async () => {
    console.log("change clicked");
    try {
      const response = await axios.put(
        `${HOSTED_SERVER_URL}/change/role/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Welcome to seller community")
      console.log(response);
      location.reload();
      getProfile();
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("User not found");
      } else {
        console.error("Error updating role:", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <Toaster/>
        <div className="container">
          <p>Do you want to become a part of the seller community?</p>
          <button className="btn btn-primary" onClick={changeRole}>
            Yes
          </button>
        </div>
      </div>
    </>
  );
}
