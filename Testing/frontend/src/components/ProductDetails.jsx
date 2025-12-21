import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const ProductDetails = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const { id } = useParams();
  console.log(id);
  async function getAllProducts(params) {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      console.log(response.data.products);

      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!products || products.length == 0) {
    return <h4>Loading...</h4>;
  }
  const fetchDetails = products.find((item) => item.id == id);

  if (!fetchDetails) {
    return <h4>Product not found </h4>;
  }


  
  return (
    <>
      <div className="conatiner">
        <button
          onClick={() => navigate("/")}
          className=" "
          style={{ position: "absolute", top: "30px", right: "130px" }}
        >
          Home
        </button>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-md-6">
            <div className=" border  shadow-sm">
              {" "}
              <img
                src={fetchDetails?.images[0]}
                alt="image"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className=" shadow-sm">
              {" "}
              <h3 className="mb-3">{fetchDetails?.title}</h3>
              <p style={{ fontSize: "20px", marginTop: "50px" }}>
                {fetchDetails?.description}
              </p>
            </div>

            <div className="d-flex mt-5 ">
              <button
                className="btn btn-secondary mt-2 "
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Add To Cart
              </button>
              <button className="btn btn-outline-danger mt-2  ms-4 ">
                Buy Now
              </button>
            </div>
            <p className="mt-5">
              <span>
                {" "}
                <b> Rating : </b>
                {fetchDetails.rating}
              </span>
            </p>
            {fetchDetails.reviews
              ? `${fetchDetails.reviews[0].reviewerName}: ${fetchDetails.reviews[0].comment} (Rating: ${fetchDetails.reviews[0].rating})`
              : "Review not found"}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
