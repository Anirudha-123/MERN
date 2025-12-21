import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

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
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }

  if (!products || products.length === 0) {
    return <h3>product not found</h3>;
  }

  const data = products.filter(
    (item) => item.availabilityStatus === "Low Stock"
  );

  console.log("newData", data);

  const availabilityCheck = [ ...new Set(products.map((item) => item.availabilityStatus))]

  console.log("data : ", availabilityCheck);
  return (
    <>
      <div className="container">
        <button
          onClick={() => navigate("/products")}
          className=" "
          style={{ position: "absolute", top: "120px", right: "130px" }}
        >
          Products
        </button>
        <div className="row ">
          <h5 className="mt-5 text-center mb-5">Home</h5>

          {products.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                className="card shadowm-sm h-100"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.images[0]}
                  alt="images"
                  className="img-fluid"
                  style={{ height: "390px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5>{item.title}</h5>
                  <p>{item.price}</p>
                  <p
  className={
    item.availabilityStatus === "In Stock"
      ? "text-success"
      : "text-danger"
  }
>
  {item.availabilityStatus}
</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
