import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/footer";
import Login from "./Components/Login";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>


        
      </Routes>
      <Footer/>
    </Router>
     </>
  )
}

export default App
