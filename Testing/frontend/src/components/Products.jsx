import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategories] = useState("");

  const navigate = useNavigate();

  async function getAllProducts(params) {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      console.log(response.data.products);

      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];

  const filterdData = products.filter((item) => {
    if (selectedCategory.length === 0) return true;

    return selectedCategory.includes(item.category);
  });

  return (
    <>
      <div className="container">
        <h5 className="mt-5 text-center">Products</h5>
          <h3 onClick={() => navigate("/")} className="text-end">Home</h3>
        <div className="row">
          <div className="col-md-3">
            <div
              className="card shadow-sm"
              style={{ height: "280px", padding: "3px" }}
            >
              <div className="card-header fw-bold mt-2">Categories</div>
              <ul
                className="list-group list-group-flush mt-2 "
                style={{ gap: "13px" }}
              >
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      checked={selectedCategory.includes(category)}
                      onChange={() => {
                        if (selectedCategory.includes(category)) {
                          setSelectedCategories(
                            selectedCategory.filter((cat) => cat !== category)
                          );
                        } else {
                          setSelectedCategories([
                            ...selectedCategory,
                            category,
                          ]);
                        }
                      }}
                    />

                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {filterdData.map((item, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <div className="card h-100 shadow-sm " onClick={() => navigate(`/product/${item.id}`)}>
                    <img src={item?.images[0]} alt=""  />

                    <div className="card-body">
                      <h4 style={{ fontFamily: "emoji" }}>{item.brand}</h4>
                      <p style={{ fontFamily: "math" }}>{item.title}</p>
                      <h6 className="fw-bold">₹ {item.price}</h6>
                      <hr />

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
