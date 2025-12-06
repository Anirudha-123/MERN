import React from "react";
import data from "./RoutesData.jsx";
import { useNavigate, useParams } from "react-router-dom";

const Categories = () => {
  const { category, type } = useParams();

  const navigate = useNavigate();

  // category = 'mens'
  // type = 't-shirt' OR 'shirt' OR 'short'

  const products = data[0][category][0][type];

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="mb-5">
        {category.charAt(0).toUpperCase() + category.slice(1)} {type}
      </h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((item) => (
          // <div key={item.id} style={{ width: "300px" }}>
          //   <img
          //     src={Array.isArray(item.img) ? item.img[0] : item.img}
          //     style={{ width: "100%",height:"300px", borderRadius: "10px" }}
          //     onClick={() => navigate(`/product/${item.id}`)}
          //   />
          //   <p>ID: {item.id}</p>
          // </div>
          <div className="col-md-3">
            <div className="card h-100 rounded"style={{borderBottom:"none",borderInline:"none"}} >
              <img
                src={Array.isArray(item.img) ? item.img[0] : item.img}
                alt=""
                className="img-fluid rounded"
                onClick={() => navigate(`/product/${item.id}`)}
                style={{height:"400px",objectFit:"cover"}}
              />
              {/* <p >ID: {item.id}</p> */}
              <p > {item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
