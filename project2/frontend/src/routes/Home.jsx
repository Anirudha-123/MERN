import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const heroImages = ["/hero3.png", "/hero.png", "/hero4.jpg"];

  const navigate = useNavigate();

  const section3 = [
    { id: 106, image: "/p_img12.png" },
    { id: 101, image: "/shirt7.jpg" },
    { id: 204, image: "/p_img5.png" },
    { id: 205, image: "/p_img6.png" },
    { id: 206, image: "/p_img7.png" },
    { id: 107, image: "/p_img8.png" },
    { id: 108, image: "/p_img9.png" },
    { id: 104, image: "/p_img10.png" },
  ];

  const section9 = [
    {
      image: "/p_img6.png",
    },
    {
      image: "/p_img9.png",
    },
    {
      image: "/p_img38.png",
    },
    {
      image: "/p_img3.png",
    },
    {
      image: "/p_img16.png",
    },
    {
      image: "/p_img19.png",
    },
    {
      image: "/p_img24.png",
    },
    {
      image: "/p_img25.png",
    },
  ];

  return (
    <>
      <div className="heroSection">
        <div className=" mb-5 ">
          {/* <div className="mt-5">
          <img
            src="/Amsterdam.jpg"
            alt=""
            className="image-fluid rounded w-100 mt-5"
            style={{ maxHeight: "650px", objectFit: "cover" }}
          />
        </div> */}

          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide mb-3"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            {/* Indicators */}
            <div className="carousel-indicators">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Images */}
            <div
              className="carousel-inner"
              style={{ maxHeight: "600px", objectFit: "contain" }}
            >
              {heroImages.map((img, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={img}
                    className="d-block w-100"
                    alt="hotel"
                     loading="lazy"
                    style={{ height: "600px", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="row mx-2 ">
          {/* <div className="col-md-3">
            <div className="card" style={{ border: "none" }}>
              <img src="/p_img48.png" alt="mens" />
              <h5 className="text-center mt-3">MENS</h5>
            </div>
          </div>
          <div className="col-md-3" style={{ border: "none" }}>
            {" "}
            <div className="card" style={{ border: "none" }}>
              <img src="/p_img37.png" alt="womens" />
              <h5 className="text-center mt-3">WOMENS</h5>
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            <div className="card" style={{ border: "none" }}>
              <img src="/p_img14.png" alt="kids" />
              <h5 className="text-center mt-3">KIDS</h5>
            </div>
          </div> */}
          <div className="col-md-3">
            <div
              className="card"
              style={{ border: "none" }}
              onClick={() => navigate("/category/mens")}
            >
              <img src="/p_img48.png" alt="mens" />
              <h5 className="text-center mt-3">MENS</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card"
              style={{ border: "none" }}
              onClick={() => navigate("/category/womens")}
            >
              <img src="/p_img37.png" alt="womens" />
              <h5 className="text-center mt-3">WOMENS</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="card"
              style={{ border: "none" }}
              onClick={() => navigate("/category/kids")}
            >
              <img src="/p_img14.png" alt="kids" />
              <h5 className="text-center mt-3">KIDS</h5>
            </div>
          </div>

          <div className="col-md-3">
            {" "}
            <div className="card" style={{ border: "none" }}>
              <img src="/p_img36.png" alt="winterwear" />
              <h5 className="text-center mt-3">WINTERWEAR</h5>
            </div>
          </div>
        </div>
      </div>

      {/* <hr style={{ marginInline: "30px", marginTop: "40px" }} /> */}

      <div className="d-flex align-items-center justify-content-center my-4 mt-5">
        <div
          className="flex-grow-1 border-top border-1 border-success mx-3"
          style={{ maxWidth: "500px", opacity: "0.4" }}
        ></div>
        <h2
          className="text-success fw-bold mb-0 "
          style={{ fontFamily: "serif" }}
        >
          Trending Now
        </h2>
        <div
          className="flex-grow-1 border-top border-1 border-success mx-3"
          style={{ maxWidth: "500px", opacity: "0.4" }}
        ></div>
      </div>

      {/* <h4 className="ms-4 mb-4 fs-3" style={{ fontFamily: "serif" }}>
        Trending Now
      </h4> */}
      <div className="section3 mt-4 mx-"></div>

      <div className="section3">
        <div className="row mx-3">
          {section3.map((item, index) => (
            <div
              className="col-md-3"
              style={{ borderTopRightRadius: "20%" }}
              key={index}
            >
              <div
                className="card mb-4 mt-4"
                style={{ borderTopRightRadius: "20%" }}
              >
                <img
                  src={item.image}
                  alt=""
                   loading="lazy"
                  className=""
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderTopRightRadius: "15%",
                  }}
                  onClick={() => navigate(`/product/${item.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section4">
        <div className="card">
          <img
            src="/hero6.png"
            alt=""
            style={{ objectFit: "cover", marginTop: "50px" }}
          />
        </div>
      </div>

      {/* <hr style={{ marginInline: "30px", marginTop: "40px" }} />
      <h4 className="ms-4  fs-3" style={{ fontFamily: "serif" }}>
        New Arrivals
      </h4> */}

      <div className="d-flex align-items-center justify-content-center my-4 mt-5">
        <div
          className="flex-grow-1 border-top border-1 border-success mx-3"
          style={{ maxWidth: "500px", opacity: "0.4" }}
        ></div>
        <h2
          className="text-success fw-bold mb-0 "
          style={{ fontFamily: "serif" }}
        >
          NEW ARRIVALS
        </h2>
        <div
          className="flex-grow-1 border-top border-1 border-success mx-3"
          style={{ maxWidth: "500px", opacity: "0.4" }}
        ></div>
      </div>

      <div className="section7">
        <div className="row mx-3">
          {section3.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4 mt-3">
                <img
                  src={item.image}
                  alt=""
                   loading="lazy"
                  className=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section7">
        <div className="card" style={{ border: "none" }}>
          <img
            src="/hero8.png"
            alt=""
            style={{
              objectFit: "cover",
              marginTop: "50px",
              height: "480px",
              border: "none",
            }}
          />
        </div>
      </div>

      {/* <hr style={{ marginInline: "30px", marginTop: "60px" }} />
      <h4 className="ms-4  fs-3" style={{ fontFamily: "serif" }}>
        KIDSWEAR
      </h4> */}

      <div className="d-flex align-items-center justify-content-center my-4 mt-5">
        <div
          className="flex-grow-1 border-top border-1 border-success mx-3"
          style={{ maxWidth: "500px", opacity: "0.4" }}
        ></div>
        <h2
          className="text-success fw-bold mb-0 "
          style={{ fontFamily: "serif" }}
        >
          KIDSWEAR
        </h2>
        <div
          className="flex-grow-1 border-top border-1 border-success mx-3"
          style={{ maxWidth: "500px", opacity: "0.4" }}
        ></div>
      </div>

      <div className="section8">
        <div className="row mx-3 mt-3">
          {section9.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="card mb-4 mt-3"
                style={{
                  borderTopLeftRadius: "10%",
                  borderTopRightRadius: "10%",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                   loading="lazy"
                  className=""
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10%",
                    borderTopRightRadius: "10%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section9">
        <div className="container my-5">
          {" "}
          <div className="p-5 text-center bg-body-tertiary rounded-3">
            {" "}
            {/* <svg
              className="bi mt-4 mb-3"
              style="color: var(--bs-indigo);"
              width="100"
              height="100"
              aria-hidden="true"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "} */}
            <a href="" className="">
              <img
                src="/logo3.png"
                alt=""
                style={{ height: "50px", objectFit: "cover" }}
              />
            </a>
            <h1 className="text-body-emphasis mb-3">
              Elevate Your Style with Puma
            </h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              Discover performance-driven sportswear, stylish everyday
              essentials, and the latest streetwear drops. Designed for comfort,
              built for athletes, and loved by trendsetters around the world.
              Step into the season with premium quality and iconic Puma designs.
            </p>
            <div className="d-inline-flex gap-2 mb-5">
              {" "}
              <button
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
              >
                Call to action
                <svg
                  className="bi ms-2"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <use xlinkHref="#arrow-right-short"></use>
                </svg>{" "}
              </button>{" "}
              <button
                className="btn btn-outline-secondary btn-lg px-4 rounded-pill"
                type="button"
              >
                Secondary link
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
