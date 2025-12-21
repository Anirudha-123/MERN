import React from "react";
// import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useEffect } from "react";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userName, setUserName] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [cartId, setCartId] = useState("");
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [totalPriceAmount, setTotalAmount] = useState("");

  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  // let totalPrice = cart.reduce(
  //   (acc, val) => acc + Number(val.cartProduct.price) * Number(val.quantity),
  //   0
  // );

  let totalPrice = cart.reduce((acc, val) => {
    // Check if cartProduct exists
    if (val.cartProduct && val.cartProduct.price) {
      return acc + Number(val.cartProduct.price) * Number(val.quantity);
    } else {
      return acc; // skip if cartProduct is null
    }
  }, 0);
  let discount = totalPrice * 0.1;
  let totalAmount = totalPrice - discount;

  useEffect(() => {
    setTotalAmount(totalAmount.toFixed(0));
  }, [cart]);

  console.log("total amount :", totalPriceAmount);

  const handlePayment = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
    console.log("selected : ", value);
  };

  const [form, setForm] = useState({
    phone: "",
    city: "",
    state: "",
    address: "",
    pinCode: "",
    userName: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function getUserCart(params) {
    try {
      const response = await axios.get(
        "https://mern-backend-oe29.onrender.com/api/carts/demo",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log(response);
      setCart(response.data.cart.items);
      setCartId(response.data.cart._id); // <-- ADD THIS
    } catch (error) {
      console.error(error);
    }
  }

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

      console.log("res address", res.data.user.addresses);
      console.log("res userName", res.data.user.fullName);
      setUserName(res.data.user.fullName);

      setAddresses(res.data.user.addresses);
    } catch (error) {
      console.log(error);
    }
  };

  const addAddress = async (e) => {
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
      setShowAdd(false);

      setForm({
        phone: "",
        city: "",
        pinCode: "",
        state: "",
        address: "",
        userName: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("failed to saved address");
    }
  };

  useEffect(() => {
    getUserCart();
    fetchAddress();
  }, []);

  const handleorder = async () => {
    console.log("addresses", addresses);
    if (!paymentMethod) return toast.error("Please select payment method");

    console.log(selectedAddressId);
    if (!selectedAddressId) return toast.error("Please select an address");
    if (!cartId) return toast.error("Cart not found");

    console.log("Sending addressId:", selectedAddressId); // should be a valid ObjectId

    try {
      const response = await axios.post(
        "https://mern-backend-oe29.onrender.com/api/order",
        {
          addressId: selectedAddressId,
          cartId: cartId,
          totalAmount: totalPriceAmount,
          paymentMethod: "COD",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // toast.success("Order placed successfully!");
      console.log("order", response);
      navigate("/orderSuccess");
    } catch (error) {
      console.error("Order error:", error);
      alert("Failed to place order");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row  " style={{ marginTop: "100px" }}>
          {/* <div className="col-md-6">
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

              <form onSubmit={handleorder}>
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
                  onClick={addAddress}
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
          </div> */}

          <div className="col-md-6 ">
            <div className=" rounded-4 p-4 mb-4 border">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  {" "}
                  <h4 className=" mb-1" style={{ fontFamily: "emoji" }}>
                    Shipping Address
                  </h4>
                </span>

                <span>
                  <button
                    className="add-to-bag px-4"
                    onClick={() => setShowAdd((prev) => !prev)}
                  >
                    {" "}
                    + Add New Address
                  </button>
                </span>
              </div>

              {showAdd && (
                // <form onSubmit={addAddress}>
                //   <div className="mb-3">
                //     <input
                //       type="text"
                //       name="userName"
                //       value={form.userName}
                //       onChange={handleChange}
                //       className="form-control rounded-pill px-3 py-2"
                //       placeholder="Enter your name here.."
                //     />
                //   </div>
                //   <div className="mb-3">
                //     <input
                //       type="text"
                //       name="city"
                //       value={form.city}
                //       onChange={handleChange}
                //       className="form-control rounded-pill px-3 py-2"
                //       placeholder="City"
                //     />
                //   </div>

                //   <div className="mb-3">
                //     <input
                //       type="text"
                //       name="state"
                //       value={form.state}
                //       onChange={handleChange}
                //       className="form-control rounded-pill px-3 py-2"
                //       placeholder="State"
                //     />
                //   </div>

                //   <div className="mb-3">
                //     <input
                //       type="number"
                //       name="pinCode"
                //       value={form.pinCode}
                //       onChange={handleChange}
                //       className="form-control rounded-pill px-3 py-2"
                //       placeholder="Pincode"
                //     />
                //   </div>

                //   <div className="mb-3">
                //     <input
                //       type="number"
                //       name="phone"
                //       value={form.phone}
                //       onChange={handleChange}
                //       className="form-control rounded-pill px-3 py-2"
                //       placeholder="Phone"
                //     />
                //   </div>

                //   <div className="mb-4">
                //     <textarea
                //       name="address"
                //       value={form.address}
                //       onChange={handleChange}
                //       className="form-control rounded-3 px-3 py-2"
                //       placeholder="Full address"
                //       rows="3"
                //     ></textarea>
                //   </div>

                //   <button
                //     type="submit"
                //     className="btn btn-primary w-100 rounded-pill py-2"
                //   >
                //     Save Address
                //   </button>
                // </form>
                <form onSubmit={addAddress}>
                  <div className="mb-3 mt-3">
                    <input
                      type="text"
                      name="userName"
                      value={form.userName}
                      onChange={handleChange}
                      className="form-control rounded-pill px-3 py-2"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="row mb-3 g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="form-control rounded-pill px-3 py-2"
                        placeholder="City"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        className="form-control rounded-pill px-3 py-2"
                        placeholder="State"
                      />
                    </div>
                  </div>

                  <div className="row mb-3 g-3">
                    <div className="col-md-6">
                      <input
                        type="number"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="form-control rounded-pill px-3 py-2"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="form-control rounded-pill px-3 py-2"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="number"
                      name="pinCode"
                      value={form.pinCode}
                      onChange={handleChange}
                      className="form-control rounded-pill px-3 py-2"
                      placeholder="Pincode"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="form-control rounded-3 px-3 py-2"
                      placeholder="Full Address"
                      rows="3"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill py-2"
                  >
                    Save Address
                  </button>
                </form>
              )}
            </div>

            {addresses.length === 0 ? (
              <p className="text-muted">No address found.</p>
            ) : (
              addresses.map((addr) => (
                <div
                  key={addr._id}
                  className="border rounded-3 p-3 mb-3 shadow-sm text-secondary payment"
                >
                  <div>
                    <h5 className="ms-3 m-3" style={{ color: "black" }}>
                      {addr?.userName || userName}
                    </h5>
                  </div>
                  <input
                    type="radio"
                    name="selectedAddressId"
                    value={addr._id}
                    checked={selectedAddressId === addr._id}
                    onChange={() => setSelectedAddressId(addr._id)}
                    className="form-check-input me-2"
                  />
                  {addr.address}, <br />
                  <span className="ms-4 mt-1 mb-3">
                    {" "}
                    {addr.city}, {addr.state} ,{addr.pinCode}
                  </span>{" "}
                  <br />
                  <div className="ms-4 mt-4">
                    {" "}
                    Mobile:{" "}
                    <b style={{ fontSize: "14px", color: "#444444" }}>
                      {" "}
                      {addr.phone}
                    </b>
                  </div>
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
            <h2
              className="mb-4 text-center mb-2"
              style={{ fontFamily: "emoji" }}
            >
              Payment
            </h2>

            <div className="mb-4"></div>

            <div
              className="border rounded p-3 shadow-sm"
              style={{ backgroundColor: "white" }}
            >
              {/* <h5 className="text-center mb-3">Price Summary</h5> */}

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
              <div className="d-flex gap-3 mt-2">
                {/* Google Pay */}
                <div
                  className={`p-3  rounded d-flex align-items-center gap-2 flex-fill ${
                    paymentMethod === "gpay" ? "border-primary bg-light" : ""
                  }`}
                  onClick={() => setPaymentMethod("gpay")}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="gpay"
                    checked={paymentMethod === "gpay"}
                    onChange={() => setPaymentMethod("gpay")}
                  />
                  <img
                    src="/gpay2.png" // replace with your Google Pay icon path
                    alt="Google Pay"
                    style={{
                      width: "130px",
                      height: "35px",
                      objectFit: "cover",
                    }}
                  />
                  {/* <span>Google Pay</span> */}
                </div>

                {/* Paytm */}
                <div
                  className={`p-3  rounded d-flex align-items-center gap-2 flex-fill ${
                    paymentMethod === "paytm" ? "border-primary bg-light" : ""
                  }`}
                  onClick={() => setPaymentMethod("paytm")}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="paytm"
                    checked={paymentMethod === "paytm"}
                    onChange={() => setPaymentMethod("paytm")}
                  />
                  <img
                    src="/payTm.png" // replace with your Paytm icon path
                    alt="Paytm"
                    style={{ width: "100px", height: "35px" }}
                  />
                  {/* <span>Paytm</span> */}
                </div>

                {/* Cash on Delivery */}
                <div
                  className={`p-3  rounded d-flex align-items-center gap-2 flex-fill ${
                    paymentMethod === "cod" ? "border-primary bg-light" : ""
                  }`}
                  onClick={() => setPaymentMethod("cod")}
                  style={{ cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <img
                    src="/cod.jpg" // replace with your COD icon path
                    alt="Cash On Delivery"
                    style={{
                      width: "100px",
                      height: "30px",
                      objectFit: "cover",
                    }}
                  />
                  {/* <span>Cash On Delivery</span> */}
                </div>
              </div>
            </div>

            <button
              className="myntra-place-order-btn  w-100 mt-4"
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
