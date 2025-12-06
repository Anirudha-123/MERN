import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";


const AddNewProduct = () => {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    img1: "",
    img2: "",
    img3: "",
    category: "",
    subCategory: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rawToken = localStorage.getItem("token");
    const token = rawToken ? JSON.parse(rawToken) : null;

    if (!token) {
      toast.error("Token not found! Please login again.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/product/addProduct", form, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      toast.success("Product added successfully");

      setForm({
        name: "",
        desc: "",
        price: "",
        img1: "",
        img2: "",
        img3: "",
        category: "",
        subCategory: "",
      });
    } catch (error) {
      console.error("Product Add Error:", error);
      toast.error("Failed to add product");
    }
  };

  return (
    <>
      {/* <div className=" d-flex justify-content-center align-items-center mb-5">
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="" style={{ width: "500px" }}>
            <form
              onSubmit={handleSubmit}
              className="rounded border shadow-lg p-3"
            >
              <h3 className="text-center mb-3">Add Product</h3>

              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter name here"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="desc"
                  value={form.desc}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter description here"
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter price here"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="img1"
                  value={form.img1}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Upload image1"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="img2"
                  value={form.img2}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Upload image2"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="img3"
                  value={form.img3}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Upload image3"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter category"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subCategory"
                  value={form.subCategory}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter subCategory"
                />
              </div>

              <button className="btn btn-success" type="submit">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div 
  className="d-flex justify-content-center align-items-center py-5 min-vh-100"
  style={{
    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6" style={{marginTop:"80px"}}>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded shadow-lg p-4 p-md-5"
          style={{
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3 className="text-center mb-4 fw-bold" style={{ color: '#667eea' }}>
            Add New Product
          </h3>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control form-control-lg border-2"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Description</label>
            <textarea
              name="desc"
              value={form.desc}
              onChange={handleChange}
              className="form-control border-2"
              placeholder="Enter product description"
              rows="3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Price</label>
            <div className="input-group input-group-lg">
              <span className="input-group-text bg-light">₹</span>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                className="form-control border-2"
                placeholder="0.00"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Product Images</label>
            <input
              type="text"
              name="img1"
              value={form.img1}
              onChange={handleChange}
              className="form-control border-2 mb-2"
              placeholder="Image URL 1 "
            />
            <input
              type="text"
              name="img2"
              value={form.img2}
              onChange={handleChange}
              className="form-control border-2 mb-2"
              placeholder="Image URL 2"
            />
            <input
              type="text"
              name="img3"
              value={form.img3}
              onChange={handleChange}
              className="form-control border-2"
              placeholder="Image URL 3"
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary">Category</label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-control border-2"
                placeholder="e.g., mens,kids,womens"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold text-secondary">Sub Category</label>
              <input
                type="text"
                name="subCategory"
                value={form.subCategory}
                onChange={handleChange}
                className="form-control border-2"
                placeholder="e.g., shirt,t-shirt,short"
              />
            </div>
          </div>

          <button 
            className="btn btn-lg w-100 mt-3 py-3 fw-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
            }}
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

      
    </>
  );
};

export default AddNewProduct;
