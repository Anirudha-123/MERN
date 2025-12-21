import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();

  const [selectedSize, setSelectedSize] = useState("");

  const [bgImg, setBgImg] = useState(null);

  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://mern-8tqb.onrender.com/api/product/getProducts"
      );
      setProductData(response.data.products);
      console.log(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

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
          <h3 className="mt-5">Loading...</h3>
        </div>
      </div>
    );
  }

  const fetchData = productData.find((item) => item._id == id);

  if (!fetchData) {
    return <h2>Product not found !!</h2>;
  }

  const image = fetchData.images;

  // const images = Array.isArray(image) ? image : [fetchData.img1];

  const images =
    Array.isArray(fetchData.images) && fetchData.images.length > 0
      ? fetchData.images
      : [fetchData.img1];

  // console.log("fetchdata:", images[0]);

  if (bgImg === null && images[0]) {
    setBgImg(images[0]);
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert(`Please select a size`);
      return;
    }

    addToCart({ ...fetchData, size: selectedSize });
    navigate("/checkout");
  };

  const addToCartProduct = async (productId) => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      navigate("/login");
      return;
    }

    if (!selectedSize) {
      toast.error("plz select size");

      return;
    }

    try {
      const response = await axios.post(
        `https://mern-8tqb.onrender.com/api/carts/demo`,
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


        toast.success("Product added to cart");
    return true; 
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = (id) => {
    if (!selectedSize) {
      toast.error("plz select size");
      return;
    }

    addToCartProduct(id);

   
  };
  const handleBuy = (id) => {
    if (!selectedSize) {
      toast.error("plz select size");
      return;
    }

    addToCartProduct(id);

    toast.success("product added to checkout");

    navigate("/checkout");
  };

  // const hanleBuyNow =  async (productId) =>{

  //   if (!selectedSize) {

  //      toast.error("plz select size")
  //   }

  //   addToCartProduct(productId)
  //   navigate("/checkout")
  // }

  return (
    <div className="container mt-5">
      <div className="row " style={{ marginTop: "100px" }}>
        <div className="col-md-6">
          <div className="row g-2">
            <div className="col-md-6">
              {images.slice(0, 2).map((img, index) => (
                <img
                  src={img ? img : fetchData.img1}
                  key={index}
                  // alt={`product-${index}`}
                  className="mb-2 border"
                  onClick={() => setBgImg(img)}
                  onMouseOver={() => setBgImg(img)}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              ))}
            </div>

            <div className="col-md-6 h-100">
              <img
                src={bgImg}
                alt="bgImg"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

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

          <div className="d-flex align-items-center mt-4">
            <button
              className="add-to-bag px-4"
              onClick={() => {
                handleAddToCart(fetchData._id);
              }}
            >
              Add To Cart
            </button>
            {/* <button
              className="buyNow ms-3 px-4"
              onClick={() => handleBuy(fetchData._id)}
            >
              Buy Now
            </button> */}
          </div>

          <div
            className="mb-4 p-3 mt-4"
            style={{
              background: "linear-gradient(145deg, #f8f9fa, #e9ecef)",
              borderRadius: "12px",
              border: "1px solid #dee2e6",
            }}
          >
            <div className="d-flex align-items-start mb-2">
              <span style={{ color: "#11998e", marginRight: "8px" }}>✓</span>
              <small className="text-secondary">100% Original product</small>
            </div>
            <div className="d-flex align-items-start mb-2">
              <span style={{ color: "#11998e", marginRight: "8px" }}>✓</span>
              <small className="text-secondary">
                Cash on delivery available
              </small>
            </div>
            <div className="d-flex align-items-start mb-5">
              <span style={{ color: "#11998e", marginRight: "8px" }}>✓</span>
              <small className="text-secondary">
                Easy return and exchange within 7 days
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
