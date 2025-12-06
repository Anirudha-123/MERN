import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./RoutesData.jsx"; // adjust path

const CategoryProductsHome = () => {
  const { category } = useParams(); // mens, womens, kids

  const categories = data[0]; // your entire data structure

  const allProducts = [];

  // LOOP through category → shirt, t-shirt, etc
  categories[category].forEach((subCatObj) => {
    Object.keys(subCatObj).forEach((type) => {
      subCatObj[type].forEach((item) => {
        allProducts.push(item);
      });
    });
  });

  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2
        className="text-center text-success mb-4 "
        style={{ marginTop: "100px" }}
      >
        {category.toUpperCase()} COLLECTION
      </h2>

      <div className="row">
        {allProducts.map((p) => (
          <div className="col-md-3 mb-4" key={p.id}>
            <div className="card shadow">
              <img
                src={Array.isArray(p.img) ? p.img[0] : p.img}
                className="card-img-top"
                style={{ height: "350px", objectFit: "cover" }}
                alt={p.name}
                onClick={() => navigate(`/product/${p.id}`)}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p>₹{p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductsHome;
