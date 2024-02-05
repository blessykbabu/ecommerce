import React from "react";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import { Link } from "react-router-dom";
import "./style.css";
export default function Footer() {
  return (
    <>
      {/* <div className="border-top footer">
          <div className="row">
            <div className="col border-end">
              <h5>CUSTOMER SERVICE</h5>
              <ul style={{ listStyle: "none" }}>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Contact us</li>
                </Link>
               
              </ul>
            </div>
            <div className="col border-end">
              <h5 className="">LINKS</h5>
              <ul className="" style={{ listStyle: "none" }}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>About us</li>
                </Link>
              </ul>
            </div>
            <div className="col">
              <h5>NEWSLETTER</h5>
              <h6>Sign Up for Our Newsletter</h6>
              <form>
                <div className="">
    
                  <input
                    type="email"
                    className="form-control inp"
                    id="exampleInputEmail1"
                    placeholder="Please  Enter Your Email"
                    aria-describedby="emailHelp"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="container text-center">
            <h6>@ 2024 EZY MART</h6>
            <div className="footer-image ">
              <img className="m-3" src={insta} height={20} />
              <img src={facebook} height={20} />
            </div>
          </div>
      </div> */}


      <footer className="footer">
        
        <div className="items">
          <div className="first">
          <h5 className="mt-3 mb-3">LINKS</h5>
              <ul className="" style={{ listStyle: "none" }}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>About us</li>
                </Link>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Contact us</li>
                </Link>
              </ul>
          </div>
          <div className="second">

          <h5 className="mt-3 mb-3">NEWSLETTER</h5>
              <h6>Sign Up for Our Newsletter</h6>
              <form>
  <div className="mb-3">
  
    <input
      type="email"
      className="form-control m-3 inp"
      id="exampleInputEmail1"
      placeholder="Please  Enter Your Email"
      aria-describedby="emailHelp"
    />
   
  </div>

 
  <button type="submit" className="btn btn-primary ms-3">
    Submit
  </button>
</form>

            </div>
          </div>
      <div className="container text-center">
            <h6 className="mt-3"> &copy; 2024 EZY MART</h6>
            <div className="footer-image ">
              <img className="m-3" src={insta} height={20} />
              <img className="m-3" src={facebook} height={20} />
            </div>
          </div>
      </footer>
    </>
  );
}
