import React from "react";
// import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useEffect } from "react";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  let totalPrice = data.reduce(
    (acc, val) => acc + Number(val.cartProduct.price) * Number(val.quantity),
    0
  );

  let discount = totalPrice * 0.1;

  let totalAmount = totalPrice - discount;

  async function getUserCart(params) {
    try {
      const response = await axios.get("https://mern-backend-oe29.onrender.com/api/carts/demo", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response);
      setData(response.data.cart.items);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   getUserCart();
  // }, []);

  const [form, setForm] = useState({
    phone: "",
    city: "",
    state: "",
    address: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.prevenDefault();

  //   try {
  //     toast.success("Order successful! Thank you for shopping with us 🌟");

  //     navigate("/orders");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

    const { phone, city, state, address, pinCode } = form;
    if (!phone || !city || !state || !address || !pinCode) {
      toast.error("Please fill in your address before placing the order");
      return;
    }
    console.log("Order placed with payment:", paymentMethod);

    navigate("/orders");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let token = JSON.parse(localStorage.getItem("token"));

      const response = await axios.post(
        "https://mern-backend-oe29.onrender.com/api/address",
        form,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (!form.phone) {
        toast.error("All fields are required");
      }

      console.log(form);

      toast.success("address saved successfully");
      fetchAddress();

      setForm({ phone: "", city: "", pinCode: "", state: "", address: "" });
    } catch (error) {
      console.error(error);
      toast.error("failed to saved address");
    }
  };

  const [addresses, setAddresses] = useState([]);
  const fetchAddress = async () => {
    try {
      const res = await axios.get(
        "https://mern-backend-oe29.onrender.com/api/user/userprofile",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log("res address", res);

      setAddresses(res.data.userProfile[0].userProfile);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserCart();
    fetchAddress();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row  " style={{ marginTop: "100px" }}>
          <div className="col-md-6">
            <div
              className="mx-auto shadow-lg rounded-4 p-4 mb-4"
              style={{
                maxWidth: "600px",
                backgroundColor: "#ffffff",
                border: "1px solid #e0e0e0",
              }}
            >
              <h2
                className="text-center mb-4"
                style={{ fontWeight: "600", fontSize: "1.8rem", color: "#333" }}
              >
                Shipping Address
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-pill px-3 py-2 shadow-sm"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter city name here..."
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-pill px-3 py-2 shadow-sm"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="Enter state name here..."
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control rounded-pill px-3 py-2 shadow-sm"
                    name="pinCode"
                    value={form.pinCode}
                    onChange={handleChange}
                    placeholder="Enter pincode here..."
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control rounded-pill px-3 py-2 shadow-sm"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number here..."
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control rounded-3 px-3 py-2 shadow-sm"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter full address here..."
                    rows="3"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill py-2"
                  style={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  Save Address
                </button>
              </form>
            </div>

            <h4 className="mb-3 mt-5 ms-3">Saved Addresses</h4>

            {addresses.length === 0 ? (
              <p className="text-muted  ms-3">No saved address found.</p>
            ) : (
              addresses.map((addr, index) => (
                <div
                  key={index}
                  className="border rounded-3 p-3 mb-3 shadow-sm mx-2"
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <p className="mb-1">
                    <strong>City:</strong> {addr.city}
                  </p>
                  <p className="mb-1">
                    <strong>State:</strong> {addr.state}
                  </p>
                  <p className="mb-1">
                    <strong>Pincode:</strong> {addr.pinCode}
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> {addr.phone}
                  </p>
                  <p className="mb-1">
                    <strong>Address:</strong> {addr.address}
                  </p>
                </div>
              ))
            )}
          </div>

          <div
            className="col-md-6 border border-2 rounded-3 p-3 h-100 payment"
            style={{
              overflowY: "auto",
            }}
          >
            <h2 className="mb-4 text-center">Payment</h2>

            <div className="mb-4">
              {data.map((item, index) => (
                <div
                  className="border rounded p-2 mb-3 shadow-sm"
                  key={index}
                  style={{ background: "#fafafa" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="mb-1">{item.cartProduct.name}</p>
                      {/* <p className="mb-1">
                        <b>Size:</b> {item.size}
                      </p> */}

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
                    <div className="img">
                      <img
                        src={item.cartProduct.img1}
                        alt=""
                        style={{
                          height: "100px",
                          objectFit: "cover",
                          marginTop: "00px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded p-3 shadow-sm" style={{backgroundColor:"white"}} >
              <h5 className="text-center mb-3">Price Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Total MRP:</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Discount (10%):</span>
                <span>- ₹{discount.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold fs-5">
                <span>Total:</span>
                <span>₹{totalAmount.toFixed(0)}</span>
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
