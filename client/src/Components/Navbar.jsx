import "./style.css";
import logo from "../images/logo.jpg";
import trol from "../images/trol.png";
import e from "../images/e.png";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <>
 
<nav className="navbar navbar-expand-lg  s-nav transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={trol} height={20} width={20}/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
        <a className="nav-link " href="#">
          Features
        </a>
        <a className="nav-link" href="#">
          Shop
        </a>
        <Link className="nav-link" to="/login">
          login
        </Link>
        {/* <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a> */}
      </div>
    </div>
  </div>
</nav>


        </>
    )
}

{/* <nav className="navbar  l-nav">
<div className="container fnav"> */}
  {/* <img src={e}/> */}
   {/* <img src={trol} height={20} width={20}/>
</div>
</nav> */}