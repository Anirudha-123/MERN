import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  return (
    <>
      <h3
        className="text-center mt-4"
        style={{ fontFamily: "emoji", fontWeight: "600" }}
      >
        Api Checking
      </h3>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/product/:id"
            element={<ProductDetails></ProductDetails>}
          />
          <Route path="/products" element={<Products></Products>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
