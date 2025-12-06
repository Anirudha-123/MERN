import React from "react";
import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const { cart, update } = useCart();

  const navigate = useNavigate();

  const totalMRP = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );

  const discount = totalMRP * 0.1;

  const total = totalMRP - discount;

  const [form, setForm] = useState([]);

  const handleChange = () => {};

  const handleSubmit = () => {};

  const handlePayment = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
    console.log("selected : ", value);
  };

  const handleorder = () => {
    if (!paymentMethod) {
      alert("Please select payment method ");

      return;
    }
    console.log("Order placed with payment:", paymentMethod);

    navigate("/orders");
  };
  return (
    <>
      <div className="container">
        <div className="row  " style={{ marginTop: "100px" }}>
          <div
            className="col-md-6 border border-2 shadow-sm rounded"
            style={{ width: "600px", marginRight: "50px", maxHeight: "400px" }}
          >
            <h2 className="text-center mb-4">Address</h2>
            <form onSubmit={handleSubmit} className="form ">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name here..."
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email here..."
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Phone number here..."
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter pin code  here..."
                  value={form.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter address here..."
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary  mb-3">Submit</button>
            </form>
          </div>
          {/* <div className="col-md-6   border border-2 rounded-3">
            <div className="ddd">
              <h2 className="mb-4 text-center">Payment</h2>


              <div>
                {cart.map((item) => (
                  <div>
                    <p className="ms-3">
                      <b>Product Name: </b>
                      {item.name}
                    </p>
                    <p className="ms-3">
                      <b>Product Size: </b>
                      {item.size}
                    </p>

                    <div className="d-flex align-items-center ">
                      <span className="ms-3 mb-3">
                        <b>Qty: </b>
                      </span>
                      <select
                        value={item.qty}
                        className="form-select w-auto ms-4"
                        onChange={(e) => update(item, e.target.value)}
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option value={qty} key={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              <div className=" rounded ">
                <div className="p-3">
                  <div className="d-flex  flex-column align-items-end">
                  <p>TotalMRP : {totalMRP.toFixed(2)}</p>
                  <p>Discount : {discount.toFixed(2)}</p>

                  <hr className="" style={{width:"250px"}} />
                  <p>
                    <b>Total :</b> {total.toFixed(2)}
                  </p>
                  </div>
                </div>

              
                <div className="payMethod ms-3 d-flex align-items-center gap-2 ">
                  <h5 className="m-0">Select payment method :</h5>
                  <select
                    name="payment"
                    id="payment"
                    value={paymentMethod}
                    onChange={handlePayment}
                  >
                    <option value="gpay">Google Pay</option>
                    <option value="paytm">Paytm</option>
                    <option value="cod">Cash On Delivery</option>
                  </select>
                </div>

                <div className="mt-3 mx-3">
                  <button
                    className="btn btn-success w-100 mb-3"
                    onClick={handleorder}
                    style={{ marginTop: "80px" }}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-md-6 border border-2 rounded-3 p-3">
            <h2 className="mb-4 text-center">Payment</h2>

            {/* CART ITEM DETAILS */}
            <div className="mb-4">
              {cart.map((item, index) => (
                <div
                  className="border rounded p-2 mb-3 shadow-sm"
                  key={index}
                  style={{ background: "#fafafa" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="mb-1">
                        <b>Product Name:</b> {item.name}
                      </p>
                      <p className="mb-1">
                        <b>Size:</b> {item.size}
                      </p>

                      <div className="d-flex align-items-center mt-2">
                        <b>Qty:</b>
                        <select
                          value={item.qty}
                          className="form-select w-auto ms-3"
                          onChange={(e) => update(item, e.target.value)}
                        >
                          {[1, 2, 3, 4, 5].map((qty) => (
                            <option value={qty} key={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="img">
                      <img
                        src={item.img[0]}
                        alt=""
                        style={{
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "00px",
                        }}
                      />
                    </div>
                  </div>

                  {/* <div className="d-flex align-items-center mt-2">
                    <b>Qty:</b>
                    <select
                      value={item.qty}
                      className="form-select w-auto ms-3"
                      onChange={(e) => update(item, e.target.value)}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option value={qty} key={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>
                  </div> */}
                </div>
              ))}
            </div>

            <div className="border rounded p-3 shadow-sm">
              <h5 className="text-center mb-3">Price Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Total MRP:</span>
                <span>₹{totalMRP.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Discount (10%):</span>
                <span>- ₹{discount.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-4">
              <h5>Select Payment Method</h5>
              <select
                name="payment"
                className="form-select w-50 mt-2"
                value={paymentMethod}
                onChange={handlePayment}
              >
                <option value="">Choose...</option>
                <option value="gpay">Google Pay</option>
                <option value="paytm">Paytm</option>
                <option value="cod">Cash On Delivery</option>
              </select>
            </div>

            <button
              className="btn btn-success w-100 mt-4"
              onClick={handleorder}
              style={{ height: "50px", fontSize: "18px" }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
