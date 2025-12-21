import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const rawToken = localStorage.getItem("token");
    const token = rawToken ? JSON.parse(rawToken) : null;

    if (!token) {
      alert("Token not found! Please login again.");
      return;
    }

    async function fetch() {
      try {
        const res = await axios.get(
          "https://mern-backend-oe29.onrender.com/api/user/singleuser",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setData(res.data.sengleUser);
      } catch (error) {
        console.error(error);
      }
    }

    fetch();
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center py-5 min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginTop: "80px" }}
        >
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="rounded shadow-lg p-4 p-md-5"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Profile Header */}
              <div className="text-center mb-4">
                {/* <div
                  className="rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
                  }}
                >
                  <span className="text-white fw-bold" style={{ fontSize: "50px" }}>
                    {data?.fullName?.charAt(0).toUpperCase()}
                  </span>
                </div> */}
                <h2 className="fw-bold mb-1" style={{ color: "#667eea" }}>
                  My Profile
                </h2>
                <p className="text-muted">Manage your account information</p>
              </div>

              {data && (
                <>
                  {/* Profile Information */}
                  <div className="mb-4">
                    <div
                      className="rounded mb-3 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                        border: "2px solid rgba(102, 126, 234, 0.2)",
                      }}
                    >
                      <label className="text-muted small mb-2 d-block fw-semibold">
                        FULL NAME
                      </label>
                      <h4
                        className="mb-0 fw-semibold"
                        style={{ color: "#2d3748" }}
                      >
                        {data.fullName}
                      </h4>
                    </div>

                    <div
                      className="rounded mb-3 p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                        border: "2px solid rgba(102, 126, 234, 0.2)",
                      }}
                    >
                      <label className="text-muted small mb-2 d-block fw-semibold">
                        EMAIL ADDRESS
                      </label>
                      <h4
                        className="mb-0 fw-semibold"
                        style={{ color: "#2d3748" }}
                      >
                        {data.email}
                      </h4>
                    </div>

                    <div
                      className="rounded p-4"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                        border: "2px solid rgba(102, 126, 234, 0.2)",
                      }}
                    >
                      <label className="text-muted small mb-2 d-block fw-semibold">
                        ACCOUNT ID
                      </label>
                      <p className="mb-0 text-muted font-monospace small">
                        {data._id}
                      </p>
                    </div>
                  </div>

{/*                  
                  <div className="d-grid gap-3">
                    <button
                      className="btn btn-lg py-3 fw-semibold text-white border-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                      }}
                    >
                      ✏️ Update Profile
                    </button>

                    <button
                      className="btn btn-lg py-3 fw-semibold"
                      style={{
                        background: "transparent",
                        border: "2px solid #dc3545",
                        color: "#dc3545",
                      }}
                    >
                      🗑️ Delete Account
                    </button>
                  </div> */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
