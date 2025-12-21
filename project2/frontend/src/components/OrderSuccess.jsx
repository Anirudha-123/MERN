import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {


  
  const [order, setOrder] = useState({});

  const [loading,setLoading] = useState(true)

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("token"));

  const getorder = async (params) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/order/latest",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      console.log("order :", response);
      console.log("order data :", response.data.orders);

      setOrder(response.data.orders);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getorder();
  }, []);


  
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
          <h3 className="mt-5">Loading...</h3>
        </div>
      </div>
    );
  }


  // console.log("order address 1 :", response.data.orders.addressId);

  const addr = order?.addressId;
  // const cart = order?.cartId;

  if (!addr) return <div>Loading...</div>;

  

  return (
    <>
      {/* <div className="container d-flex justify-content-center align-items-center">
        <div className="col-md-6" style={{ marginTop: "130px" }}>
          <div className="border shadow-lg p-3">
            <h5 className="text-center" style={{ fontFamily: "math" }}>
              Order Successfull
            </h5>

            <p className="fw-bold" style={{ fontFamily: "math" }}>
              {addr?.userName || order?.userId?.fullName}
            </p>

           

            <div className="d-flex gap-2">
              <p>{addr?.address}</p>
              <p>{addr?.city}</p>
              <p>{addr?.state}</p>
              <p>{addr?.pinCode}</p>
            </div>

           
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
<button
    className="btn btn-success btn-lg px-4"
    style={{
      width: "200px",
      borderRadius: "50px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease"
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    Order Details
  </button>

  <button
    className="btn btn-secondary btn-lg px-4"
    style={{
      width: "200px",
      borderRadius: "50px",
      fontWeight: "500",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease"
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    View Orders
  </button>
</div>

          </div>
        </div>
      </div> */}
      <div
        className="container-fluid"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "100vh",
          padding: "40px 20px",
          marginTop: "35px",
        }}
      >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            {/* Success Card */}
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                padding: "40px 30px",
                marginBottom: "20px",
              }}
            >
              {/* Success Icon */}
              <div className="text-center mb-4">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                    borderRadius: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "scaleIn 0.5s ease-out",
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>

              {/* Heading */}
              <h2
                className="text-center mb-2"
                style={{
                  color: "#282c3f",
                  fontSize: "28px",
                  fontWeight: "700",
                  fontFamily: "'Assistant', sans-serif",
                }}
              >
                Order Confirmed!
              </h2>

              <p
                className="text-center mb-4"
                style={{
                  color: "#94969f",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Your order is confirmed. You will receive an order confirmation
                email/SMS shortly with the expected delivery date for your
                items.
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "#f5f5f6",
                  margin: "30px 0",
                }}
              ></div>

              {/* Delivery Info */}
              <div
                style={{
                  background: "#f8f8f8",
                  borderRadius: "12px",
                  padding: "20px",
                  marginBottom: "25px",
                }}
                onClick={() =>
                  navigate("/orders", { state: { open: "returns" } })
                }
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#94969f",
                        margin: "0",
                        fontWeight: "500",
                      }}
                    >
                      Delivering to:
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#282c3f",
                        margin: "0",
                        fontWeight: "600",
                      }}
                    >
                      {addr?.userName}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    color: "#535665",
                    lineHeight: "1.7",
                  }}
                >
                  <p style={{ margin: "0" }}>
                    {addr?.address}, {addr?.city}
                  </p>
                  <p style={{ margin: "0" }}>
                    {addr?.state} - {addr?.pinCode}
                  </p>
                </div>
              </div>

              {/* Info Box */}
              <div
                style={{
                  background: "#fff3e0",
                  borderLeft: "4px solid #ff9800",
                  borderRadius: "8px",
                  padding: "15px 18px",
                  marginBottom: "30px",
                }}
              >
                <div className="d-flex align-items-start">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff9800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      marginRight: "10px",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#e65100",
                      margin: "0",
                      lineHeight: "1.5",
                    }}
                  >
                    You can track/view/modify order from orders page.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px 32px",
                    fontSize: "15px",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                    transition: "all 0.3s ease",
                    flex: "1",
                    minWidth: "160px",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(102, 126, 234, 0.3)";
                  }}
                  onClick={() =>
                    navigate("/orders", { state: { open: "returns" } })
                  }
                >
                  Order Details
                </button>

                <button
                  className="btn"
                  style={{
                    background: "white",
                    color: "#667eea",
                    border: "2px solid #667eea",
                    borderRadius: "8px",
                    padding: "14px 32px",
                    fontSize: "15px",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    flex: "1",
                    minWidth: "160px",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#f5f6ff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  onClick={() => navigate("/orders")}
                >
                  View Orders
                </button>
              </div>
            </div>

            {/* Payment Option Info */}
            {/* <div style={{
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div className="d-flex align-items-center gap-2 mb-1">
                <p style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#282c3f",
                  margin: "0"
                }}>
                  Now pay at your convenience
                </p>
                <span style={{
                  background: "#4caf50",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "2px 8px",
                  borderRadius: "4px"
                }}>
                  New
                </span>
              </div>
              <p style={{
                fontSize: "13px",
                color: "#94969f",
                margin: "0",
                lineHeight: "1.5"
              }}>
                Pay online using Pay Now option or Pay on Delivery (Cash/UPI)
              </p>
            </div>
          </div> */}
          </div>
        </div>

        <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
      </div>
    </>
  );
};

export default OrderSuccess;
