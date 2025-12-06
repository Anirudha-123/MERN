// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import { useUser } from "../context/AuthContext";

// const Profile = () => {
//   const [data, setData] = useState(null);

//   // const { setUser } = useUser();

//   useEffect(() => {
//     const rawToken = localStorage.getItem("token");
//     const token = rawToken ? JSON.parse(rawToken) : null;

//     if (!token) {
//       alert("Token not found! Please login again.");
//       return;
//     }

//     async function fetch() {
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/api/user/singleuser",
//           {
//             headers: {
//               Authorization: "Bearer " + token,
//             },
//           }
//         );

//         // console.log("user", res);
//         // console.log("user", res.data.sengleUser);

//         // setUser(res.data.sengleUser);

//         setData(res.data.sengleUser);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetch();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row" style={{ marginTop: "100px" }}>
//         <div className="">
//           <h2 className="mt-5 mb-5 text-center">Profile</h2>

//           {data && (
//             <>
//               {" "}
//               <h5>{data.fullName}</h5>
//               <p>{data.email}</p>
//             </>
//           )}

//           {/* <p>{user.name}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [data, setData] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     const rawToken = localStorage.getItem("token");
//     const token = rawToken ? JSON.parse(rawToken) : null;

//     if (!token) {
//       alert("Token not found! Please login again.");
//       navigate("/login");
//       return;
//     }

//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/user/singleuser",
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       setData(res.data.sengleUser);
//       setFormData({
//         fullName: res.data.sengleUser.fullName,
//         email: res.data.sengleUser.email,
//       });
//     } catch (error) {
//       console.error(error);
//       alert("Failed to fetch user data");
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const rawToken = localStorage.getItem("token");
//     const token = rawToken ? JSON.parse(rawToken) : null;

//     try {
//       const res = await axios.put(
//         "http://localhost:3000/api/user/update",
//         formData,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       alert(res.data.message);
//       setIsEditing(false);
//       fetchUserData();
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update profile");
//     }
//   };

//   const handleDelete = async () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     );

//     if (!confirmed) return;

//     const rawToken = localStorage.getItem("token");
//     const token = rawToken ? JSON.parse(rawToken) : null;

//     try {
//       const res = await axios.delete(
//         "http://localhost:3000/api/user/delete",
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       alert(res.data.message);
//       localStorage.removeItem("token");
//       navigate("/login");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to delete account");
//     }
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center py-5 min-vh-100"
//       style={{
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//       }}
//     >
//       <div className="container">
//         <div className="row justify-content-center" style={{marginTop:"90px"}}>
//           <div className="col-12 col-md-8 col-lg-6">
//             <div
//               className="rounded shadow-lg p-4 p-md-5"
//               style={{
//                 background: "rgba(255, 255, 255, 0.95)",
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
//               }}
//             >
//               {/* Profile Header */}
//               <div className="text-center mb-4">
//                 <div
//                   className="rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
//                   style={{
//                     width: "120px",
//                     height: "120px",
//                     background:
//                       "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                     boxShadow: "0 8px 20px rgba(102, 126, 234, 0.4)",
//                   }}
//                 >
//                   <span className="text-white fw-bold" style={{ fontSize: "50px" }}>
//                     {data?.fullName?.charAt(0).toUpperCase()}
//                   </span>
//                 </div>
//                 <h2 className="fw-bold mb-1" style={{ color: "#667eea" }}>
//                   {isEditing ? "Edit Profile" : "My Profile"}
//                 </h2>
//                 <p className="text-muted">Manage your account information</p>
//               </div>

//               {data && !isEditing ? (
//                 <>
//                   {/* View Mode */}
//                   <div className="mb-4">
//                     <div 
//                       className="rounded mb-3 p-4"
//                       style={{
//                         background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
//                         border: "2px solid rgba(102, 126, 234, 0.2)",
//                       }}
//                     >
//                       <label className="text-muted small mb-2 d-block fw-semibold">
//                         FULL NAME
//                       </label>
//                       <h4 className="mb-0 fw-semibold" style={{ color: "#2d3748" }}>
//                         {data.fullName}
//                       </h4>
//                     </div>

//                     <div 
//                       className="rounded mb-3 p-4"
//                       style={{
//                         background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
//                         border: "2px solid rgba(102, 126, 234, 0.2)",
//                       }}
//                     >
//                       <label className="text-muted small mb-2 d-block fw-semibold">
//                         EMAIL ADDRESS
//                       </label>
//                       <h4 className="mb-0 fw-semibold" style={{ color: "#2d3748" }}>
//                         {data.email}
//                       </h4>
//                     </div>

//                     <div 
//                       className="rounded p-4"
//                       style={{
//                         background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
//                         border: "2px solid rgba(102, 126, 234, 0.2)",
//                       }}
//                     >
//                       <label className="text-muted small mb-2 d-block fw-semibold">
//                         ACCOUNT ID
//                       </label>
//                       <p className="mb-0 text-muted font-monospace small">
//                         {data._id}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="d-grid gap-3">
//                     <button
//                       onClick={() => setIsEditing(true)}
//                       className="btn btn-lg py-3 fw-semibold text-white border-0"
//                       style={{
//                         background:
//                           "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                         boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
//                         transition: "all 0.3s ease",
//                       }}
//                       onMouseOver={(e) => {
//                         e.target.style.transform = "translateY(-2px)";
//                         e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.5)";
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.transform = "translateY(0)";
//                         e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.4)";
//                       }}
//                     >
//                       ✏️ Update Profile
//                     </button>

//                     <button
//                       onClick={handleDelete}
//                       className="btn btn-lg py-3 fw-semibold"
//                       style={{
//                         background: "transparent",
//                         border: "2px solid #dc3545",
//                         color: "#dc3545",
//                         transition: "all 0.3s ease",
//                       }}
//                       onMouseOver={(e) => {
//                         e.target.style.background = "#dc3545";
//                         e.target.style.color = "white";
//                         e.target.style.transform = "translateY(-2px)";
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.background = "transparent";
//                         e.target.style.color = "#dc3545";
//                         e.target.style.transform = "translateY(0)";
//                       }}
//                     >
//                       🗑️ Delete Account
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   {/* Edit Mode */}
//                   <form onSubmit={handleUpdate}>
//                     <div className="mb-4">
//                       <label className="form-label fw-semibold mb-2" style={{ color: "#2d3748" }}>
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         className="form-control form-control-lg"
//                         placeholder="Enter your full name"
//                         required
//                         style={{
//                           border: "2px solid rgba(102, 126, 234, 0.3)",
//                           padding: "12px 20px",
//                           fontSize: "16px",
//                         }}
//                       />
//                     </div>

//                     <div className="mb-4">
//                       <label className="form-label fw-semibold mb-2" style={{ color: "#2d3748" }}>
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="form-control form-control-lg"
//                         placeholder="Enter your email"
//                         required
//                         style={{
//                           border: "2px solid rgba(102, 126, 234, 0.3)",
//                           padding: "12px 20px",
//                           fontSize: "16px",
//                         }}
//                       />
//                     </div>

//                     <div className="d-grid gap-3">
//                       <button
//                         type="submit"
//                         className="btn btn-lg py-3 fw-semibold text-white border-0"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
//                           boxShadow: "0 4px 15px rgba(56, 239, 125, 0.4)",
//                           transition: "all 0.3s ease",
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.transform = "translateY(-2px)";
//                           e.target.style.boxShadow = "0 6px 20px rgba(56, 239, 125, 0.5)";
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.transform = "translateY(0)";
//                           e.target.style.boxShadow = "0 4px 15px rgba(56, 239, 125, 0.4)";
//                         }}
//                       >
//                         ✓ Save Changes
//                       </button>

//                       <button
//                         type="button"
//                         onClick={() => {
//                           setIsEditing(false);
//                           setFormData({
//                             fullName: data.fullName,
//                             email: data.email,
//                           });
//                         }}
//                         className="btn btn-lg py-3 fw-semibold"
//                         style={{
//                           background: "transparent",
//                           border: "2px solid #6c757d",
//                           color: "#6c757d",
//                           transition: "all 0.3s ease",
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.background = "#6c757d";
//                           e.target.style.color = "white";
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.background = "transparent";
//                           e.target.style.color = "#6c757d";
//                         }}
//                       >
//                         ✕ Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


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
          "http://localhost:3000/api/user/singleuser",
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
        <div className="row justify-content-center" style={{marginTop:"80px"}}>
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
                      <h4 className="mb-0 fw-semibold" style={{ color: "#2d3748" }}>
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
                      <h4 className="mb-0 fw-semibold" style={{ color: "#2d3748" }}>
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

                  {/* Action Buttons */}
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
                  </div>
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
