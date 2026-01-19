// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaTruck, FaBoxOpen, FaFlag, FaTshirt } from "react-icons/fa";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Home = () => {
//   const itemsPerPage = 4;

//   const [startIndex, setStartIndex] = useState(0);

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < banner3.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   // const heroImages = ["/banner1.jpg", "/hero3.png", "/hero4.jpg"];

//   const heroImages = [
//     { type: "video", src: "/heroVideo.mp4" }, // first slide
//     // { type: "image", src: "/banner1.jpg" }, // first slide
//     { type: "image", src: "/hero4.png" },
//     { type: "image", src: "/banner5.jpg" },
//     // { type: "image", src: "/hero4.jpg" },
//   ];

//   const banner3 = [
//     { id: 106, image: "/img1.jpg", name: "Men’s Shirt" },
//     { id: 101, image: "/img2.jpg", name: "Women Crew Neck  Top" },
//     { id: 204, image: "/img3.jpg", name: "Kids Shirt" },
//     { id: 205, image: "/img4.jpg", name: "Men’s winter sweatshirt" },
//     { id: 206, image: "/img5.jpg", name: "Kids T-Shirt" },
//     { id: 107, image: "/img6.jpg", name: "Slim Fit Winter Top" },
//   ];

//   const mens = [
//     { id: 106, image: "/img4.jpg" },
//     { id: 101, image: "/img1.jpg" },
//     { id: 204, image: "/p_img8.png" },
//     // { id: 206, image: "/p_img41.png" },
//     { id: 107, image: "/p_img48.png" },
//     { id: 205, image: "/banner7.jpg" },
//   ];

//   const womens = [
//     { id: 106, image: "/img2.jpg" },
//     { id: 101, image: "/p_img13.png" },
//     { id: 204, image: "/p_img26.png" },
//     { id: 205, image: "/img6.jpg" },
//     { id: 206, image: "/p_img44.png" },
//     { id: 107, image: "/p_img51.png" },
//   ];

//   const navigate = useNavigate();

//   const section3 = [
//     { id: 106, image: "/tr1.jpg" },
//     { id: 101, image: "/tr2.png" },
//     { id: 204, image: "/tr4.png" },
//     { id: 205, image: "/p_img6.png" },
//     { id: 206, image: "/tr5.png" },
//     { id: 107, image: "/tr7.png" },
//     { id: 108, image: "/p_img9.png" },
//     { id: 104, image: "/tr8.png" },
//   ];

//   const section9 = [
//     {
//       image: "/p_img6.png",
//     },
//     {
//       image: "/p_img9.png",
//     },
//     {
//       image: "/p_img38.png",
//     },
//     {
//       image: "/p_img3.png",
//     },
//     {
//       image: "/p_img16.png",
//     },
//     {
//       image: "/p_img19.png",
//     },
//     {
//       image: "/p_img24.png",
//     },
//     {
//       image: "/p_img25.png",
//     },
//   ];

//   return (
//     <>
//       {/* <div className="heroSection">
//         <div className=" mb-5 ">
         

//           <div
//             id="carouselExampleDark"
//             className="carousel carousel-dark slide mb-3"
//             data-bs-ride="carousel"
//             data-bs-interval="3000"
//           >
//             <div className="carousel-indicators">
//               {heroImages.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   data-bs-target="#carouselExampleDark"
//                   data-bs-slide-to={index}
//                   className={index === 0 ? "active" : ""}
//                   aria-current={index === 0 ? "true" : undefined}
//                   aria-label={`Slide ${index + 1}`}
//                 ></button>
//               ))}
//             </div>

//             <div
//               className="carousel-inner"
//               style={{ maxHeight: "600px", objectFit: "contain" }}
//             >
//               {heroImages.map((img, index) => (
//                 <div
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                   key={index}
//                 >
//                   <img
//                     src={img}
//                     className="d-block w-100"
//                     alt="hotel"
//                      loading="lazy"
//                     style={{ height: "600px", objectFit: "cover" }}
//                   />
//                 </div>
//               ))}
//             </div>

//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide="prev"
//             >
//               <span
//                 className="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Previous</span>
//             </button>

//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide="next"
//             >
//               <span
//                 className="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div> */}

//       <div className="heroSection">
//         <div className="mb-5">
//           <div
//             id="carouselExampleDark"
//             className="carousel carousel-dark slide mb-3"
//             data-bs-ride="carousel"
//             data-bs-interval="3000"
//           >
//             {/* Indicators */}
//             <div className="carousel-indicators">
//               {heroImages.map((_, index) => (
//                 <button
//                   key={index}
//                   type="button"
//                   data-bs-target="#carouselExampleDark"
//                   data-bs-slide-to={index}
//                   className={index === 0 ? "active" : ""}
//                   aria-current={index === 0 ? "true" : undefined}
//                   aria-label={`Slide ${index + 1}`}
//                 ></button>
//               ))}
//             </div>

//             {/* Slides */}
//             <div className="carousel-inner" style={{ maxHeight: "1000px" }}>
//               {heroImages.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`carousel-item ${index === 0 ? "active" : ""}`}
//                 >
//                   {item.type === "video" ? (
//                     <video
//                       className="d-block w-100"
//                       src={item.src}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       style={{ height: "900px", objectFit: "cover" }}
//                     />
//                   ) : (
//                     <img
//                       src={item.src}
//                       className="d-block w-100"
//                       alt="hero"
//                       loading="lazy"
//                       style={{ height: "900px", objectFit: "cover" }}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Controls */}
//             <button
//               className="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide="prev"
//             >
//               <span className="carousel-control-prev-icon" />
//               <span className="visually-hidden ">Previous</span>
//             </button>

//             <button
//               className="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide="next"
//             >
//               <span className="carousel-control-next-icon" />
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="section2 ">
//         <div className="row mx-2 d-flex justify-content-center align-items-center">
          
//           <div className="col-md-3">
//             <div
//               className="card"
//               style={{ border: "none" }}
//               onClick={() => navigate("/category/men")}
//             >
//               <img src="/p_img48.png" alt="mens" />
//               <h5 className="text-center mt-3">MENS</h5>
//             </div>
//           </div>

//           <div className="col-md-3">
//             <div
//               className="card"
//               style={{ border: "none" }}
//               onClick={() => navigate("/category/women")}
//             >
//               <img src="/img2.jpg" alt="womens" />
//               <h5 className="text-center mt-3">WOMENS</h5>
//             </div>
//           </div>

//           <div className="col-md-3">
//             <div
//               className="card"
//               style={{ border: "none" }}
//               onClick={() => navigate("/category/kids")}
//             >
//               <img src="/p_img14.png" alt="kids" />
//               <h5 className="text-center mt-3">KIDS</h5>
//             </div>
//           </div>

//          <div className="col-md-3">
//             {" "}
//             <div className="card" style={{ border: "none" }}>
//               <img src="/p_img36.png" alt="winterwear" />
//               <h5 className="text-center mt-3">WINTERWEAR</h5>
//             </div>
//           </div>

        

        
//         </div>
//       </div>

//       <div className="banner2 w-100">
//         <img
//           src="/banner2.jpg"
//           alt=""
//           style={{ objectFit: "contain", marginTop: "20px", height: "391px" }}
//         />
//       </div>

//       <div className="banner3 ">
//         <img
//           src="/banner3.jpg"
//           alt=""
//           style={{ objectFit: "contain", height: "500px" }}
//         />
//       </div>

//       <div className="row mx-4 mt-5 ">
//         {banner3.map((item, index) => (
//           <div className="col-md-4 mb-3" key={index}>
//             <div className="card shadow-sm h-100" style={{ border: "none" }}>
//               <img
//                 src={item.image}
//                 alt="image"
//                 className="img-fluid"
//                 style={{ objectFit: "cover", height: "610px" }}
//               />

//               <h4
//                 style={{
//                   position: "absolute",
//                   bottom: "50px",
//                   left: "20px",
//                   padding: "12px 16px",
//                   fontFamily: "math",
//                   fontWeight: "600",
//                   fontSize: "22px",
//                   color: "#fff",

//                   letterSpacing: "0.5px",
//                   maxWidth: "80%",
//                 }}
//               >
//                 {item.name}
//               </h4>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="">
//         <img
//           src="/banner5.jpg"
//           alt=""
//           className="img-fluid"
//           style={{ objectFit: "contain", marginTop: "40px" }}
//         />
//       </div>

//       {/* <hr style={{ marginInline: "30px", marginTop: "40px" }} /> */}

//       <div className="d-flex align-items-center justify-content-center my-4 mt-4">
//         <div
//           className="flex-grow-1 border-top border-1 border-success mx-3"
//           style={{ maxWidth: "500px", opacity: "0.4" }}
//         ></div>
//         <h2
//           className="text-success fw-bold mb-0 "
//           style={{ fontFamily: "serif" }}
//         >
//           Trending Now
//         </h2>
//         <div
//           className="flex-grow-1 border-top border-1 border-success mx-3"
//           style={{ maxWidth: "500px", opacity: "0.4" }}
//         ></div>
//       </div>

//       {/* <h4 className="ms-4 mb-4 fs-3" style={{ fontFamily: "serif" }}>
//         Trending Now
//       </h4> */}
//       <div className="section3 mt-4 mx-"></div>

//       <div className="section3">
//         <div className="row mx-3">
//           {section3.map((item, index) => (
//             <div
//               className="col-md-3"
//               // style={{ borderTopRightRadius: "10%" }}
//               key={index}
//             >
//               <div
//                 className="card mb-4 mt-3"
//                 // style={{ borderTopRightRadius: "20%" }}
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   loading="lazy"
//                   className=""
//                   style={{
//                     width: "100%",
//                     height: "400px",
//                     objectFit: "cover",
//                     // borderTopRightRadius: "15%",
//                   }}
//                   onClick={() => navigate(`/product/${item.id}`)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="position-relative">
//         <img
//           src="/banner7.jpg"
//           alt=""
//           style={{ objectFit: "cover", marginTop: "30px" }}
//         />

//         <div
//           className="position-absolute text-white"
//           style={{
//             bottom: "180px",
//             left: "60px",
//             maxWidth: "420px",
//             color: "rgba(255,255,255,0.9)", // dark white
//           }}
//         >
//           <p className="fs-3 fw-semibold mb-2">
//             Summer Essentials | <br />
//             Crew Neck T-Shirt
//           </p>

//           <p className="fs-5 mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>
//             Long lasting heavy-weight cotton jersey <br />
//             fabric with smooth feel
//           </p>

//           <p className="fs-4 fw-bold">₹ 990.00</p>
//         </div>
//       </div>

//       <div className="shop-men">
//         <h2>Shop Men</h2>
//         <p>Uncover the latest in men's fashion</p>
//       </div>

//       <div className=" position-relative me-3">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           style={{
//             position: "absolute",
//             left: "20px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             background: "#fff",
//             border: "1px solid #ddd",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             zIndex: 10,
//           }}
//         >
//           <FaChevronLeft />
//         </button>

//         {/* Cards Row */}
//         <div className="row  mt-4 ms-1">
//           {mens
//             .slice(startIndex, startIndex + itemsPerPage)
//             .map((item, index) => (
//               <div className="col-md-3 " key={index}>
//                 <div
//                   className="card shadow-sm h-100"
//                   style={{ border: "none" }}
//                 >
//                   <img
//                     src={item.image}
//                     alt="image"
//                     className="img-fluid"
//                     style={{ objectFit: "cover", height: "450px" }}
//                   />
//                 </div>
//               </div>
//             ))}
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= banner3.length}
//           style={{
//             position: "absolute",
//             right: "20px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             background: "#fff",
//             border: "1px solid #ddd",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             zIndex: 10,
//           }}
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* <div className="">
//         <img
//           src="/women.jpg"
//           alt=""
//           className="img-fluid"
//           style={{ objectFit: "contain", marginTop: "50px" }}
//         />
//       </div> */}
//       <div className="position-relative mt-5">
//         <img
//           src="/women.jpg"
//           alt="Women Collection"
//           className="img-fluid w-100"
//           style={{ objectFit: "cover", maxHeight: "740px" }}
//         />

//         <div
//           className="position-absolute"
//           style={{
//             top: "50%",
//             left: "80px",
//             transform: "translateY(-50%)",
//             maxWidth: "420px",
//             color: "#111",
//           }}
//         >
//           <span
//             className="d-inline-block mb-2 px-2 py-1"
//             style={{
//               fontSize: "12px",
//               backgroundColor: "#e6d8c3",
//               color: "#333",
//               borderRadius: "4px",
//             }}
//           >
//             NEW ARRIVAL
//           </span>

//           <h2 className="fs-3 fw-semibold mb-2">
//             Jeans Collection | <br />
//             Bootcut Jeans
//           </h2>

//           <p
//             className=" mb-3"
//             style={{ color: "rgba(12, 12, 12, 0.8)", fontSize: "20px" }}
//           >
//             Soft 100% cotton denim <br />
//             with an authentic texture
//           </p>

//           <p className="fw-bold" style={{ fontSize: "24px" }}>
//             ₹ 2990.00
//           </p>
//         </div>
//       </div>

//       <div className="shop-men">
//         <h2>Shop Women</h2>
//         <p>Uncover the latest in women's fashion</p>
//       </div>

//       <div className=" position-relative me-3">
//         {/* Left Arrow */}
//         <button
//           onClick={handlePrev}
//           disabled={startIndex === 0}
//           style={{
//             position: "absolute",
//             left: "20px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             background: "#fff",
//             border: "1px solid #ddd",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             zIndex: 10,
//           }}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="row  mt-4 ms-1">
//           {womens
//             .slice(startIndex, startIndex + itemsPerPage)
//             .map((item, index) => (
//               <div className="col-md-3 " key={index}>
//                 <div
//                   className="card shadow-sm h-100"
//                   style={{ border: "none" }}
//                 >
//                   <img
//                     src={item.image}
//                     alt="image"
//                     className="img-fluid"
//                     style={{ objectFit: "cover", height: "450px" }}
//                   />
//                 </div>
//               </div>
//             ))}
//         </div>

//         <button
//           onClick={handleNext}
//           disabled={startIndex + itemsPerPage >= banner3.length}
//           style={{
//             position: "absolute",
//             right: "20px",
//             top: "50%",
//             transform: "translateY(-50%)",
//             background: "#fff",
//             border: "1px solid #ddd",
//             borderRadius: "50%",
//             width: "40px",
//             height: "40px",
//             zIndex: 10,
//           }}
//         >
//           <FaChevronRight />
//         </button>
//       </div>

//       {/* <hr style={{ marginInline: "30px", marginTop: "40px" }} />
//       <h4 className="ms-4  fs-3" style={{ fontFamily: "serif" }}>
//         New Arrivals
//       </h4> */}

//       <div className="d-flex align-items-center justify-content-center my-4 mt-5">
//         <div
//           className="flex-grow-1 border-top border-1 border-success mx-3"
//           style={{ maxWidth: "500px", opacity: "0.4" }}
//         ></div>
//         <h2
//           className="text-success fw-bold mb-0 "
//           style={{ fontFamily: "serif" }}
//         >
//           NEW ARRIVALS
//         </h2>
//         <div
//           className="flex-grow-1 border-top border-1 border-success mx-3"
//           style={{ maxWidth: "500px", opacity: "0.4" }}
//         ></div>
//       </div>

//       <div className="section7">
//         <div className="row mx-3">
//           {section3.map((item, index) => (
//             <div className="col-md-3" key={index}>
//               <div className="card mb-1 mt-3">
//                 <img
//                   src={item.image}
//                   alt=""
//                   loading="lazy"
//                   className=""
//                   style={{ width: "100%", height: "400px", objectFit: "cover" }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div className="section7">
//         <div className="" style={{ border: "none" }}>
//           <img
//             src="/banner8.jpg"
//             alt=""
//             className="img-fluid mt-4"
//             style={{
//               objectFit: "contain",

             
//               border: "none",
//             }}
//           />
//         </div>
//       </div> */}

//       <div className="section7 position-relative mt-4">
//         <img
//           src="/banner8.jpg"
//           alt="Kids Heattech"
//           className="img-fluid w-100"
//           style={{
//             objectFit: "cover",
//             maxHeight: "760px",
//           }}
//         />

//         {/* Text Overlay */}
//         <div
//           className="position-absolute text-start"
//           style={{
//             top: "50%",
//             left: "70px",
//             transform: "translateY(-50%)",
//             maxWidth: "420px",
//             color: "#111",
//           }}
//         >
//           <span
//             className="d-inline-block mb-2 px-2 py-1"
//             style={{
//               fontSize: "12px",
//               backgroundColor: "#f0f0f0",
//               color: "#333",
//               borderRadius: "4px",
//             }}
//           >
//             HEATTECH
//           </span>

//           <h2 className="mb-2" style={{ fontSize: "30px", fontWeight: "500" }}>
//             HEATTECH Collection <br />
//             HEATTECH Scoop Neck T-Shirt
//           </h2>

//           <p className="mb-3" style={{ fontSize: "15px", color: "#444" }}>
//             Thin yet warm with heat retention <br />
//             and heat absorption technology
//           </p>

//           <p
//             className="mb-1 fw-bold"
//             style={{ fontSize: "26px", color: "#d32f2f" }}
//           >
//             ₹ 1390.00
//             <span
//               className="ms-2 text-muted text-decoration-line-through"
//               style={{ fontSize: "14px" }}
//             >
//               ₹ 1490.00
//             </span>
//           </p>

//           <small className="text-danger">Reduced GST Price</small>
//         </div>
//       </div>

//       {/* <hr style={{ marginInline: "30px", marginTop: "60px" }} />
//       <h4 className="ms-4  fs-3" style={{ fontFamily: "serif" }}>
//         KIDSWEAR
//       </h4> */}

//       <div className="d-flex align-items-center justify-content-center my-4 mt-5">
//         <div
//           className="flex-grow-1 border-top border-1 border-success mx-3"
//           style={{ maxWidth: "500px", opacity: "0.4" }}
//         ></div>
//         <h2
//           className="text-success fw-bold mb-0 "
//           style={{ fontFamily: "serif" }}
//         >
//           KIDSWEAR
//         </h2>
//         <div
//           className="flex-grow-1 border-top border-1 border-success mx-3"
//           style={{ maxWidth: "500px", opacity: "0.4" }}
//         ></div>
//       </div>

//       <div className="section8">
//         <div className="row mx-3 mt-3">
//           {section9.map((item, index) => (
//             <div className="col-md-3" key={index}>
//               <div
//                 className="card mb-4 mt-3"
//                 style={{
//                   borderTopLeftRadius: "10%",
//                   borderTopRightRadius: "10%",
//                 }}
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   loading="lazy"
//                   className=""
//                   style={{
//                     width: "100%",
//                     height: "400px",
//                     objectFit: "cover",
//                     borderTopLeftRadius: "10%",
//                     borderTopRightRadius: "10%",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div className="section9">
//         <div className="container my-5">
//           {" "}
//           <div className="p-5 text-center bg-body-tertiary rounded-3">
//             {" "}
//             <a href="" className="">
//               <img
//                 src="/logo3.png"
//                 alt=""
//                 style={{ height: "50px", objectFit: "cover" }}
//               />
//             </a>
//             <h1 className="text-body-emphasis mb-3">
//               Elevate Your Style with Puma
//             </h1>
//             <p className="col-lg-8 mx-auto fs-5 text-muted">
//               Discover performance-driven sportswear, stylish everyday
//               essentials, and the latest streetwear drops. Designed for comfort,
//               built for athletes, and loved by trendsetters around the world.
//               Step into the season with premium quality and iconic Puma designs.
//             </p>
//             <div className="d-inline-flex gap-2 mb-5">
//               {" "}
//               <button
//                 className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
//                 type="button"
//               >
//                 Call to action
//                 <svg
//                   className="bi ms-2"
//                   width="24"
//                   height="24"
//                   aria-hidden="true"
//                 >
//                   <use xlinkHref="#arrow-right-short"></use>
//                 </svg>{" "}
//               </button>{" "}
//               <button
//                 className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
//                 type="button"
//               >
//                 Secondary link
//               </button>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>
//       </div> */}

//       <div className="container my-5">
//         <div className="row text-center">
//           {/* Shipping */}
//           <div className="col-md-3 col-6 mb-4">
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "50%",
//                 border: "1px solid #ddd",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 12px",
//               }}
//             >
//               <FaTruck size={28} />
//             </div>

//             <h6 style={{ fontWeight: "600", fontSize: "14px" }}>
//               SHIPPING WITHIN 48 HOURS
//             </h6>

//             <p style={{ fontSize: "13px", color: "#666", marginBottom: 0 }}>
//               Your order will be shipped within 48 hours
//             </p>
//           </div>

//           {/* Free Delivery */}
//           <div className="col-md-3 col-6 mb-4">
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "50%",
//                 border: "1px solid #ddd",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 12px",
//               }}
//             >
//               <FaBoxOpen size={28} />
//             </div>

//             <h6 style={{ fontWeight: "600", fontSize: "14px" }}>
//               FREE DELIVERY
//             </h6>

//             <p style={{ fontSize: "13px", color: "#666" }}>On prepaid orders</p>
//           </div>

//           {/* Made in India */}
//           <div className="col-md-3 col-6 mb-4">
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "50%",
//                 border: "1px solid #ddd",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 12px",
//               }}
//             >
//               <FaFlag size={28} />
//             </div>

//             <h6 style={{ fontWeight: "600", fontSize: "14px" }}>
//               MADE IN INDIA
//             </h6>

//             <p style={{ fontSize: "13px", color: "#666" }}>
//               100% Indian production
//             </p>
//           </div>

//           {/* Fashion */}
//           <div className="col-md-3 col-6 mb-4">
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "50%",
//                 border: "1px solid #ddd",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 margin: "0 auto 12px",
//               }}
//             >
//               <FaTshirt size={28} />
//             </div>

//             <h6 style={{ fontWeight: "600", fontSize: "14px" }}>
//               LUXURY FASHION
//             </h6>

//             <p style={{ fontSize: "13px", color: "#666" }}>
//               High-quality & affordable
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;



//new 


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const heroImages = [
    { type: "image", src: "/banner1.jpg" },
    { type: "image", src: "/banner2.jpg" },
    { type: "image", src: "/banner3.jpg" },
  ];

  const categories = [
    { title: "Men", img: "/men.jpg", link: "/collections/men/t-shirt" },
    { title: "Women", img: "/women.jpg", link: "/collections/women/t-shirt" },
    { title: "Kids", img: "/kids.jpg", link: "/collections/kids/t-shirt" },
    { title: "Accessories", img: "/accessories.jpg", link: "/products" },
  ];

  const trending = [
    { img: "/p1.jpg" },
    { img: "/p2.jpg" },
    { img: "/p3.jpg" },
    { img: "/p4.jpg" },
  ];

  return (
    <div className="container-fluid p-0">

      {/* ================= HERO SECTION ================= */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {heroImages.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.src}
                className="w-100"
                style={{ height: "70vh", objectFit: "cover" }}
                alt="banner"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>

        <button
          className="carousel-control-next"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ================= CATEGORIES ================= */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Shop By Category</h2>

        <div className="row text-center">
          {categories.map((cat, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <Link to={cat.link} className="text-decoration-none text-dark">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={cat.img}
                    className="card-img-top"
                    style={{ height: "260px", objectFit: "cover" }}
                    alt={cat.title}
                  />
                  <div className="card-body">
                    <h6 className="fw-semibold">{cat.title}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ================= TRENDING PRODUCTS ================= */}
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold">Trending Products</h3>
          <Link to="/products" className="btn btn-outline-dark btn-sm">
            View All
          </Link>
        </div>

        <div className="row">
          {trending.map((item, index) => (
            <div className="col-6 col-md-3 mb-4" key={index}>
              <div className="card border-0 shadow-sm">
                <img
                  src={item.img}
                  className="card-img-top"
                  style={{ height: "320px", objectFit: "cover" }}
                  alt="product"
                />
                <div className="card-body text-center">
                  <h6 className="mb-1">Stylish Wear</h6>
                  <p className="text-muted mb-2">₹999</p>
                  <button className="btn btn-dark btn-sm w-100">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= OFFER BANNER ================= */}
      <div className="container-fluid my-5 px-0">
        <div
          className="d-flex align-items-center justify-content-center text-center"
          style={{
            backgroundImage: "url('/offer.jpg')",
            height: "45vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-dark bg-opacity-50 p-4 rounded">
            <h2 className="text-white fw-bold">Flat 50% Off</h2>
            <p className="text-white d-none d-md-block">
              Limited time offer on all collections
            </p>
            <Link to="/products" className="btn btn-light mt-2">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-6 col-md-3 mb-3">
            <h5>🚚 Free Shipping</h5>
            <p className="text-muted small">On orders above ₹999</p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5>💳 Secure Payment</h5>
            <p className="text-muted small">100% secure checkout</p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5>🔄 Easy Returns</h5>
            <p className="text-muted small">7 days return policy</p>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <h5>📞 Support</h5>
            <p className="text-muted small">24/7 customer support</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;

