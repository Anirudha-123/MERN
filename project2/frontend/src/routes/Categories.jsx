// import React, { useState } from "react";
// import data from "./RoutesData.jsx";
// import { useNavigate, useParams } from "react-router-dom";

// const Categories = () => {
//   const { category, type } = useParams();

//   const [productData, setProductData] = useState([])

//   const navigate = useNavigate();

//   // category = 'mens'
//   // type = 't-shirt' OR 'shirt' OR 'short'

//   const fetchAllProducts = async (params) => {
//     // const token = JSON.parse(localStorage.getItem("token"))

//     try {
//       const response = await axios.get(
//         "http://localhost:3000/api/product/getProducts"
//       );

//       setProductData(response.data.products);
//     } catch (error) {
//       toast.error("failed to fetch products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllProducts();
//   }, []);

//   const newProducts = productData

//   const products = data[0][category][0][type];

//   return (
//     <div className="container" style={{ marginTop: "100px" }}>
//       <h2 className="mb-5">
//         {category.charAt(0).toUpperCase() + category.slice(1)} {type}
//       </h2>

//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {products.map((item) => (
//           // <div key={item.id} style={{ width: "300px" }}>
//           //   <img
//           //     src={Array.isArray(item.img) ? item.img[0] : item.img}
//           //     style={{ width: "100%",height:"300px", borderRadius: "10px" }}
//           //     onClick={() => navigate(`/product/${item.id}`)}
//           //   />
//           //   <p>ID: {item.id}</p>
//           // </div>
//           <div className="col-md-3">
//             <div className="card h-100 rounded"style={{borderBottom:"none",borderInline:"none"}} >
//               <img
//                 src={Array.isArray(item.img) ? item.img[0] : item.img}
//                 alt=""
//                 className="img-fluid rounded"
//                 onClick={() => navigate(`/product/${item.id}`)}
//                 style={{height:"400px",objectFit:"cover"}}
//               />
//               {/* <p >ID: {item.id}</p> */}
//               <p > {item.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const { category, type } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getProducts"
      );
      setProductData(response.data.products);
      console.log(response.data.products);
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const filteredProducts = productData.filter(
    (item) => item.category === category && item.subCategory === type
  );

  // filteredProducts.forEach(item => {
  //   console.log(item.name, item.category, item.subCategory);
  // });

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh", // full viewport height
          display: "flex",
          alignItems: "center", // vertical center
          justifyContent: "center", // horizontal center
        }}
      >
        <div className="page-loader">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="mb-5">
        {category.charAt(0).toUpperCase() + category.slice(1)} {type}
      </h2>

      <div className="row">
        {filteredProducts.map((item) => (
          <div className="col-md-3 mb-3" key={item.id}>
            <div
              className="card h-100 border rounded"
              style={{ borderBottom: "none", borderInline: "none" }}
            >
              {/* <img
                src={item?.img1}
                alt={item.name}
                className="img-fluid rounded"
                style={{ height: "400px", objectFit: "cover", cursor: "pointer" }}
                onClick={() => navigate(`/product/${item._id}`)}
              /> */}
              <div class="text-center product-image-container-with-overlay">
                <img
                  src={item?.img1}
                  alt="itemImg"
                  class="img-fluid"
                  style={{ height: "380px", objectFit: "cover" }}
                  onClick={() => navigate(`/product/${item._id}`)}
                />
              </div>
              <p
                className="mt-3 ms-3 mb-1"
                style={{ fontFamily: "math", fontSize: "18px" }}
              >
                {item.name}
              </p>
              <p className="ms-3 mb-3" style={{ fontSize: "17px", margin: 0 }}>
                <span style={{ fontWeight: "600", color: "#111" }}>
                  ₹{item.price}
                </span>

                {item.originalPrice && (
                  <>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#9e9e9e",
                        marginLeft: "8px",
                        fontSize: "15px",
                      }}
                    >
                      ₹{item.originalPrice}
                    </span>

                    <span
                      style={{
                        color: "#0fa958",
                        fontWeight: "600",
                        marginLeft: "8px",
                        fontSize: "15px",
                      }}
                    >
                      {Math.round(
                        ((item.originalPrice - item.price) /
                          item.originalPrice) *
                          100
                      )}
                      % OFF
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
