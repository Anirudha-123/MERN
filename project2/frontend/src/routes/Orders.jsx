import React from "react";
import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "100px" }}>
          <h3>orders</h3>
          {cart.map((item) => (
            <div className="border mb-3 p-3 d-flex align-items-center">
              <div className="d-flex  w-100 justify-content-between">
                <img
                  src={item.img[0]}
                  alt={item.name}
                  style={{
                    width: "300px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="rounded"
                />
                <div className="mt-5">
                  <p className="fw-bold mb-1">{item.name}</p>
                  <p className="text-secondary mb-1">₹{item.price}</p>
                  <p className="text-secondary mb-0">Qty: {item.qty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
