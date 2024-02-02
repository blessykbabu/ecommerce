import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import Registration from "./Components/Registration";
import Admin from "./Components/Admin";
import { Logout } from "./Components/Logout";
import Seller from "./Components/Seller";
import ProductDetails from "./Components/ProductDeatails";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Registration/>}/>

        <Route path="/products" element={<Shop/>}/>
        <Route path="/order/product/:id" element={<ProductDetails/>} />




        <Route path="/admin/dashboard/*" element={<Admin/>}/>

        <Route path="/logout" element={<Logout/>}/>

        <Route path="/seller/*" element={<Seller/>}/>




        
      </Routes>
      <Footer/>
    </Router>
     </>
  )
}

export default App
