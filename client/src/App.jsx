import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Shop from "./Components/Shop";
import Registration from "./Components/Registration";
import Admin from "./Components/Admin";
import { Logout } from "./Components/Logout";
import Seller from "./Components/Seller";
import ProductDetails from "./Components/ProductDeatails";
import AdViewProducts from "./Components/AdViewProducts";
import AdViewUser from "./Components/AdViewUser";
import Footer from "./Components/Footer";
import User from "./Components/User";
import Profile from "./Components/Profile";
import Adress from "./Components/Adress";
import ResetPassword from "./Components/ResetPassword";
import Order from "./Components/Order";
import Cart from "./Components/Cart";
import NewProduct from "./Components/NewProduct";
import MyProducts from "./Components/MyProducts";
import SRemoveProduct from "./Components/SRemoveProduct";
import BecomeSeller from "./Components/BecomeSeller";

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
        <Route path="/viewall/products" element={<AdViewProducts/>} />
          <Route path="/viewall/user" element={<AdViewUser/>} />


        <Route path="/logout" element={<Logout/>}/>

        <Route path="/seller" element={<Seller/>}/>
        <Route path="/add/products" element={<NewProduct/>}/>
        <Route path="/view/products/:id" element={<MyProducts/>}/>
        <Route path="/product/details/:id" element={<SRemoveProduct/>} />



        <Route path="/user" element={<User/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/address" element={<Adress/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        <Route path="/myorder/:id" element={<Order/>}/>
        <Route path="/mycart/:id" element={<Cart/>}/>
        <Route path="/change/role/:id" element={<BecomeSeller/>}/>










        
      </Routes>
      <Footer/>
    </Router>
     </>
  )
}

export default App
