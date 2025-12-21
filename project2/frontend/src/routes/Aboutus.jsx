const Aboutus = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      <div className="container" >
        {/* Header Section */}
        <div
          className="text-center"
          style={{ marginBottom: "80px", paddingTop: "40px" }}
        >
          <h1
            style={{
              fontWeight: "700",
              fontSize: "3.5rem",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
              letterSpacing: "-1px",
            }}
          >
            About Us
          </h1>
          <p
            className="mx-auto"
            style={{
              fontSize: "1.2rem",
              color: "#6c757d",
              maxWidth: "600px",
              lineHeight: "1.6",
            }}
          >
            Crafting fashion stories with quality fabrics, timeless designs, and
            sustainable style
          </p>
        </div>

        {/* Mission Section */}

        {/* <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div> */}
        <div
          className="row align-items-center  "
          style={{ marginBottom: "100px" }}
        >
          <div className="col-md-6 mb-4 mb-lg-0 ">
            <img
              src="/about4.jpg"
              alt="Our Mission"
              className="img-fluid"
              style={{
                height: "650px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              }}
            />
          </div>
          <div className="col-md-6 ">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "30px",
              }}
            >
              Our Mission
            </h2>
            <div
              style={{
                fontSize: "1.05rem",
                color: "#495057",
                lineHeight: "1.8",
              }}
            >
              <p className="mb-3">
                Our mission is to redefine the fashion experience by offering
                premium-quality, trendy, and comfortable clothing that suits
                every lifestyle. We are committed to delivering style that
                blends contemporary fashion with everyday comfort—whether it's
                casual streetwear, elegant ethnic wear, professional office
                attire, or seasonal collections.
              </p>
              <p className="mb-3">
                We carefully curate premium fabrics—from soft cotton and
                breathable linen to luxurious silk and durable denim—that feel
                good, last long, and reflect true craftsmanship. Our designs are
                inspired by the latest runway trends and global fashion
                movements while staying connected to the needs of our
                style-conscious customers.
              </p>
              <p className="mb-3">
                We believe fashion is more than just garments—it's
                self-expression, confidence, and comfort. That's why we focus on
                sustainable sourcing, ethical manufacturing, affordability,
                quality, and modern aesthetics in every piece we create.
              </p>
              <p>
                Our goal is to ensure a seamless, enjoyable, and trustworthy
                shopping experience through innovative fashion-forward designs,
                dependable service, hassle-free returns, and a strong commitment
                to customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Fashion Values Section */}
        <div className="row text-center" style={{ marginBottom: "100px" }}>
          <div className="col-12 mb-5">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Choose Us
            </h2>
          </div>

          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>👔</span>
            </div>
            <h4
              style={{ fontWeight: "600", marginBottom: "15px", color: "#333" }}
            >
              Premium Quality
            </h4>
            <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>
              Handpicked fabrics and superior stitching for lasting durability
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 10px 30px rgba(240, 147, 251, 0.3)",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>✨</span>
            </div>
            <h4
              style={{ fontWeight: "600", marginBottom: "15px", color: "#333" }}
            >
              Trendy Designs
            </h4>
            <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>
              Latest fashion trends curated by expert stylists and designers
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 10px 30px rgba(79, 172, 254, 0.3)",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>🌿</span>
            </div>
            <h4
              style={{ fontWeight: "600", marginBottom: "15px", color: "#333" }}
            >
              Eco-Friendly
            </h4>
            <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>
              Sustainable materials and ethical manufacturing practices
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <div
              style={{
                background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                boxShadow: "0 10px 30px rgba(250, 112, 154, 0.3)",
              }}
            >
              <span style={{ fontSize: "2.5rem" }}>💯</span>
            </div>
            <h4
              style={{ fontWeight: "600", marginBottom: "15px", color: "#333" }}
            >
              Perfect Fit
            </h4>
            <p style={{ color: "#6c757d", fontSize: "0.95rem" }}>
              Wide size range and tailored fits for every body type
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-5">
          <div className="text-center mb-5">
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "15px",
              }}
            >
              Our Team
            </h2>
            <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
              Meet the people who help build and grow our company
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div
                className="p-4 border-0 rounded"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 50px rgba(102, 126, 234, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px rgba(102, 126, 234, 0.3)";
                }}
              >
                <h4
                  className="mb-2"
                  style={{
                    fontWeight: "700",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  Virat Kohali
                </h4>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: "500",
                  }}
                >
                  Chief Executive Officer (CEO)
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  Leads the company with vision and strategic direction.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="p-4 border-0 rounded"
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  boxShadow: "0 10px 40px rgba(240, 147, 251, 0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 50px rgba(240, 147, 251, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px rgba(240, 147, 251, 0.3)";
                }}
              >
                <h4
                  className="mb-2"
                  style={{
                    fontWeight: "700",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  Rohit Sharma
                </h4>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: "500",
                  }}
                >
                  Chief Technology Officer (CTO)
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  Oversees technology, development
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="p-4 border-0 rounded"
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  boxShadow: "0 10px 40px rgba(79, 172, 254, 0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 50px rgba(79, 172, 254, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px rgba(79, 172, 254, 0.3)";
                }}
              >
                <h4
                  className="mb-2"
                  style={{
                    fontWeight: "700",
                    color: "#fff",
                    fontSize: "1.5rem",
                  }}
                >
                  Mike Johnson
                </h4>
                <p
                  className="mb-2"
                  style={{
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: "500",
                  }}
                >
                  Chief Operating Officer (COO)
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  Ensures smooth day-to-day operations and workflow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="text-center"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            padding: "60px 40px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
          }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.95)",
              marginBottom: "0",
            }}
          >
            Email: info@company.com | Phone: +123 456 7890
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
