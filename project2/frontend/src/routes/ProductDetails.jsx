import React, { useState } from "react";
import { allProducts } from "./RoutesData.jsx";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  // const [data, setData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");

  const { cart, addToCart } = useCart();

  const fetchData = allProducts.find((item) => item.id == id);
  // const fetchData = data.find((item) => item._id == id);

  // console.log(fetchData._id);
  console.log(fetchData);

  if (!fetchData) {
    return <h2>Product not found !!</h2>;
  }

  const images = Array.isArray(fetchData.img) ? fetchData.img : [fetchData.img];

  const [bgImg, setBgImg] = useState(images[0]);

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert(`Please select a size`);
      return;
    }

    addToCart({ ...fetchData, size: selectedSize });
    navigate("/checkout");
  };

  // useEffect(() => {
  //   async function fetch() {
  //     const res = await axios.get(
  //       "http://localhost:3000/api/product/getProducts"
  //     );

  //     console.log(res);
  //     setData(res.data.products);
  //   }

  //   fetch();
  // }, []);

  return (
    <div className="container mt-5">
      <div className="row " style={{ marginTop: "100px" }}>
        <div className="col-md-6">
          <div className="row g-2">
            <div className="col-md-6">
              {images.slice(0, 3).map((img, index) => (
                <img
                  src={img}
                  key={index}
                  alt={`product-${index}`}
                  className="mb-2"
                  onClick={() => setBgImg(img)}
                  onMouseOver={() => setBgImg(img)}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
            {/* <div className="col-md-6">
              <img
                src={fetchData.img1}
                key={index}
                alt={`product-${index}`}
                className="mb-2"
                onClick={() => setBgImg(fetchData.img1)}
                onMouseOver={() => setBgImg(fetchData.img1)}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
             
            </div> */}
            <div className="col-md-6">
              {/* {images[0] && (
                <img
                  src={images[0]}
                  alt="product"
                  style={{
                    width: "100%",
                    height: "410px",
                    objectFit: "cover",
                  }}
                />
                
              )} */}

              <img
                src={bgImg}
                alt="bgImg"
                style={{
                  width: "100%",
                  height: "410px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* <div className="col-md-6 ">
          <h2>{fetchData.name || `Product ${fetchData.id}`}</h2>
          <p className="mt-4">{fetchData.detail}</p>
          {fetchData.price && (
            <p>
              <strong>Price:</strong> {fetchData.price}
            </p>
          )}
          

          <div className="text-end mt-5" style={{ float: "left" }}>
           
            <div>
              {cart.some((item) => item.id === fetchData.id) ? (
                <button className="btn-cart" onClick={() => navigate("/cart")}>
                  GO To Cart
                </button>
              ) : (
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(fetchData)}
                >
                  Add To Cart
                </button>
              )}

              <button
                className="btn btn-info ms-5"
               
              >
                Buy Now
              </button>
            </div>

            
          </div>
        </div> */}

        <div className="col-md-6">
          <h2 className="fw-bold">
            {fetchData.name || `Product ${fetchData.id}`}
          </h2>

          <div className="d-flex align-items-center mt-2">
            <div style={{ color: "#ff9800", fontSize: "18px" }}>★★★★★</div>
            <span className="ms-2 text-muted">(110)</span>
          </div>

          {fetchData.price && (
            <p className="mt-3 fs-5">
              <strong>Price:</strong> ₹{fetchData.price}
            </p>
          )}

          <p className="mt-4 text-secondary">
            Upgrade your wardrobe with this premium cotton shirt designed for
            unmatched comfort and everyday versatility. Crafted using soft,
            breathable fabric, it offers a modern fit that works effortlessly
            for office wear, casual outings
          </p>

          <div className="mt-4">
            <h6 className="fw-bold mb-2">Select Size</h6>

            <div className="d-flex gap-2 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className="btn btn-outline-secondary size-btn"
                  // onClick={() => setSelectedSize(size)}
                  onClick={() =>
                    setSelectedSize((prev) => (prev === size ? "" : size))
                  }
                  style={{
                    minWidth: "55px",
                    backgroundColor: selectedSize === size ? "green" : "white",
                    color: selectedSize === size ? "white" : "black",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* <p>
            100% Original product. <br /> Cash on delivery is available on this
            product. <br /> Easy return and exchange policy within 7 days.
          </p> */}

          <div className="mt-5 d-flex align-items-center">
            {cart.some((item) => item.id === fetchData.id) ? (
              <button
                className="add-to-bag1 px-4"
                onClick={() => navigate("/cart")}
              >
                Go To Cart
              </button>
            ) : (
              <button
                className="add-to-bag px-4"
                onClick={() => {
                  if (!selectedSize) {
                    alert("Please select a size!");
                    return;
                  }
                  addToCart({ ...fetchData, size: selectedSize });
                }}
              >
                Add To Cart
              </button>
            )}

            <button
              className=" buyNow ms-3 px-4"
              // onClick={() => {
              //   if (cart.length === 0) {
              //     alert("");
              //   }
              //   navigate("/checkout");
              // }}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// import React, { useState } from "react";
// import { allProducts } from "./RoutesData.jsx";
// import { useParams } from "react-router-dom";
// import { useCart } from "../context/CartContext.jsx";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../context/AuthContext.jsx";

// const ProductDetails = () => {

//   // const {user} = useUser()
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [selectedSize, setSelectedSize] = useState("");

//   const { cart, addToCart } = useCart();

//   const fetchData = allProducts.find((item) => item.id == id);

//   console.log(fetchData.id);
//   console.log(fetchData);

//   if (!fetchData) {
//     return (
//       <div className="d-flex justify-content-center align-items-center min-vh-100">
//         <h2 className="text-danger">Product not found!</h2>
//       </div>
//     );
//   }

//   const images = Array.isArray(fetchData.img) ? fetchData.img : [fetchData.img];

//   const [bgImg, setBgImg] = useState(images[0]);

//   const handleBuyNow = () => {
//     if (!selectedSize) {
//       alert(`Please select a size`);
//       return;
//     }

//     addToCart({ ...fetchData, size: selectedSize });

//     navigate("/checkout");
//   };

//   return (
//     <div className="container py-5" style={{ marginTop: "80px" }}>
//       <div className="row g-4">
//         {/* Image Section */}
//         <div className="col-md-6">
//           <div className="row g-3">
//             {/* Thumbnail Images */}
//             <div className="col-3">
//               <div className="d-flex flex-column gap-2">
//                 {images.slice(0, 3).map((img, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       border: bgImg === img ? '3px solid #667eea' : '2px solid #e0e0e0',
//                       borderRadius: '12px',
//                       overflow: 'hidden',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => {
//                       if (bgImg !== img) {
//                         e.currentTarget.style.borderColor = '#667eea';
//                       }
//                     }}
//                     onMouseLeave={(e) => {
//                       if (bgImg !== img) {
//                         e.currentTarget.style.borderColor = '#e0e0e0';
//                       }
//                     }}
//                   >
//                     <img
//                       src={img}
//                       alt={`thumbnail-${index}`}
//                       onClick={() => setBgImg(img)}
//                       onMouseOver={() => setBgImg(img)}
//                       style={{
//                         width: "100%",
//                         height: "120px",
//                         objectFit: "cover",
//                         display: 'block'
//                       }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Main Image */}
//             <div className="col-9">
//               <div
//                 style={{
//                   border: '2px solid #e0e0e0',
//                   borderRadius: '16px',
//                   overflow: 'hidden',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//                 }}
//               >
//                 <img
//                   src={bgImg}
//                   alt="main-product"
//                   style={{
//                     width: "100%",
//                     height: "500px",
//                     objectFit: "cover",
//                     display: 'block'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Details Section */}
//         <div className="col-md-6">
//           <h2 className="fw-bold mb-3" style={{ color: '#333', fontSize: '28px' }}>
//             {fetchData.name || `Product ${fetchData.id}`}
//           </h2>

//           {/* Rating */}
//           <div className="d-flex align-items-center mb-3">
//             <div style={{ color: "#ffa500", fontSize: "20px", letterSpacing: '2px' }}>
//               ★★★★★
//             </div>
//             <span className="ms-2 text-muted fw-semibold">(110 reviews)</span>
//           </div>

//           {/* Price */}
//           {fetchData.price && (
//             <div className="mb-4">
//               <span
//                 className="fs-3 fw-bold"
//                 style={{
//                   color: '#667eea',
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent'
//                 }}
//               >
//                 ₹{fetchData.price}
//               </span>
//               <span className="text-muted text-decoration-line-through ms-3 fs-5">
//                 ₹{Math.round(fetchData.price * 1.4)}
//               </span>
//               <span
//                 className="ms-3 badge"
//                 style={{
//                   background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
//                   fontSize: '14px',
//                   padding: '6px 12px'
//                 }}
//               >
//                 30% OFF
//               </span>
//             </div>
//           )}

//           {/* Description */}
//           <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '15px' }}>
//             Upgrade your wardrobe with this premium cotton shirt designed for
//             unmatched comfort and everyday versatility. Crafted using soft,
//             breathable fabric, it offers a modern fit that works effortlessly
//             for office wear, casual outings, or relaxed weekends.
//           </p>

//           {/* Size Selection */}
//           <div className="mb-4">
//             <h6 className="fw-bold mb-3" style={{ fontSize: '16px', color: '#333' }}>
//               Select Size
//             </h6>

//             <div className="d-flex gap-2 flex-wrap">
//               {["S", "M", "L", "XL", "XXL"].map((size) => (
//                 <button
//                   key={size}
//                   className="btn"
//                   onClick={() =>
//                     setSelectedSize((prev) => (prev === size ? "" : size))
//                   }
//                   style={{
//                     minWidth: "60px",
//                     height: '45px',
//                     backgroundColor: selectedSize === size ? "#667eea" : "white",
//                     color: selectedSize === size ? "white" : "#333",
//                     border: selectedSize === size ? "2px solid #667eea" : "2px solid #ddd",
//                     borderRadius: '10px',
//                     fontWeight: '600',
//                     fontSize: '15px',
//                     transition: 'all 0.2s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     if (selectedSize !== size) {
//                       e.target.style.borderColor = '#667eea';
//                       e.target.style.transform = 'scale(1.05)';
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (selectedSize !== size) {
//                       e.target.style.borderColor = '#ddd';
//                       e.target.style.transform = 'scale(1)';
//                     }
//                   }}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Features */}
//           <div
//             className="mb-4 p-3"
//             style={{
//               background: 'linear-gradient(145deg, #f8f9fa, #e9ecef)',
//               borderRadius: '12px',
//               border: '1px solid #dee2e6'
//             }}
//           >
//             <div className="d-flex align-items-start mb-2">
//               <span style={{ color: '#11998e', marginRight: '8px' }}>✓</span>
//               <small className="text-secondary">100% Original product</small>
//             </div>
//             <div className="d-flex align-items-start mb-2">
//               <span style={{ color: '#11998e', marginRight: '8px' }}>✓</span>
//               <small className="text-secondary">Cash on delivery available</small>
//             </div>
//             <div className="d-flex align-items-start">
//               <span style={{ color: '#11998e', marginRight: '8px' }}>✓</span>
//               <small className="text-secondary">Easy return and exchange within 7 days</small>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="d-flex gap-3 flex-wrap">
//             {cart.some((item) => item.id === fetchData.id) ? (
//               <button
//                 className="btn btn-lg text-white fw-semibold flex-fill"
//                 onClick={() => navigate("/cart")}
//                 style={{
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   border: 'none',
//                   borderRadius: '12px',
//                   padding: '14px 32px',
//                   transition: 'all 0.3s ease',
//                   minWidth: '200px'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'translateY(-2px)';
//                   e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '';
//                 }}
//               >
//                 Go To Cart
//               </button>
//             ) : (
//               <button
//                 className="btn btn-lg text-white fw-semibold flex-fill"
//                 onClick={() => {
//                   if (!selectedSize) {
//                     alert("Please select a size!");
//                     return;
//                   }
//                   addToCart({ ...fetchData, size: selectedSize });
//                 }}
//                 style={{
//                   background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
//                   border: 'none',
//                   borderRadius: '12px',
//                   padding: '14px 32px',
//                   transition: 'all 0.3s ease',
//                   minWidth: '200px'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = 'translateY(-2px)';
//                   e.target.style.boxShadow = '0 8px 20px rgba(17, 153, 142, 0.4)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = 'translateY(0)';
//                   e.target.style.boxShadow = '';
//                 }}
//               >
//                 Add To Cart
//               </button>
//             )}

//             <button
//               className="btn btn-lg btn-dark fw-semibold flex-fill"
//               onClick={handleBuyNow}
//               style={{
//                 borderRadius: '12px',
//                 padding: '14px 32px',
//                 transition: 'all 0.3s ease',
//                 minWidth: '200px',
//                 background: '#333'
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
//                 e.target.style.background = '#000';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '';
//                 e.target.style.background = '#333';
//               }}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
