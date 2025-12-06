import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/user", form);

      // alert("register successfully");
      toast.success("user register successfully");

      navigate("/login");

      // if (res.data.message.includes("successfully")) {
      //   alert("register successfully");
      //   // navigate("/login");
      // }
    } catch (error) {
      console.error(error);
      // alert("failed to register");
      toast.error("failed to register");
    }
  };

  return (
    <>
      {/* <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="row" style={{ marginTop: "130px" }}>
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="rounded border shadow-lg p-3"
            >
              <h3 className="text-center mb-3">Register Form</h3>

              <div className="mb-3 ">
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter fullName here"
                />
              </div>
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

              <button className="btn btn-success" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        }}
      >
        <div className="container">
          <div
            className="row justify-content-center"
            style={{ marginTop: "50px" }}
          >
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
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
                    Create Account
                  </h3>
                  <p className="text-muted small mb-0">
                    Join us today! It's quick and easy
                  </p>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your full name"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#f093fb")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
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
                    onFocus={(e) => (e.target.style.borderColor = "#f093fb")}
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
                    placeholder="Create a strong password"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#f093fb")}
                    onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
                  />
                  <small className="text-muted">
                    Must be at least 8 characters
                  </small>
                </div>

                <button
                  className="btn btn-lg w-100 text-white fw-semibold shadow-sm"
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(240, 147, 251, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "";
                  }}
                >
                  Create Account
                </button>

                <div className="text-center mt-3">
                  <p className="text-muted small mb-0">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-decoration-none fw-semibold"
                      style={{ color: "#f5576c" }}
                    >
                      Login here
                    </a>
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

export default Register;
