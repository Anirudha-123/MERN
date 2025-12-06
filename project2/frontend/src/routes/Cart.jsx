// import React from "react";
// import { useCart } from "../context/CartContext";

// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, loading, update, removeAllData } = useCart();

//   const navigate = useNavigate();

//   const totalMRP = cart.reduce(
//     (acc, curr) => acc + Number(curr.price) * curr.qty,
//     0
//   );

//   const discount = totalMRP * 0.1;

//   const total = totalMRP - discount;

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   return (
//     <>
//       <div className="container">
//         {cart.length === 0 ? (
//           <>
//             <>
//               <div
//                 className="text-center"
//                 style={{ marginTop: "150px", marginBottom: "100px" }}
//               >
//                 <h2>There’s Nothing in Your Bag 😔</h2>
//                 <p className="mb-3">
//                   Let’s add some items to make your shopping fun!
//                 </p>
//                 <button
//                   className="btn btn-outline-success"
//                   onClick={() => navigate("/collections")}
//                 >
//                   Start Shopping Now!
//                 </button>
//               </div>
//             </>
//           </>
//         ) : (
//           <>
//             <div className="row" style={{ marginTop: "100px" }}>
//               <div className="col-md-6">
//                 {cart.map((item, index) => (
//                   <div
//                     className="border  d-flex flex-row align-items-center  mb-3"
//                     key={index}
//                   >
//                     <div className="">
//                       <img
//                         src={item.img1}
//                         alt=""
//                         className="img-fluid p-2"
//                         onClick={() => navigate(`/product/${item.id}`)}
//                         style={{
//                           height: "200px",
//                           width: "200px",
//                           objectFit: "cover",
//                         }}
//                       />
//                     </div>
//                     <p className="ms-5">Qty</p>

//                     <div className="">
//                       <select
//                         value={item.qty}
//                         className="form-select w-auto ms-4"
//                         onChange={(e) => update(item, e.target.value)}
//                       >
//                         {[1, 2, 3, 4, 5].map((qty) => (
//                           <option value={qty} key={qty}>
//                             {qty}
//                           </option>
//                         ))}
//                       </select>
//                     </div>

//                     <div
//                       className=" text-end me-3 "
//                       style={{ marginLeft: "100px" }}
//                     >
//                       <p>
//                         {/* <b>Name : </b> */}
//                         <b> {item.name}</b>
//                       </p>
//                       <p>
//                         <b>Size : </b>
//                         {item.size}
//                       </p>
//                       <p>₹ {item.price}</p>
//                       {/* <p>₹ {totalMRP}</p> */}
//                       <button
//                         className="btn btn-danger btn btn-sm m-2"
//                         onClick={() => removeAllData(item._id)}
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {/* <div className="col-md-6">
//                 <div className="summary">
//                   <h3 className="text-center">Summary</h3>

//                   <h3>Cart Length : {cart.length}</h3>
//                   <h3>Total Amount : {cartData}</h3>
//                 </div>
//               </div> */}
//               <div className="col-md-6">
//                 <div className=" rounded border" style={{ maxHeight: "800px" }}>
//                   <div className="p-3">
//                     <p>TotalMRP : {totalMRP.toFixed(2)}</p>
//                     <p>Discount : {discount.toFixed(2)}</p>

//                     <hr />
//                     <p>Total : {total.toFixed(2)}</p>
//                   </div>
//                   <div className="mt-3 mx-3">
//                     <button
//                       className="btn btn-success w-100 mb-3"
//                       // onClick={() => {

//                       //   navigate("/checkout", {
//                       //     state: { total },
//                       //   });
//                       // }}
//                       onClick={() => navigate("/checkout")}
//                     >
//                       PROCEED TO CHECKOUT
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;


//second

import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, loading, update, removeAllData } = useCart();
  const navigate = useNavigate();

  const totalMRP = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );
  const discount = totalMRP * 0.1;
  const total = totalMRP - discount;

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      {cart.length === 0 ? (
        <div
          className="text-center"
          style={{ marginTop: "150px", marginBottom: "100px" }}
        >
          <h2>There’s Nothing in Your Bag 😔</h2>
          <p className="mb-3">Let’s add some items to make your shopping fun!</p>
          <button
            className="btn btn-outline-success"
            onClick={() => navigate("/collections")}
          >
            Start Shopping Now!
          </button>
        </div>
      ) : (
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6">
            {cart.map((item, index) => (
              <div
                className="border d-flex flex-row align-items-center mb-3"
                key={index}
              >
                <img
                  src={item.img1 ? item.img1 : item.img[0] }
                  alt=""
                  className="img-fluid p-2"
                  onClick={() => navigate(`/product/${item._id}`)}
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                />

                <p className="ms-5">Qty</p>

                <select
                  value={item.qty}
                  className="form-select w-auto ms-4"
                  onChange={(e) => update(item, e.target.value)}
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option value={qty} key={qty}>
                      {qty}
                    </option>
                  ))}
                </select>

               
                <div className="text-end me-3" style={{ marginLeft: "100px" }}>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  {/* <p>
                    <b>Size:</b> {item.size || "N/A"}
                  </p> */}
                  <p>₹ {item.price}</p>

                  <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => removeAllData(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-6">
            <div className="rounded border" style={{ maxHeight: "800px" }}>
              <div className="p-3">
                <p>Total MRP : ₹{totalMRP.toFixed(2)}</p>
                <p>Discount (10%) : ₹{discount.toFixed(2)}</p>
                <hr />
                <p><b>Total : ₹{total.toFixed(2)}</b></p>
              </div>

              <div className="mt-3 mx-3">
                <button
                  className="btn btn-success w-100 mb-3"
                  onClick={() => navigate("/checkout")}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;



//third

// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, loading, update, removeAllData } = useCart();

//   const navigate = useNavigate();

//   const totalMRP = cart.reduce(
//     (acc, curr) => acc + Number(curr.price) * curr.qty,
//     0
//   );

//   const discount = totalMRP * 0.1;

//   const total = totalMRP - discount;

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center min-vh-100">
//         <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="container py-5" style={{ marginTop: "80px", minHeight: "70vh" }}>
//         {cart.length === 0 ? (
//           <div
//             className="text-center d-flex flex-column align-items-center justify-content-center"
//             style={{ marginTop: "100px", marginBottom: "100px" }}
//           >
//             <div
//               style={{
//                 fontSize: '80px',
//                 marginBottom: '20px',
//                 opacity: '0.3'
//               }}
//             >
//               🛒
//             </div>
//             <h2 className="fw-bold mb-3" style={{ color: '#333' }}>
//               Your Cart is Empty
//             </h2>
//             <p className="text-muted mb-4" style={{ fontSize: '16px' }}>
//               Looks like you haven't added anything to your cart yet
//             </p>
//             <button
//               className="btn btn-lg text-white fw-semibold"
//               onClick={() => navigate("/collections")}
//               style={{
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 border: 'none',
//                 borderRadius: '12px',
//                 padding: '14px 40px',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '';
//               }}
//             >
//               Start Shopping Now
//             </button>
//           </div>
//         ) : (
//           <>
//             <h2 className="fw-bold mb-4" style={{ color: '#333' }}>
//               Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
//             </h2>

//             <div className="row g-4">
//               {/* Cart Items */}
//               <div className="col-lg-8">
//                 {cart.map((item, index) => (
//                   <div
//                     className="border-0 shadow-sm rounded mb-3 p-3"
//                     key={index}
//                     style={{
//                       background: '#fff',
//                       transition: 'all 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
//                     }}
//                   >
//                     <div className="row align-items-center g-3">
//                       {/* Product Image */}
//                       <div className="col-4 col-md-3">
//                         <div
//                           style={{
//                             borderRadius: '12px',
//                             overflow: 'hidden',
//                             cursor: 'pointer',
//                             border: '2px solid #f0f0f0'
//                           }}
//                           onClick={() => navigate(`/product/${item.id}`)}
//                         >
//                           <img
//                             src={item.img[0]}
//                             alt={item.name}
//                             className="img-fluid"
//                             style={{
//                               height: "150px",
//                               width: "100%",
//                               objectFit: "cover",
//                               transition: 'transform 0.3s ease'
//                             }}
//                             onMouseEnter={(e) => {
//                               e.target.style.transform = 'scale(1.05)';
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.transform = 'scale(1)';
//                             }}
//                           />
//                         </div>
//                       </div>

//                       {/* Product Details */}
//                       <div className="col-8 col-md-9">
//                         <div className="row align-items-center">
//                           <div className="col-md-5">
//                             <h6 className="fw-bold mb-2" style={{ color: '#333', fontSize: '16px' }}>
//                               {item.name}
//                             </h6>
//                             <p className="text-muted mb-1" style={{ fontSize: '14px' }}>
//                               <strong>Size:</strong> {item.size}
//                             </p>
//                             <p className="fw-bold mb-0" style={{ color: '#667eea', fontSize: '18px' }}>
//                               ₹{Number(item.price).toFixed(2)}
//                             </p>
//                           </div>

//                           {/* Quantity Selector */}
//                           <div className="col-md-4 mt-3 mt-md-0">
//                             <label className="small text-muted mb-2 d-block">Quantity</label>
//                             <select
//                               value={item.qty}
//                               className="form-select"
//                               onChange={(e) => update(item, e.target.value)}
//                               style={{
//                                 borderRadius: '8px',
//                                 border: '2px solid #e0e0e0',
//                                 fontWeight: '500',
//                                 maxWidth: '100px'
//                               }}
//                             >
//                               {[1, 2, 3, 4, 5].map((qty) => (
//                                 <option value={qty} key={qty}>
//                                   {qty}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>

//                           {/* Subtotal & Remove Button */}
//                           <div className="col-md-3 text-md-end mt-3 mt-md-0">
//                             <p className="fw-bold mb-2" style={{ fontSize: '16px', color: '#333' }}>
//                               ₹{(Number(item.price) * item.qty).toFixed(2)}
//                             </p>
//                             <button
//                               className="btn btn-outline-danger btn-sm"
//                               onClick={() => removeAllData(item.id)}
//                               style={{
//                                 borderRadius: '8px',
//                                 padding: '6px 16px',
//                                 fontWeight: '500',
//                                 transition: 'all 0.2s'
//                               }}
//                               onMouseEnter={(e) => {
//                                 e.target.style.background = '#dc3545';
//                                 e.target.style.color = '#fff';
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.target.style.background = '';
//                                 e.target.style.color = '';
//                               }}
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Order Summary */}
//               <div className="col-lg-4">
//                 <div
//                   className="border-0 shadow-sm rounded p-4 position-sticky"
//                   style={{
//                     top: '100px',
//                     background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
//                   }}
//                 >
//                   <h5 className="fw-bold mb-4" style={{ color: '#333' }}>
//                     Order Summary
//                   </h5>

//                   <div className="mb-3">
//                     <div className="d-flex justify-content-between mb-2">
//                       <span className="text-muted">Subtotal ({cart.length} items)</span>
//                       <span className="fw-semibold">₹{totalMRP.toFixed(2)}</span>
//                     </div>
//                     <div className="d-flex justify-content-between mb-2">
//                       <span className="text-muted">Discount (10%)</span>
//                       <span className="fw-semibold" style={{ color: '#11998e' }}>
//                         -₹{discount.toFixed(2)}
//                       </span>
//                     </div>
//                     <div className="d-flex justify-content-between mb-2">
//                       <span className="text-muted">Delivery Charges</span>
//                       <span className="fw-semibold" style={{ color: '#11998e' }}>
//                         FREE
//                       </span>
//                     </div>
//                   </div>

//                   <hr style={{ borderTop: '2px solid #e0e0e0' }} />

//                   <div className="d-flex justify-content-between mb-4">
//                     <span className="fw-bold" style={{ fontSize: '18px' }}>Total Amount</span>
//                     <span className="fw-bold" style={{ fontSize: '20px', color: '#667eea' }}>
//                       ₹{total.toFixed(2)}
//                     </span>
//                   </div>

//                   <button
//                     className="btn btn-lg w-100 text-white fw-semibold"
//                     onClick={() => navigate("/checkout")}
//                     style={{
//                       background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
//                       border: 'none',
//                       borderRadius: '12px',
//                       padding: '14px',
//                       transition: 'all 0.3s ease',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.5px'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.transform = 'translateY(-2px)';
//                       e.target.style.boxShadow = '0 8px 20px rgba(17, 153, 142, 0.4)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.transform = 'translateY(0)';
//                       e.target.style.boxShadow = '';
//                     }}
//                   >
//                     Proceed to Checkout
//                   </button>

//                   <div className="mt-3 text-center">
//                     <small className="text-muted">
//                       🔒 Safe and Secure Payments
//                     </small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Cart;
