// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Products = () => {
//   const [data, setData] = useState([]);

//   const navigate = useNavigate();
//   useEffect(() => {
//     async function fetch() {
//       const res = await axios.get(
//         "http://localhost:3000/api/product/getProducts"
//       );

//       console.log(res);
//       setData(res.data.products);
//     }

//     fetch();
//   }, []);
//   console.log("dataaaa", data);

//   async function addProductToCart(productId) {
//     const rawToken = localStorage.getItem("token");
//     const token = rawToken ? JSON.parse(rawToken) : null;

//     if (!token) {
//       alert("Token not found! Please login again.");
//       return;
//     }
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/carts/demo",
//         {
//           cartProduct: productId,
//           quantity: 1,
//         },
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       // console.log(typeof res.data.items[0]);

//       console.log("cart Fetch : ", res);
//       console.log("cart Fetch : ", res.data.cart);
//       console.log("cart Fetch items : ", res.data.cart.items);
//       console.log(
//         "cart Fetch cartProduct : ",
//         res.data.cart.items[0].cartProduct
//       );
//       console.log(
//         "cart Fetch cartProduct qty : ",
//         res.data.cart.items[0].quantity
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row" style={{ marginTop: "150px" }}>
//           {data.map((item) => (
//             <div className="col-md-3 mb-4" key={item._id}>
//               <div className="card shadow-sm h-100 border-0 rounded-4">
//                 <img
//                   src={item.img1}
//                   alt={item.name}
//                   className="card-img-top rounded-top-4"
//                   style={{ height: "250px", objectFit: "cover" }}
//                 />

//                 <div className="card-body">
//                   <h5 className="card-title fw-semibold">{item.name}</h5>
//                   {/* <p className="text-muted" style={{ fontSize: "0.9rem" }}>
//                     {item.desc.substring(0, 50)}...
//                   </p> */}

//                   <h5 className="text-danger fw-bold text-center mb-3">
//                     ₹{item.price}
//                   </h5>

//                   <div className="text-center">
//                     <button
//                       className="btn btn-primary px-4"
//                       // onClick={() => addToCart(item)}
//                       onClick={() => addProductToCart(item._id)}
//                     >
//                       Add To Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Products = () => {

  console.log("Products component loaded");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);


  const token = JSON.parse(localStorage.getItem("token"));

  const addToCartProduct = async (productId) => {
    try {
      const response = await axios.post(
        `https://mern-gamma-swart.vercel.app/api/carts/demo`,
        {
          cartProduct: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      toast.success("product added to cart");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await axios.get(
          "https://mern-gamma-swart.vercel.app/api/product/getProducts",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setData(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllProducts();
  }, []);

  if (loading) {
    return (
      <h3 className="text-center " style={{ marginTop: "150px" }}>
        Loading Products...
      </h3>
    );
  }

  return (
    <>
      {/* <div className="container">
        <div className="row" style={{ marginTop: "130px" }}>
          <h2 className="text-center mb-5">Collection</h2>

          {data.map((item, index) => (
            <div className="col-md-3 mb-5" key={index}>
              <div className="card rounded border h-100 shadow-sm ">
                <img
                  src={item.img1}
                  alt="product Img"
                  className="img-fluid"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h4>{item.name}</h4>
                  <p>₹ {item.price}</p>

                  <button className="btn btn-outline-secondary">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="container">
        <div className="row" style={{ marginTop: "120px" }}>
          <h2
            className="text-center mb-5"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "2.8rem",
              fontWeight: "300",
              letterSpacing: "8px",
              color: "#1a1a1a",
              textTransform: "uppercase",
              marginBottom: "60px",
              position: "relative",
              paddingBottom: "25px",
            }}
          >
            Our Collection
            <span
              style={{
                display: "block",
                width: "60px",
                height: "2px",
                background: "#d4af37",
                margin: "20px auto 0",
              }}
            ></span>
          </h2>

          {data.map((item, index) => (
            <div className="col-md-3 mb-5" key={index}>
              <div
                className="card border-0 h-100 shadow-lg"
                style={{
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "0 5px 15px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={item.img1}
                  alt="product Img"
                  loading="lazy"
                  className="img-fluid"
                  style={{
                    height: "260px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="card-body text-center"
                  style={{
                    background: "#f8f9fc",
                    padding: "25px",
                  }}
                >
                  <h4 className="fw-semibold" style={{ color: "#333" }}>
                    {item.name}
                  </h4>

                  <p
                    className="mt-2 mb-4"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#0c0c0dff",
                    }}
                  >
                    ₹ {item.price}
                  </p>

                  <button
                    className="btn"
                    style={{
                      background: "#c07c52ff",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#4f47d8")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#6c63ff")
                    }
                    onClick={() => addToCartProduct(item._id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
