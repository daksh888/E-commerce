import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./pages/homepage/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ProductDetailPage from "./components/ProductDetailsPage";
import VendorDeshboard from "./pages/vendor/VendorDeshboard";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes> {/* Wrap your Routes inside the Routes component */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/product-details" element={<ProductDetailPage />} />
          <Route path="/home/vendor-deshboard" element={<VendorDeshboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
