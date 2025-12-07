// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const CartFetch = () => {
//   const [data, setData] = useState([]);

//   // const totalPrice = data.reduce(
//   //   (acc, item) => acc + Number(item.cartProduct.price) * Number(item.quantity),
//   //   0
//   // );

//   // console.log(totalPrice);

//   async function fetchData(params) {
//     const rawToken = localStorage.getItem("token");
//     const token = rawToken ? JSON.parse(rawToken) : null;

//     if (!token) {
//       alert("Token not found! Please login again.");
//       return;
//     }
//     try {
//       const res = await axios.get("http://localhost:3000/api/carts/demo", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });

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

//       setData(res.data.cart.items);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function handleSubmit(id) {
//     try {
//       const rawToken = localStorage.getItem("token");
//       const token = rawToken ? JSON.parse(rawToken) : null;

//       if (!token) {
//         alert("Token not found! Please login again.");
//         return;
//       }

//       const res = await axios.post(
//         `http://localhost:3000/api/carts/demo/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );

//       fetchData(); // Refresh UI
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row mt-5" style={{ marginTop: "140px" }}>
//           <h2 className="mt-5">Your Cart</h2>

//           {data.length === 0 && <p>No items in cart</p>}

//           {/* {data.map((item) => (
//             <div className="col-md-3 mt-3" key={item._id}>
//               <div className="card p-2">
//                 <img
//                   src={item.cartProduct.img1}
//                   alt={item.cartProduct.name}
//                   style={{ height: "200px", objectFit: "cover" }}
//                 />
//                 <h5 className="mt-2">{item.cartProduct.name}</h5>

//                 <p>Price: ₹{item.cartProduct?.price}</p>

//                 <button
//                   className="btn btn-sm btn-outline-success"
//                   onClick={() => handleSubmit(item.cartProduct._id)}
//                 >
//                   +
//                 </button>
//                 <p>Quantity: {item.quantity}</p>
//                 <button className="btn btn-sm btn-outline-danger">-</button>
//               </div>
//             </div>
//           ))} */}

//           {data.map((item) =>
//             item.cartProduct ? (
//               <div className="col-md-3 mt-3" key={item._id}>
//                 <div className="card p-2">
//                   <img
//                     src={item.cartProduct.img1}
//                     alt={item.cartProduct.name}
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                   <h5 className="mt-2">{item.cartProduct.name}</h5>
//                   <p>Price: ₹{item.cartProduct.price}</p>

//                   <button
//                     className="btn btn-sm btn-outline-success"
//                     onClick={() => handleSubmit(item.cartProduct._id)}
//                   >
//                     +
//                   </button>
//                   <p>Quantity: {item.quantity}</p>
//                   <button className="btn btn-sm btn-outline-danger">-</button>
//                 </div>
//               </div>
//             ) : null
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartFetch;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartFetch = () => {
  console.log("Cart component loaded");

  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let totalPrice = data.reduce(
    (acc, val) => {
  // Check if cartProduct exists
  if (val.cartProduct && val.cartProduct.price) {
    return acc + Number(val.cartProduct.price) * Number(val.quantity);
  } else {
    return acc; // skip if cartProduct is null
  }
},
    0
  );

  let discount = totalPrice * 0.1;

  let totalAmount = totalPrice - discount;

  async function getUserCart(params) {
    try {
      const response = await axios.get("http://localhost:3000/api/carts/demo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response);
      setData(response.data.cart.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  const incrementQty = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/carts/demo/${id}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      getUserCart();
    } catch (error) {
      console.error(error);
    }
  };

  const decrementQty = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/carts/demo/decrement/${id}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      getUserCart();
    } catch (error) {
      console.error(error);
    }
  };

  const removeCart = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/carts/demo/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      getUserCart();
    } catch (error) {
      console.error(error);
    }
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      {/* <div className="container" style={{ marginTop: "130px" }}>
        {data.length === 0 ? (
          <>
            <h2 className="text-center">Cart is empty </h2>
          </>
        ) : (
          <>
            {" "}
            <div className="row">
              <div className="col-md-8 ">
               
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    color: "#333",
                    paddingBottom: "10px",
                    marginBottom: "25px",
                  }}
                >
                  CART SUMMARY
                </h3>

                {data.map((item, index) => (
                  <div className=" mb-2 border border-2 rounded shadow-sm bg-white me-5">
                    <div className="d-flex justify-content-between align-items-center mx-2">
                      <div className="d-flex flex-rows align-items-center">
                        <div className="img">
                          <img
                            src={item.cartProduct.img1}
                            alt="productImg"
                            className="img-fluid"
                            style={{ height: "150px", objectFit: "cover" }}
                          />
                        </div>
                        <div className="cart-name ms-3  mb-3 ">
                          <p>{item.cartProduct.name}</p>
                          <p>{item.cartProduct.price}</p>
                        </div>
                      </div>

                      <div
                        className="d-flex align-items-center"
                        style={{
                          gap: "10px",
                          padding: "8px 12px",
                          borderRadius: "10px",
                          border: "1px solid #e0e0e0",
                          background: "#fafafa",
                        }}
                      >
                        <button className="btn btn-sm btn-outline-success fw-bold">
                          +
                        </button>

                        <p
                          style={{
                            margin: "0",
                            fontSize: "1rem",
                            fontWeight: "600",
                            minWidth: "20px",
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </p>

                        <button className="btn btn-sm btn-outline-danger fw-bold">
                          -
                        </button>
                      </div>

                      <div>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          style={{
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontWeight: "600",
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4 ">
                  <h3
                  className="text-end"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    color: "#333",
                    paddingBottom: "10px",
                    marginBottom: "80px",
                  }}
                >
                  CART TOTALS


                </h3>
                <div className="summary mx-2">

                  <div className="d-flex justify-content-between align-items-center">
                    <p className="">
                      <b>Subtotal : </b>
                    </p>

                    <p className=""> {totalPrice}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="">
                      <b>Discount : </b>
                    </p>

                    <p className="">{discount}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="">
                      <b>Total Amount</b>{" "}
                    </p>

                    <p className="">{totalAmount}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>  */}

      <div
        className="container"
        style={{
          marginTop: "130px",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          padding: "50px 30px",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
        }}
      >
        {data.length === 0 ? (
          <>
            <h2
              className="text-center"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "2.5rem",
                fontWeight: "300",
                color: "#666",
                letterSpacing: "2px",
                padding: "80px 0",
              }}
            >
              YOUR CART IS EMPTY
            </h2>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col-md-8">
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2rem",
                    fontWeight: "700",
                    letterSpacing: "3px",
                    color: "#1a1a1a",
                    borderBottom: "3px solid #d4af37",
                    paddingBottom: "15px",
                    marginBottom: "40px",
                    textTransform: "uppercase",
                  }}
                >
                  Shopping Cart
                </h3>

                {data.map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 border-0 rounded-3 bg-white"
                    style={{
                      boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                      overflow: "hidden",
                      border: "1px solid #f0f0f0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 12px 40px rgba(0,0,0,0.15)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 8px 30px rgba(0,0,0,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center p-4">
                      <div className="d-flex flex-rows align-items-center">
                        <div
                          className="img"
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            border: "2px solid #f8f9fa",
                          }}
                        >
                          <img
                            src={item.cartProduct?.img1}
                            alt="productImg"
                            className="img-fluid"
                            style={{
                              height: "160px",
                              width: "160px",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.transform = "scale(1.05)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          />
                        </div>
                        <div className="cart-name ms-4">
                          <h5
                            style={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "1.3rem",
                              fontWeight: "600",
                              color: "#2c2c2c",
                              marginBottom: "12px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {item.cartProduct?.name}
                          </h5>
                          <p
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: "700",
                              color: "#d4af37",
                              margin: "0",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            ₹{item.cartProduct?.price}
                          </p>
                        </div>
                      </div>

                      <div
                        className="d-flex align-items-center"
                        style={{
                          gap: "15px",
                          padding: "12px 20px",
                          borderRadius: "50px",
                          border: "2px solid #e8e8e8",
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                        }}
                      >
                        <button
                          className="btn btn-sm fw-bold"
                          style={{
                            background:
                              "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                            color: "#fff",
                            border: "none",
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            fontSize: "1.2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(40,167,69,0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                            e.currentTarget.style.boxShadow =
                              "0 6px 20px rgba(40,167,69,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 12px rgba(40,167,69,0.3)";
                          }}
                          onClick={() => incrementQty(item.cartProduct._id)}
                        >
                          +
                        </button>

                        <p
                          style={{
                            margin: "0",
                            fontSize: "1.2rem",
                            fontWeight: "700",
                            minWidth: "30px",
                            textAlign: "center",
                            color: "#2c2c2c",
                          }}
                        >
                          {item.quantity}
                        </p>

                        <button
                          className="btn btn-sm fw-bold"
                          style={{
                            background:
                              "linear-gradient(135deg, #6c757d 0%, #5a6268 100%)",
                            color: "#fff",
                            border: "none",
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            fontSize: "1.2rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(108,117,125,0.3)",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                            e.currentTarget.style.boxShadow =
                              "0 6px 20px rgba(108,117,125,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 12px rgba(108,117,125,0.3)";
                          }}
                          onClick={() => decrementQty(item.cartProduct._id)}
                        >
                          −
                        </button>
                      </div>

                      <div>
                        <button
                          className="btn btn-sm"
                          style={{
                            padding: "10px 24px",
                            borderRadius: "25px",
                            fontWeight: "600",
                            fontSize: "0.95rem",
                            letterSpacing: "0.5px",
                            background:
                              "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
                            color: "#fff",
                            border: "none",
                            boxShadow: "0 4px 15px rgba(220,53,69,0.3)",
                            transition: "all 0.3s ease",
                            textTransform: "uppercase",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                              "0 6px 25px rgba(220,53,69,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 15px rgba(220,53,69,0.3)";
                          }}
                          onClick={() => removeCart(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-md-4">
                <div
                  style={{
                    position: "sticky",
                    top: "150px",
                    background:
                      "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
                    padding: "40px 35px",
                    borderRadius: "20px",
                    boxShadow: "0 15px 50px rgba(0,0,0,0.3)",
                    border: "1px solid #d4af37",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.8rem",
                      fontWeight: "700",
                      letterSpacing: "3px",
                      color: "#d4af37",
                      borderBottom: "2px solid #d4af37",
                      paddingBottom: "20px",
                      marginBottom: "35px",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Order Summary
                  </h3>

                  <div className="summary">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "400",
                          color: "#e0e0e0",
                          margin: "0",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Subtotal
                      </p>
                      <p
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "600",
                          color: "#ffffff",
                          margin: "0",
                        }}
                      >
                        ₹{totalPrice}
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "400",
                          color: "#e0e0e0",
                          margin: "0",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Discount
                      </p>
                      <p
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "600",
                          color: "#28a745",
                          margin: "0",
                        }}
                      >
                        −₹{discount.toFixed(2)}
                      </p>
                    </div>

                    <hr
                      style={{
                        border: "none",
                        height: "1px",
                        background:
                          "linear-gradient(90deg, transparent, #d4af37, transparent)",
                        margin: "25px 0",
                      }}
                    />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "700",
                          color: "#d4af37",
                          margin: "0",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        Total
                      </p>
                      <p
                        style={{
                          fontSize: "1.8rem",
                          fontWeight: "800",
                          color: "#d4af37",
                          margin: "0",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        ₹{totalAmount.toFixed(0)}
                      </p>
                    </div>

                    <button
                      className="btn w-100 mt-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)",
                        color: "#1a1a1a",
                        border: "none",
                        padding: "16px",
                        borderRadius: "12px",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        boxShadow: "0 8px 25px rgba(212,175,55,0.4)",
                        transition: "all 0.3s ease",
                        fontFamily: "Playfair Display, serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 35px rgba(212,175,55,0.6)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(212,175,55,0.4)";
                      }}
                      onClick={handleProceedToCheckout}
                    >
                      Proceed to Checkout
                    </button>

                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "0.85rem",
                        color: "#b0b0b0",
                        marginTop: "20px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      🔒 Secure Checkout • Free Shipping on orders above ₹2000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartFetch;
