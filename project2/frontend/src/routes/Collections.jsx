// // export default Collections;
// import React from "react";
// import { allProducts } from "./RoutesData.jsx";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext.jsx";

// const Collections = () => {
//   const navigate = useNavigate();

//   const { addToCart, cart, loading } = useCart();

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   return (
//     <div className="container " style={{ marginTop: "100px" }}>
//       <div className="row">
//         {allProducts.map((product) => (
//           <div className="col-md-3 mb-4" key={product.id}>
//             <div className="card shadow-sm h-100">
//               <img
//                 src={Array.isArray(product.img) ? product.img[0] : product.img}
//                 alt=""
//                 className="img-fluid"
//                 style={{ height: "300px", objectFit: "cover" }}
//                 onClick={() => navigate(`/product/${product.id}`)}
//               />
//               <div className="card-body">
//                 {/* <p>{product.desc}</p> */}
//                 <p className="text-center " style={{ fontSize: "17px" }}>
//                   {product.name}
//                 </p>

//                 <p className="text-center " style={{ fontSize: "17px" }}>
//                   {product.id}
//                 </p>

//                 {/* <div>
//                   {cart.some((item) => item.id === product.id) ? (
//                     <button
//                       className="btn btn-info"
//                       onClick={() => navigate("/cart")}
//                     >
//                       GO To Cart
//                     </button>
//                   ) : (
//                     <button
//                       className="btn btn-success"
//                       onClick={() => addToCart(product)}
//                     >
//                       Add To Cart
//                     </button>
//                   )}

//                   <button
//                     className="btn btn-info ms-5"
//                     // onClick={() => addToCart(product)}
//                   >
//                     Buy Now
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collections;


import React from "react";
import { allProducts } from "./RoutesData.jsx";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Collections = () => {
  const navigate = useNavigate();
  const { addToCart, cart, loading } = useCart();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ marginTop: "80px" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: '#333', letterSpacing: '1px' }}>
          Our Collections
        </h2>
        <p className="text-muted">Discover our latest products</p>
      </div>

      <div className="row g-4">
        {allProducts.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <div 
              className="card h-100 border-0 shadow-sm"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div 
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={Array.isArray(product.img) ? product.img[0] : product.img}
                  alt={product.name}
                  className="card-img-top"
                  style={{ 
                    height: "300px", 
                    objectFit: "cover",
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                {/* <div 
                  className="position-absolute top-0 end-0 m-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#667eea'
                  }}
                >
                  NEW
                </div> */}
              </div>

              <div className="card-body d-flex flex-column p-3">
                <h6 
                  className="card-title text-center mb-2 fw-semibold" 
                  style={{ 
                    fontSize: "16px",
                    color: '#333',
                    minHeight: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {product.name}
                </h6>

                {/* <p 
                  className="text-center text-muted mb-3" 
                  style={{ fontSize: "14px" }}
                >
                  ID: {product.id}
                </p> */}

                  <p 
                  className="text-center text-muted mb-3" 
                  style={{ fontSize: "14px" }}
                >
                 {product.desc}
                </p>

                {/* <div className="mt-auto">
                  {cart.some((item) => item.id === product.id) ? (
                    <button
                      className="btn w-100 text-white fw-semibold mb-2"
                      onClick={() => navigate("/cart")}
                      style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '';
                      }}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="btn w-100 text-white fw-semibold mb-2"
                      onClick={() => addToCart(product)}
                      style={{
                        background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(17, 153, 142, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '';
                      }}
                    >
                      Add to Cart
                    </button>
                  )}

                  <button
                    className="btn w-100 btn-outline-dark fw-semibold"
                    style={{
                      borderRadius: '10px',
                      padding: '10px',
                      transition: 'all 0.2s',
                      borderWidth: '2px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#333';
                      e.target.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '';
                      e.target.style.color = '';
                    }}
                  >
                    Buy Now
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
