import React from "react";

const Aboutus = () => {
  return (
    <div className="container " style={{ marginTop: "100px" }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 style={{ fontWeight: "700", color: "#007bff" }}>About Us</h1>
        <p style={{ fontSize: "1.1rem", color: "#555" }}>
          Learn more about our company, mission, and values.
        </p>
      </div>

      {/* Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="/about.png"
            alt="Our Mission"
            className="img-fluid rounded"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.2)" ,height:"420px",width:"100%"}}
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "#007bff" }}>Our Mission</h2>
         <p style={{ fontSize: '1rem', color: '#555' }}>
  Our mission is to redefine the clothing experience by offering premium-quality,
  trendy, and comfortable apparel that suits every lifestyle. We are committed to
  delivering fashion that blends style with everyday comfort—whether it’s casual
  wear, ethnic wear, office attire, or seasonal collections.  
  <br /><br />
  We carefully curate fabrics that feel good, last long, and reflect true
  craftsmanship. Our designs are inspired by the latest global trends while
  staying connected to the needs of our customers.  
  <br /><br />
  We believe clothing is more than just fabric—it is self-expression, confidence,
  and comfort. That is why we focus on sustainability, affordability, quality,
  and modern aesthetics in everything we create.  
  <br /><br />
  Our goal is to ensure a seamless, enjoyable, and trustworthy shopping experience
  through innovative designs, dependable service, and a strong commitment to
  customer satisfaction.
</p>


        </div>
      </div>

      {/* Team Section
      <div className="row text-center mb-5">
        <h2 className="mb-4" style={{ color: "#007bff" }}>
          Our Team
        </h2>
        <div className="col-md-4 mb-3">
          <div
            className="p-3 border rounded"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-circle mb-2"
            />
            <h5>John Doe</h5>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>CEO</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="p-3 border rounded"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-circle mb-2"
            />
            <h5>Jane Smith</h5>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>CTO</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div
            className="p-3 border rounded"
            style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-circle mb-2"
            />
            <h5>Mike Johnson</h5>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>COO</p>
          </div>
        </div>
      </div> */}

      {/* Team Section */}
<div className="row text-center mb-5">

  <div className="col-12 mb-4">
    <h2 style={{ color: "#007bff", fontWeight: "600" }}>Our Team</h2>
    <p style={{ color: "#666", fontSize: "1rem" }}>
      Meet the people who help build and grow our company.
    </p>
  </div>

  <div className="col-md-4 mb-3">
    <div
      className="p-3 border rounded"
      style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <h4 style={{ fontWeight: "600" }}>Virat Kohali</h4>
      <p style={{ fontSize: "0.95rem", color: "#555" }}>Chief Executive Officer (CEO)</p>
      <p style={{ fontSize: "0.9rem", color: "#777" }}>
        Leads the company with vision and strategic direction.
      </p>
    </div>
  </div>

  <div className="col-md-4 mb-3">
    <div
      className="p-3 border rounded"
      style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <h4 style={{ fontWeight: "600" }}>Rohit Sharma</h4>
      <p style={{ fontSize: "0.95rem", color: "#555" }}>Chief Technology Officer (CTO)</p>
      <p style={{ fontSize: "0.9rem", color: "#777" }}>
        Oversees technology, development, and product innovation.
      </p>
    </div>
  </div>

  <div className="col-md-4 mb-3">
    <div
      className="p-3 border rounded"
      style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
    >
      <h4 style={{ fontWeight: "600" }}>Mike Johnson</h4>
      <p style={{ fontSize: "0.95rem", color: "#555" }}>Chief Operating Officer (COO)</p>
      <p style={{ fontSize: "0.9rem", color: "#777" }}>
        Ensures smooth day-to-day operations and workflow.
      </p>
    </div>
  </div>

</div>


      {/* Contact Section */}
      <div className="text-center mb-5">
        <h2 style={{ color: "#007bff" }}>Contact Us</h2>
        <p style={{ fontSize: "1rem", color: "#555" }}>
          Email: info@company.com | Phone: +123 456 7890
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
