import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/AuthContext";
// import { useUser } from "../contexts/UserContext";

import { toast } from "react-toastify";

const Login = () => {
  const { login } = useUser();

  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const location = useLocation();

  const redirect = location.state?.from ?? "/home";

  // const { handleLogin } = useUser();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(form);
      const response = await axios.post(
        "mern-gamma-swart.vercel.app/api/user/login",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      // const token = response.data.token;
      // alert("User login sucessfull");
      toast.success("User login successful!");

      login(response.data.user);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate(redirect);
      return response.data.user;
    } catch (error) {
      console.error(error);
      // alert("failed to login");
      toast.error("Failed to login");
    }
  };

  return (
    <>
      {/* <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="" style={{ width: "400px" }}>
            <form
              onSubmit={handleSubmit}
              className="rounded border shadow-lg p-3"
              style={{ height: "250px" }}
            >
              <h3 className="text-center mb-3">Login Form</h3>

              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter email here"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password here"
                />
              </div>

              <button className="btn btn-success w-100" type="submit">
                Login
              </button>
              
            </form>
          </div>
        </div>
      </div> */}

      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded shadow-lg p-4 p-md-5"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <div className="text-center mb-4">
                  <h3
                    className="fw-bold"
                    style={{ color: "#333", letterSpacing: "0.5px" }}
                  >
                    Welcome Back
                  </h3>
                  <p className="text-muted small mb-0">
                    Please login to your account
                  </p>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary">
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label small fw-semibold text-secondary">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#667eea")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                </div>

                <button
                  className="btn btn-lg w-100 text-white fw-semibold shadow-sm"
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "";
                  }}
                >
                  Login
                </button>

                <div className="text-center mt-3">
                  <p className="text-muted small mb-0">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#667eea" }}
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
