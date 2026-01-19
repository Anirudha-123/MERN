import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useUser } from "../context/AuthContext";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";




const Header = () => {
  const { user, logout } = useUser();

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <div className="" style={{ marginBottom: "" }}>
        {" "}
        {/* <header className=" premium-header d-flex position-fixed top-0 start-0 w-100 flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom shadow-sm  z-3"> */}
        <header className="premium-header d-flex position-fixed top-0 start-0 w-100 flex-wrap align-items-center justify-content-center justify-content-md-between py-2 z-3">

          {" "}
          <div className="col-md-3 mb-2 mb-md-0">
            {" "}
            <Link to={"/"}>
              <img
                src="/logo4.png"
                className="ms-5"
                alt="logo"
                style={{ height: "50px" }}
              />
            </Link>
          </div>{" "}
          <ul className="d-none d-md-flex nav gap-5 col-12 col-md-auto mb-2 justify-content-center mb-md-0 headUl">
            {" "}
            {/* <li>
              <Link to="/" className="nav-link text-dark  px-2 header-nav" >
                Home
              </Link>
            </li>{" "} */}
            <Link to="/" className="nav-link  px-2 header-nav" style={{  color: "#111827"
}}>
              Home
            </Link>
            <li className="dropdown nav-item">
              <a
                href="#"
                className="nav-link text-dark px-2 dropdown-toggle header-nav "
                role="button"
                data-bs-toggle="dropdown"
                style={{
                  transition: "all 0.3s ease",
                  fontSize: "19px",
                  position: "relative",
                }}
              >
                Mens
              </a>

              <ul
                className=" dropdown-menu shadow-lg border-0"
                style={{
                  borderRadius: "16px",
                  padding: "12px",
                  minWidth: "200px",
                  marginTop: "12px",
                  animation: "fadeIn 0.3s ease",
                  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                }}
              >
                <li className="mb-1">
                  <Link
                    to={"/collections/men/t-shirt"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>👕</span>
                    T-shirts
                  </Link>
                </li>

                <li className="mb-1">
                  <Link
                    to={"/collections/men/shirt"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>👔</span>
                    Shirts
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to={"/collections/men/short"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>🩳</span>
                    Shorts
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className="dropdown nav-item">
              <a
                href="#"
                className="nav-link text-dark px-2 dropdown-toggle header-nav "
                role="button"
                data-bs-toggle="dropdown"
              >
                Womens
              </a>
              {/* <ul
                className="dropdown-menu drop nav-item dd"
                style={{ border: "none", position: "fixed" }}
              >
                <li className="">
                  <Link
                    to={"/collections/women/t-shirt"}
                    className="dropdown-item ho   "
                  >
                    T-shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/collections/women/shirt"}
                    className="dropdown-item ho"
                  >
                    Shirts
                  </Link>
                </li>
              </ul> */}
              <ul
                className="dropdown-menu shadow-lg border-0"
                style={{
                  borderRadius: "16px",
                  padding: "12px",
                  minWidth: "200px",
                  marginTop: "12px",
                  animation: "fadeIn 0.3s ease",
                  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                }}
              >
                <li className="mb-1">
                  <Link
                    to={"/collections/women/t-shirt"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>👕</span>
                    T-shirts
                  </Link>
                </li>

                <li className="mb-1">
                  <Link
                    to={"/collections/women/shirt"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>👔</span>
                    Shirts
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to={"/collections/women/short"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>🩳</span>
                    Shorts
                  </Link>
                </li> */}
              </ul>
            </li>{" "}
            <li className="dropdown nav-item">
              <a
                href="#"
                className="nav-link text-dark px-2 dropdown-toggle  header-nav "
                role="button"
                data-bs-toggle="dropdown"
              >
                KIDS
              </a>
              <ul
                className="dropdown-menu shadow-lg border-0"
                style={{
                  borderRadius: "16px",
                  padding: "12px",
                  minWidth: "200px",
                  marginTop: "12px",
                  animation: "fadeIn 0.3s ease",
                  background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                }}
              >
                <li className="mb-1">
                  <Link
                    to={"/collections/kids/t-shirt"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>👕</span>
                    T-shirts
                  </Link>
                </li>

                <li className="mb-1">
                  <Link
                    to={"/collections/kids/shirt"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>👔</span>
                    Shirts
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to={"/collections/kids/short"}
                    className="dropdown-item d-flex align-items-center"
                    style={{
                      borderRadius: "10px",
                      padding: "12px 16px",
                      fontWeight: "500",
                      transition: "all 0.2s ease",
                      color: "#333",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateX(5px)";
                      e.target.style.paddingLeft = "20px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "";
                      e.target.style.color = "#333";
                      e.target.style.transform = "translateX(0)";
                      e.target.style.paddingLeft = "16px";
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>🩳</span>
                    Shorts
                  </Link>
                </li> */}
              </ul>
            </li>{" "}
            <li>
              <Link
                to="/products"
                className="nav-link text-dark px-2 header-nav "
              >
                Collections
              </Link>
            </li>{" "}
            <li>
              <Link to="/about" className="nav-link text-dark px-2 header-nav ">
                About
              </Link>
            </li>{" "}
          </ul>{" "}
          <div className="text-end">
            <div className="d-flex justify-content-center align-items-center">
              {/* <div className="cart">
                <Link to={"/cartFetch"}>
                  <button
                    className="btn btn-outline-danger me-4  "
                    style={{
                      borderRadius: "20px",
                      padding: "8px 18px",
                      fontWeight: "600",
                    }}
                  >
                    Cart
                  </button>
                </Link>
              </div> */}

              <div className="cart">
                <Link to="/cartFetch" className="cart-icon nav-link text-danger">
                  <FaShoppingCart size={21} /> <sup></sup> <span className=" "style={{fontSize:"16px",fontFamily:"Poppins, sans-serif",fontWeight:"500"}}> Cart</span>
                </Link>
                
              </div>
              

              <div className="cart dropdown">
                <li
                  className="nav-link"
                  style={{ border: "none", listStyle: "none", padding: 0 }}
                >
                  <a
                    className="btn btn-outline-danger btn-sm me-3 dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    style={{
                      border: "2px solid #dc3545",
                      fontSize: "17px",
                      borderRadius: "20px",
                      // padding: '8px 16px',
                      fontWeight: "500",
                    }}
                  >
                    {user && (
                      <span className="me-2" style={{ fontSize: "14px" }}>
                        {`Hi ${user.fullName} !!`}
                      </span>
                    )}
                    <FaUser />
                  </a>

                  <ul
                    className="dropdown-menu mt-2 last"
                    style={{
                      borderRadius: "12px",
                      padding: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <li>
                      <Link
                        to={user ? "/profile" : "/login"}
                        className="dropdown-item"
                        style={{
                          borderRadius: "8px",
                          padding: "10px 16px",
                          fontWeight: "500",
                        }}
                      >
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={user ? "/orders" : "/login"}
                        className="dropdown-item"
                        style={{
                          borderRadius: "8px",
                          padding: "10px 16px",
                          fontWeight: "500",
                        }}
                      >
                        Orders
                      </Link>
                    </li>

                    {user ? (
                      <>
                        <li>
                          <hr className="dropdown-divider my-2" />
                        </li>
                        <li>
                          <Link
                            to={"/"}
                            className="dropdown-item"
                            style={{
                              borderRadius: "8px",
                              padding: "10px 16px",
                              fontWeight: "500",
                              color: "#dc3545",
                            }}
                            onClick={() => {
                              localStorage.removeItem("token");
                              localStorage.removeItem("user");
                              toast.success("You are logout successfully");
                              navigate("/")
                              logout();
                              
                              
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        {/* <li>
                          <Link
                            to={"/login"}
                            className="dropdown-item"
                            style={{
                              borderRadius: "8px",
                              padding: "10px 16px",
                              fontWeight: "500",
                            }}
                          >
                            Login
                          </Link>
                        </li> */}
                         <li>
      <Link
        to="/login"
       state={{ from: location }}
        className="dropdown-item"
        style={{
          borderRadius: "8px",
          padding: "10px 16px",
          fontWeight: "500",
        }}
      >
        Login
      </Link>
    </li>
                      </>
                    )}
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </header>{" "}
      </div>
    </>
  );
};

export default Header;
