// import { lazy, Suspense } from "react";
// import "./App.css";
// import Footer from "./components/Footer.jsx";
// import Header from "./components/Header.jsx";

// import Home from "./routes/Home.jsx";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetails from "./routes/ProductDetails.jsx";
// import Collections from "./routes/Collections.jsx";
// // import CollectionPage from "./routes/CollectionPage.jsx";
// import Categories from "./routes/Categories.jsx";
// import CategoryProductsHome from "./routes/CategoryProductsHome.jsx";
// import Cart from "./routes/Cart.jsx";
// import { CartProvider } from "./context/CartContext.jsx";
// import Checkout from "./routes/Checkout.jsx";
// import Orders from "./routes/Orders.jsx";
// import Aboutus from "./routes/Aboutus.jsx";
// import Profile from "./components/Profile.jsx";
// import Logout from "./components/Logout.jsx";
// import Login from "./components/Login.jsx";
// import AddNewProduct from "./components/AddNewProduct.jsx";
// // import Products from "./components/Products.jsx";
// import Register from "./components/Register.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import ProtectedAuthRoute from "./components/ProtectedAuthRoute.jsx";
// import CartFetch from "./components/CartFetch.jsx";

// const Products = lazy(() => import("./components/Products.jsx"));
// function App() {
//   return (
//     <>
//       <ToastContainer position="top-center" autoClose={2000} />

//       <AuthProvider>
//         <CartProvider>
//           <Router>
//             <Header />
//             <ScrollToTop />
//             <Routes>
//               <Route path="*" element={<Home></Home>}></Route>
//               <Route path="/" element={<Home></Home>}></Route>
//               {/* <Route path="/register" element={<Register></Register>}></Route> */}

//               <Route
//                 path="/register"
//                 element={
//                   <ProtectedAuthRoute>
//                     <Register />
//                   </ProtectedAuthRoute>
//                 }
//               />
//               <Route
//                 path="/products"
//                 element={
//                   <Suspense fallback={<div>Loading Products...</div>}>
//                     <Products />
//                   </Suspense>
//                 }
//               ></Route>
//               <Route
//                 path="/product/:id"
//                 element={<ProductDetails></ProductDetails>}
//               ></Route>
//               <Route
//                 path="/collections"
//                 element={<Collections></Collections>}
//               ></Route>
//               <Route
//                 path="/collections/:category/:type"
//                 element={<Categories />}
//               />

//               <Route
//                 path="/category/:category"
//                 element={<CategoryProductsHome />}
//               />

//               <Route path="/cart" element={<Cart></Cart>}></Route>
//               <Route path="/checkout" element={<Checkout></Checkout>}></Route>
//               <Route path="/orders" element={<Orders></Orders>}></Route>
//               <Route path="/about" element={<Aboutus></Aboutus>}></Route>
//               <Route path="/profile" element={<Profile></Profile>}></Route>
//               <Route path="/logout" element={<Logout></Logout>}></Route>
//               {/* <Route path="/login" element={<Login></Login>}></Route> */}
//               <Route
//                 path="/login"
//                 element={
//                   <ProtectedAuthRoute>
//                     <Login />
//                   </ProtectedAuthRoute>
//                 }
//               />
//               <Route
//                 path="/addProduct"
//                 element={<AddNewProduct></AddNewProduct>}
//               ></Route>

//               <Route
//                 path="/cartFetch"
//                 element={<CartFetch></CartFetch>}
//               ></Route>
//             </Routes>
//             <Footer />
//           </Router>
//         </CartProvider>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;



// import { lazy, Suspense } from "react";
// import "./App.css";
// import Footer from "./components/Footer.jsx";
// import Header from "./components/Header.jsx";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { CartProvider } from "./context/CartContext.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import ProtectedAuthRoute from "./components/ProtectedAuthRoute.jsx";

// // Lazy loaded components
// const Home = lazy(() => import("./routes/Home.jsx"));
// const Products = lazy(() => import("./components/Products.jsx"));
// const ProductDetails = lazy(() => import("./routes/ProductDetails.jsx"));
// const Collections = lazy(() => import("./routes/Collections.jsx"));
// const Categories = lazy(() => import("./routes/Categories.jsx"));
// const CategoryProductsHome = lazy(() => import("./routes/CategoryProductsHome.jsx"));
// const Cart = lazy(() => import("./routes/Cart.jsx"));
// const Checkout = lazy(() => import("./routes/Checkout.jsx"));
// const Orders = lazy(() => import("./routes/Orders.jsx"));
// const Aboutus = lazy(() => import("./routes/Aboutus.jsx"));
// const Profile = lazy(() => import("./components/Profile.jsx"));
// const Logout = lazy(() => import("./components/Logout.jsx"));
// const Login = lazy(() => import("./components/Login.jsx"));
// const Register = lazy(() => import("./components/Register.jsx"));
// const AddNewProduct = lazy(() => import("./components/AddNewProduct.jsx"));
// const CartFetch = lazy(() => import("./components/CartFetch.jsx"));

// function App() {
//   return (
//     <>
//       <ToastContainer position="top-center" autoClose={2000} />
//       <AuthProvider>
//         <CartProvider>
//           <Router>
//             <Header />
//             <ScrollToTop />
//             <Suspense fallback={<div>Loading...</div>}>
//               <Routes>
//                 <Route path="*" element={<Home />} />
//                 <Route path="/" element={<Home />} />

//                 <Route
//                   path="/register"
//                   element={
//                     <ProtectedAuthRoute>
//                       <Register />
//                     </ProtectedAuthRoute>
//                   }
//                 />
//                 <Route
//                   path="/login"
//                   element={
//                     <ProtectedAuthRoute>
//                       <Login />
//                     </ProtectedAuthRoute>
//                   }
//                 />

//                 <Route
//                   path="/products"
//                   element={<Products />}
//                 />
//                 <Route
//                   path="/product/:id"
//                   element={<ProductDetails />}
//                 />
//                 <Route
//                   path="/collections"
//                   element={<Collections />}
//                 />
//                 <Route
//                   path="/collections/:category/:type"
//                   element={<Categories />}
//                 />
//                 <Route
//                   path="/category/:category"
//                   element={<CategoryProductsHome />}
//                 />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/checkout" element={<Checkout />} />
//                 <Route path="/orders" element={<Orders />} />
//                 <Route path="/about" element={<Aboutus />} />
//                 <Route path="/profile" element={<Profile />} />
//                 <Route path="/logout" element={<Logout />} />
//                 <Route path="/addProduct" element={<AddNewProduct />} />
//                 <Route path="/cartFetch" element={<CartFetch />} />
//               </Routes>
//             </Suspense>
//             <Footer />
//           </Router>
//         </CartProvider>
//       </AuthProvider>
//     </>
//   );
// }

// export default App;



import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProtectedAuthRoute from "./components/ProtectedAuthRoute.jsx";

// Lazy loaded components
const Home = lazy(() => import("./routes/Home.jsx"));
const Products = lazy(() => import("./components/Products.jsx"));
const ProductDetails = lazy(() => import("./routes/ProductDetails.jsx"));
const Collections = lazy(() => import("./routes/Collections.jsx"));
const Categories = lazy(() => import("./routes/Categories.jsx"));
const CategoryProductsHome = lazy(() => import("./routes/CategoryProductsHome.jsx"));
const Cart = lazy(() => import("./routes/Cart.jsx"));
const Checkout = lazy(() => import("./routes/Checkout.jsx"));
const Orders = lazy(() => import("./routes/Orders.jsx"));
const Aboutus = lazy(() => import("./routes/Aboutus.jsx"));
const Profile = lazy(() => import("./components/Profile.jsx"));
const Logout = lazy(() => import("./components/Logout.jsx"));
const Login = lazy(() => import("./components/Login.jsx"));
const Register = lazy(() => import("./components/Register.jsx"));
const AddNewProduct = lazy(() => import("./components/AddNewProduct.jsx"));
const CartFetch = lazy(() => import("./components/CartFetch.jsx"));

// Fallback loader component
const Loader = ({ message = "Loading..." }) => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <p>{message}</p>
  </div>
);

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
              <Route
                path="/"
                element={
                  <Suspense fallback={  <div style={{ marginTop: "100px" ,fontSize:"25px",fontWeight:"bold"}}>
          <Loader message="Loading Home..." />
        </div>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loader message="Loading Home..." />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedAuthRoute>
                    <Suspense fallback={<Loader message="Loading Register..." />}>
                      <Register />
                    </Suspense>
                  </ProtectedAuthRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedAuthRoute>
                    <Suspense fallback={<Loader message="Loading Login..." />}>
                      <Login />
                    </Suspense>
                  </ProtectedAuthRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <Suspense fallback={<Loader message="Loading Products..." />}>
                    <Products />
                  </Suspense>
                }
              />
              <Route
                path="/product/:id"
                element={
                  <Suspense fallback={<Loader message="Loading Product Details..." />}>
                    <ProductDetails />
                  </Suspense>
                }
              />
              <Route
                path="/collections"
                element={
                  <Suspense fallback={<Loader message="Loading Collections..." />}>
                    <Collections />
                  </Suspense>
                }
              />
              <Route
                path="/collections/:category/:type"
                element={
                  <Suspense fallback={<Loader message="Loading Categories..." />}>
                    <Categories />
                  </Suspense>
                }
              />
              <Route
                path="/category/:category"
                element={
                  <Suspense fallback={<Loader message="Loading Category Products..." />}>
                    <CategoryProductsHome />
                  </Suspense>
                }
              />
              <Route
                path="/cart"
                element={
                  <Suspense fallback={<Loader message="Loading Cart..." />}>
                    <Cart />
                  </Suspense>
                }
              />
              <Route
                path="/checkout"
                element={
                  <Suspense fallback={<Loader message="Loading Checkout..." />}>
                    <Checkout />
                  </Suspense>
                }
              />
              <Route
                path="/orders"
                element={
                  <Suspense fallback={<Loader message="Loading Orders..." />}>
                    <Orders />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loader message="Loading About Us..." />}>
                    <Aboutus />
                  </Suspense>
                }
              />
              <Route
                path="/profile"
                element={
                  <Suspense fallback={<Loader message="Loading Profile..." />}>
                    <Profile />
                  </Suspense>
                }
              />
              <Route
                path="/logout"
                element={
                  <Suspense fallback={<Loader message="Logging Out..." />}>
                    <Logout />
                  </Suspense>
                }
              />
              <Route
                path="/addProduct"
                element={
                  <Suspense fallback={<Loader message="Loading Add Product..." />}>
                    <AddNewProduct />
                  </Suspense>
                }
              />
              <Route
                path="/cartFetch"
                element={
                  <Suspense fallback={<Loader message="Loading Cart Fetch..." />}>
                    <CartFetch />
                  </Suspense>
                }
              />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;


