import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchAllProducts = async (params) => {
    // const token = JSON.parse(localStorage.getItem("token"))

    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getProducts"
      );

      setProductData(response.data.products);
    } catch (error) {
      toast.error("failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      await fetchAllProducts();

      const savedCategories = JSON.parse(
        localStorage.getItem("selectedCategory")
      );
      if (savedCategories) setSelectedCategory(savedCategories);

      const savedSubCategories = JSON.parse(
        localStorage.getItem("selectedSubCategory")
      );
      if (savedSubCategories) setSelectedSubCategory(savedSubCategories);
    };

    loadData();
  }, []);

  const filterdData = productData.filter((item) => {
    // const catMatch = selectedCategory
    //   ? item.category === selectedCategory
    //   : true;
    // const subMatch = selectedSubCategory
    //   ? item.subCategory === selectedSubCategory
    //   : true;

    const catMatch =
      selectedCategory.length > 0
        ? selectedCategory.includes(item.category)
        : true;

    const subMatch =
      selectedSubCategory.length > 0
        ? selectedSubCategory.includes(item.subCategory)
        : true;

    return catMatch && subMatch;
  });

  //   const handleCategoryChange = (value) => {
  //   setSelectedCategory((prev) =>
  //     prev.includes(value)
  //       ? prev.filter((cat) => cat !== value)
  //       : [...prev, value]

  //   );

  // };

  // const handleSubCategoryChange = (value) => {
  //   setSelectedSubCategory((prev) =>
  //     prev.includes(value)
  //       ? prev.filter((cat) => cat !== value)
  //       : [...prev, value]
  //   );
  // };

  const handleAllSubCategory = () => {
    setSelectedSubCategory([]);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory((prev) => {
      const newSelected = prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value];

      localStorage.setItem("selectedCategory", JSON.stringify(newSelected));
      return newSelected;
    });
  };

  const handleSubCategoryChange = (value) => {
    setSelectedSubCategory((prev) => {
      const newSelected = prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value];

      localStorage.setItem("selectedSubCategory", JSON.stringify(newSelected));
      return newSelected;
    });
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh", // full viewport height
          display: "flex",
          alignItems: "center", // vertical center
          justifyContent: "center", // horizontal center
        }}
      >
        <div className="page-loader">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="conatiner">
        <div className="d-flex mx-3" style={{ marginTop: "120px" }}>
          <div
            className="col-md-2 "
            style={{
              position: "sticky",
              top: "120px",

              left: "20px",
              width: "220px",
              overflowY: "auto",
              maxHeight: "calc(100vh - 320px)",

              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h4 className="mb-3">Category</h4>

            <label className="d-block mb-2">
              <input
                type="checkbox"
                className="me-2"
                checked={selectedCategory.includes("men")}
                onChange={() => handleCategoryChange("men")}
              />
              Men
            </label>

            <label className="d-block mb-2">
              <input
                type="checkbox"
                className="me-2"
                name="category"
                checked={selectedCategory.includes("women")}
                onChange={() => handleCategoryChange("women")}
              />
              Women
            </label>

            <label className="d-block mb-3">
              <input
                type="checkbox"
                className="me-2"
                checked={selectedCategory.includes("kids")}
                onChange={() => handleCategoryChange("kids")}
              />
              Kids
            </label>

            <hr />

            <h4 className="mb-3">Subcategory</h4>

            <label className="d-block mb-2">
              <input
                type="checkbox"
                className="me-2"
                checked={selectedSubCategory.includes("shirt")}
                onChange={() => handleSubCategoryChange("shirt")}
              />
              Shirt
            </label>

            <label className="d-block mb-2">
              <input
                type="checkbox"
                className="me-2"
                checked={selectedSubCategory.includes("t-shirt")}
                onChange={() => handleSubCategoryChange("t-shirt")}
              />
              T-shirt
            </label>

            <label className="d-block mb-2">
              <input
                type="checkbox"
                className="me-2"
                checked={selectedSubCategory.includes("short")}
                onChange={() => handleSubCategoryChange("short")}
              />
              Short
            </label>
          </div>

          <div className="flex-grow-1 ms-4 ">
            <div className="row">
              {filterdData?.map((item, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <div
                    className="card h-100 shadow-sm  border rounded"
                    onClick={() => navigate(`/product/${item._id}`)}
                  >
                    {/* <div className="text-center">
                       <img
                      src={item?.img1}
                      alt="itemImg"
                      className="img-fluid"
                      style={{ height: "380px", objectFit: "cover" }}
                    />
                    </div> */}

                    <div
                      className="text-center product-image-container-with-overlay 
                      "
                    >
                      <img
                        src={item?.img1}
                        alt="itemImg"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: item?.useBg ? "cover" : "contain",
                        }}
                      />
                    </div>

                    <div className="card-body">
                      <h5 style={{ fontFamily: "math" }}>{item.name}</h5>

                      <p style={{ fontSize: "17px", margin: 0 }}>
                        <span style={{ fontWeight: "600", color: "#111" }}>
                          ₹{item.price}
                        </span>

                        {item.originalPrice && (
                          <>
                            <span
                              style={{
                                textDecoration: "line-through",
                                color: "#9e9e9e",
                                marginLeft: "8px",
                                fontSize: "15px",
                              }}
                            >
                              ₹{item.originalPrice}
                            </span>

                            <span
                              style={{
                                color: "#0fa958",
                                fontWeight: "600",
                                marginLeft: "8px",
                                fontSize: "15px",
                              }}
                            >
                              {Math.round(
                                ((item.originalPrice - item.price) /
                                  item.originalPrice) *
                                  100
                              )}
                              % OFF
                            </span>
                          </>
                        )}
                      </p>
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
