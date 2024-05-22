import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/homepage/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes> {/* Wrap your Routes inside the Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
