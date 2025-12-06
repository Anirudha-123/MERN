import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

import Home from "./routes/Home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./routes/ProductDetails.jsx";
import Collections from "./routes/Collections.jsx";
// import CollectionPage from "./routes/CollectionPage.jsx";
import Categories from "./routes/Categories.jsx";
import CategoryProductsHome from "./routes/CategoryProductsHome.jsx";
import Cart from "./routes/Cart.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Checkout from "./routes/Checkout.jsx";
import Orders from "./routes/Orders.jsx";
import Aboutus from "./routes/Aboutus.jsx";
import Profile from "./components/Profile.jsx";
import Logout from "./components/Logout.jsx";
import Login from "./components/Login.jsx";
import AddNewProduct from "./components/AddNewProduct.jsx";
import Products from "./components/Products.jsx";
import Register from "./components/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute.jsx";
import CartFetch from "./components/CartFetch.jsx";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      <AuthProvider>
        <CartProvider>
          <Router>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="*" element={<Home></Home>}></Route>
              <Route path="/" element={<Home></Home>}></Route>
              {/* <Route path="/register" element={<Register></Register>}></Route> */}

              <Route
                path="/register"
                element={
                  <ProtectedAuthRoute>
                    <Register />
                  </ProtectedAuthRoute>
                }
              />
              <Route path="/products" element={<Products></Products>}></Route>
              <Route
                path="/product/:id"
                element={<ProductDetails></ProductDetails>}
              ></Route>
              <Route
                path="/collections"
                element={<Collections></Collections>}
              ></Route>
              <Route
                path="/collections/:category/:type"
                element={<Categories />}
              />

              <Route
                path="/category/:category"
                element={<CategoryProductsHome />}
              />

              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/checkout" element={<Checkout></Checkout>}></Route>
              <Route path="/orders" element={<Orders></Orders>}></Route>
              <Route path="/about" element={<Aboutus></Aboutus>}></Route>
              <Route path="/profile" element={<Profile></Profile>}></Route>
              <Route path="/logout" element={<Logout></Logout>}></Route>
              {/* <Route path="/login" element={<Login></Login>}></Route> */}
              <Route
                path="/login"
                element={
                  <ProtectedAuthRoute>
                    <Login />
                  </ProtectedAuthRoute>
                }
              />
              <Route
                path="/addProduct"
                element={<AddNewProduct></AddNewProduct>}
              ></Route>

              <Route
                path="/cartFetch"
                element={<CartFetch></CartFetch>}
              ></Route>
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
