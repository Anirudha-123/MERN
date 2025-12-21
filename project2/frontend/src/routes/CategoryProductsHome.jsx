
// import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import data from "./RoutesData.jsx"; // adjust path

// const CategoryProductsHome = () => {
//   const { category } = useParams(); // mens, womens, kids

//   const categories = data[0]; // your entire data structure

//   const allProducts = [];

//   // LOOP through category → shirt, t-shirt, etc
//   categories[category].forEach((subCatObj) => {
//     Object.keys(subCatObj).forEach((type) => {
//       subCatObj[type].forEach((item) => {
//         allProducts.push(item);
//       });
//     });
//   });

//   const navigate = useNavigate();

//   return (
//     <div className="container mt-5">
//       <h2
//         className="text-center text-success mb-4 "
//         style={{ marginTop: "100px" }}
//       >
//         {category.toUpperCase()} COLLECTION
//       </h2>

//       <div className="row">
//         {allProducts.map((p) => (
//           <div className="col-md-3 mb-4" key={p.id}>
//             <div className="card shadow">
//               <img
//                 src={Array.isArray(p.img) ? p.img[0] : p.img}
//                 className="card-img-top"
//                 style={{ height: "350px", objectFit: "cover" }}
//                 alt={p.name}
//                 onClick={() => navigate(`/product/${p.id}`)}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{p.name}</h5>
//                 <p>₹{p.price}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryProductsHome;


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CategoryProductsHome = () => {
  const { category } = useParams(); // mens | womens | kids
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://mern-backend-oe29.onrender.com/api/product/getProducts"
      );

      // FILTER PRODUCTS BY CATEGORY
      const filteredProducts = response.data.products.filter(
        (product) => product.category === category
      );

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [category]); // 👈 refetch when category changes

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">
      <h2
        className="text-center text-success mb-4"
        style={{ marginTop: "100px" }}
      >
        {category.toUpperCase()} COLLECTION
      </h2>

      <div className="row">
        {products.length === 0 ? (
          <h4 className="text-center">No products found</h4>
        ) : (
          products.map((p) => (
            <div className="col-md-3 mb-4" key={p._id}>
              <div className="card shadow-sm  ">

                <div className="text-center product-image-container-with-overlay">
                   <img
                  src={Array.isArray(p.img) ? p.img1[0] : p.img1}
                  className="product-image-container-with-overlay"
                  style={{ height: "350px", objectFit: "contain" }}
                  alt={p.name}
                  onClick={() => navigate(`/product/${p._id}`)}
                />
                </div>
               
                <div className="card-body ">
                  <h5 className="card-title">{p.name}</h5>
                    <p style={{ fontSize: "17px", margin: 0 }}>
                        <span style={{ fontWeight: "600", color: "#111" }}>
                          ₹{p.price}
                        </span>

                        {p.originalPrice && (
                          <>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "#9e9e9e",
                                marginLeft: "8px",
                                fontSize: "15px",
                              }}
                            >
                              ₹{p.originalPrice}
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
                                ((p.originalPrice - p.price) /
                                  p.originalPrice) *
                                  100
                              )}
                              % OFF
                            </span>
                          </>
                        )}
                      </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryProductsHome;

