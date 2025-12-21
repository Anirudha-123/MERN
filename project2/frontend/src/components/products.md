import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Products = () => {
  console.log("Products component loaded");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
   const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSub, setSelectedSub] = useState("");

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
        `http://localhost:3000/api/carts/demo`,
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
          "http://localhost:3000/api/product/getProducts",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setData(response.data.products);
        console.log(response.data.products);
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


  const filteredProducts = data.filter(p => {
    const catMatch = selectedCategory ? p.category === selectedCategory : true;
    const subMatch = selectedSub ? p.subCategory === selectedSub : true;
    return catMatch && subMatch;
  });

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
        <div className="row d-flex" style={{ marginTop: "120px" }}>
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
{/* 
          <div className="col-md-3">
            <div className="card shadow-sm p-2 mb-2">

              <h3>Category</h3>

              <ul className="">
                
                <li>
                  <input type="radio"  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
             {data.map((item, index) => (
            <div className="col-md-2 mb-5" key={index}>
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
                    padding: "15px",
                  }}
                >
                  <h5
                    className="fw-semibold text-start ms-5"
                    style={{
                      color: "#333",
                      fontFamily: "math",
                      fontSize: "20px",
                    }}
                  >
                    {item.name}
                  </h5>

                  <div className="d-flex justify-content-between">
                    <div className="div">
                      <p
                        className="mt-2  me-2 ms-5"
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#0c0c0dff",
                        }}
                      >
                        ₹ {item.price}
                      </p>
                    </div>

                    <div className="button">
                      <button
                        className="btn me-5 btn-sm mt-2"
                        style={{
                          background: "#c07c52ff",
                          color: "white",

                          // padding: "10px 20px",
                          borderRadius: "10px",
                          fontWeight: "500",
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
              </div>
            </div>
          ))}
          </div> */}


           <div style={{ display: "flex", marginTop: "50px" }}>
      
      {/* SIDEBAR FILTER */}
      <div style={{ width: "250px", padding: "20px", borderRight: "1px solid #ddd" }}>
        <h3>Category</h3>

        <label>
          <input 
            type="radio" 
            name="category" 
            onChange={() => setSelectedCategory("men")} 
          />
          Men
        </label><br />

        <label>
          <input 
            type="radio" 
            name="category" 
            onChange={() => setSelectedCategory("women")} 
          />
          Women
        </label><br />

        <label>
          <input 
            type="radio" 
            name="category" 
            onChange={() => setSelectedCategory("kids")} 
          />
          Kids
        </label><br />

        <label>
          <input 
            type="radio" 
            name="category" 
            onChange={() => setSelectedCategory("")} 
          />
          All
        </label><br />

        <hr />

        <h3>Sub Category</h3>
        <label>
          <input 
            type="radio" 
            name="subcategory" 
            onChange={() => setSelectedSub("shirt")} 
          />
          Shirt
        </label><br />

        <label>
          <input 
            type="radio" 
            name="subcategory" 
            onChange={() => setSelectedSub("t-shirt")} 
          />
          Tshirt
        </label><br />

        <label>
          <input 
            type="radio" 
            name="subcategory" 
            onChange={() => setSelectedSub("short")} 
          />
          Short
        </label><br />

        <label>
          <input 
            type="radio" 
            name="subcategory" 
            onChange={() => setSelectedSub("")} 
          />
          All
        </label><br />
      </div>

      {/* PRODUCT LIST */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h2>Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              style={{ 
                width: "200px", 
                padding: "10px", 
                border: "1px solid #ccc", 
                borderRadius: "8px" 
              }}
            >
               <img src={product?.img1} alt="productImg"  className="img-fluid" style={{height:"300px",objectFit:"cover"}}/>
              <h4>{product.name}</h4>
              <p>{product.category} → {product.subcategory}</p>
            </div>
          ))}

        </div>
      </div>

    </div>



         
        </div>
      </div>
    </>
  );
};

export default Products;





.product-image-container-with-overlay {
  position: relative; /* Essential for positioning the overlay */
  height: 380px; /* Match image height or define your desired container height */
  /* Other styles for the container */
}

.product-image-container-with-overlay::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Black background with very low opacity (e.g., 3-5%) creates a light gray tint */
  background-color: rgba(0, 0, 0, 0.03); 
  /* You can adjust the last number (0.03) for the strength of the gray tint */
  pointer-events: none; /* Allows clicks to pass through to the image */
}