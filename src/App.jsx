import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import Products from "./components/Products";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
       <Route path="/checkout" element={<Checkout/>} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;