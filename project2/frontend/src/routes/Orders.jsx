import React, { useEffect, useState } from "react";
import axios from "axios";

import { confirmToast } from "./ConfirmToast.jsx";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import Profile from "../components/Profile.jsx";
import { FiShoppingBag } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const token = JSON.parse(localStorage.getItem("token"));

  const location = useLocation();

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

  const addAddress = async (e) => {
    e.preventDefault();

    try {
      let token = JSON.parse(localStorage.getItem("token"));

      const response = await axios.post(
        "http://localhost:3000/api/address",
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
    if (location.state?.open === "returns") {
      setActiveTab("orders"); // or "returns" if you have that tab
    }
  }, [location.state]);

  const handleDeleteOrder = async (orderId) => {
    const confirmed = await confirmToast(
      "Are you sure you want to delete this order?"
    );
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:3000/api/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrders((prev) => prev.filter((o) => o._id !== orderId));

      toast.success("Order remove successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete order");
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/order/allOrders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setOrders(response.data.orders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="page-loader">
          <h3 className="mt-5">Loading...</h3>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center ">
        <h4 style={{ marginTop: "130px" }}>No Orders Found</h4>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-5 pt-4">
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-md-3">
            <div
              className="border rounded shadow-sm p-3 bg-white "
              style={{ borderRadius: "12px" }}
            >
              <h6
                className="text-muted mb-1 ms-2"
                style={{ letterSpacing: "1px" }}
              >
                ACCOUNT
              </h6>

              <h5
                className="fw-semibold mb-3 ms-2"
                style={{ fontSize: "18px" }}
              >
                {orders[0]?.userId?.fullName}
              </h5>

              <ul className="list-unstyled mt-2 ">
                <li className="mb-1 ">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`d-block w-100 text-start py-2 px-2 border-0 bg-transparent rounded ${
                      activeTab === "overview"
                        ? "text-success fw-bold"
                        : "text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    Overview
                  </button>
                </li>

                <li className="mb-1">
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`d-block w-100 text-start py-2 px-2 border-0 bg-transparent rounded ${
                      activeTab === "orders"
                        ? "text-success fw-bold"
                        : "text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    Orders & Returns
                  </button>
                </li>

                <li className="mb-1">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`d-block w-100 text-start py-2 px-2 border-0 bg-transparent rounded ${
                      activeTab === "profile"
                        ? "text-success fw-bold"
                        : "text-dark"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    Profile
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-9">
            {activeTab === "overview" && (
              <>
                <div className="border ">
                  <h4 className="fw-bold mb-3 ms-3 mt-2">Overview</h4>

                  <div className="row mx-2">
                    <div className="col-md-4 mb-3">
                      <div
                        className="border rounded p-4 text-center bg-white shadow-sm"
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab("orders")}
                      >
                        <FiShoppingBag size={22} />

                        <h6 className="fw-bold mt-2">Orders</h6>
                        <p className="text-muted small">
                          Check your order status
                        </p>
                      </div>
                    </div>

                    {/* Wishlist Box */}
                    {/* <div className="col-md-4 mb-3">
                      <div className="border rounded p-4 text-center bg-white shadow-sm">
                        <FiHeart size={22} className="text-danger" />

                        <h6 className="fw-bold mt-2">Collections & Wishlist</h6>
                        <p className="text-muted small">
                          Your curated collections
                        </p>
                      </div>
                    </div> */}

                    <div className="col-md-4 mb-3 ">
                      <div
                        className="border rounded p-4 text-center bg-white shadow-sm"
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab("addresses")}
                      >
                        <FiMapPin size={22} className="text-primary" />{" "}
                        {/* Address icon */}
                        <h6 className="fw-bold mt-2">Addresses</h6>{" "}
                        {/* Updated text */}
                        <p className="text-muted small">
                          Your saved delivery addresses
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "orders" && (
              <>
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="border rounded shadow-sm p-3 mb-4 position-relative bg-white"
                  >
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-sm btn-danger position-absolute"
                      style={{
                        top: "12px",
                        right: "12px",
                        borderRadius: "50%",
                        width: "32px",
                        height: "32px",
                        fontWeight: "bold",
                        padding: "0",
                      }}
                    >
                      X
                    </button>

                    <div className="">
                      <span
                        className={`fw-bold ${
                          order.status === "Cancelled"
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                        {order.status}
                      </span>
                      <div>
                        <span className="text-muted small">
                          {new Date(order.createdAt).toDateString()}
                        </span>
                      </div>
                    </div>

                    <hr />

                    {order.cartItems?.map((item, index) => (
                      <div className="d-flex mb-3" key={index}>
                        <img
                          src={item.img1}
                          alt=""
                          width="80"
                          height="80"
                          className="rounded border me-3"
                          style={{ objectFit: "cover" }}
                        />

                        <div className="flex-grow-1">
                          <p className="fw-bold m-0">
                            {item.cartProduct?.brand}
                          </p>
                          <p className="text-muted m-0">
                            {item.cartProduct?.title}
                          </p>
                          <p className="small text-muted m-0">
                            Qty: {item.quantity}
                          </p>
                          <p className="fw-bold mt-1">₹{item.price}</p>
                        </div>

                        <div className="d-flex align-items-center">
                          <i className="bi bi-chevron-right fs-4 text-muted"></i>
                        </div>
                      </div>
                    ))}

                    <hr />

                    <h6 className="fw-bold">Delivery Address</h6>
                    <p className="m-0">
                      <strong>{order.addressId?.name}</strong>
                    </p>
                    <p className="text-muted m-0">
                      {order.addressId?.address}, {order.addressId?.city},{" "}
                      {order.addressId?.state} - {order.addressId?.pincode}
                    </p>
                    <p className="text-muted m-0">
                      Phone: {order.addressId?.phone}
                    </p>

                    <hr />

                    <div className="">
                      <h6 className="fw-bold">Price Details</h6>
                      <p className="m-0">Total Amount: ₹{order.totalAmount}</p>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === "addresses" && (
              <>
                {/* <form onSubmit={addAddress}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="userName"
                      value={form.userName}
                      onChange={handleChange}
                      className="form-control rounded-pill px-3 py-2"
                      placeholder="Enter your name here.."
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="form-control rounded-pill px-3 py-2"
                      placeholder="City"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className="form-control rounded-pill px-3 py-2"
                      placeholder="State"
                    />
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

                  <div className="mb-3">
                    <input
                      type="number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control rounded-pill px-3 py-2"
                      placeholder="Phone"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="form-control rounded-3 px-3 py-2"
                      placeholder="Full address"
                      rows="3"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill py-2"


                  >
                    Save Address
                  </button>
                </form> */}

                <div className="row d-flex justify-content-center border">
                  <div className="col-md-6">
                    <form onSubmit={addAddress} className="mt-5">
                      {/* Name */}
                      <div className="mb-3">
                        <input
                          type="text"
                          name="userName"
                          value={form.userName}
                          onChange={handleChange}
                          className="form-control rounded-pill px-3 py-2"
                          placeholder="Full Name"
                        />
                      </div>

                      {/* City & State on same row */}
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

                      {/* Mobile & Email on same row */}
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

                      {/* Pincode */}
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

                      {/* Full Address */}
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

                      {/* Save Button */}
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-4 rounded-pill py-2"
                      >
                        Save Address
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}

            {activeTab === "profile" && (
              <>
                <Profile></Profile>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
