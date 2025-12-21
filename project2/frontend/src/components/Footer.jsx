// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <div className="container">
//         {" "}
//         <footer className="py-5">
//           {" "}
//           <div className="row">
//             {" "}
//             <hr className="mb-3"/>
//             <div className="col-6 col-md-2 mb-3">
//               {" "}
//               <h5>Section</h5>{" "}
//               <ul className="nav flex-column">
//                 {" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Home
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Features
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Pricing
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     FAQs
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     About
//                   </a>
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//             <div className="col-6 col-md-2 mb-3">
//               {" "}
//               <h5>Section</h5>{" "}
//               <ul className="nav flex-column">
//                 {" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Home
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Features
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Pricing
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     FAQs
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     About
//                   </a>
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//             <div className="col-6 col-md-2 mb-3">
//               {" "}
//               <h5>Section</h5>{" "}
//               <ul className="nav flex-column">
//                 {" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Home
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Features
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     Pricing
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     FAQs
//                   </a>
//                 </li>{" "}
//                 <li className="nav-item mb-2">
//                   <a href="#" className="nav-link p-0 text-body-secondary">
//                     About
//                   </a>
//                 </li>{" "}
//               </ul>{" "}
//             </div>{" "}
//             <div className="col-md-5 offset-md-1 mb-3">
//               {" "}
//               <form>
//                 {" "}
//                 <h5>Subscribe to our newsletter</h5>{" "}
//                 <p>Monthly digest of what's new and exciting from us.</p>{" "}
//                 <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//                   {" "}
//                   <label htmlFor="newsletter1" className="visually-hidden">
//                     Email address
//                   </label>{" "}
//                   <input
//                     id="newsletter1"
//                     type="email"
//                     className="form-control"
//                     placeholder="Email address"
//                   />{" "}
//                   <button className="btn btn-primary" type="button">
//                     Subscribe
//                   </button>{" "}
//                 </div>{" "}
//               </form>{" "}
//             </div>{" "}
//           </div>{" "}
//           <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//             {" "}
//             <p>© 2025 Company, Inc. All rights reserved.</p>{" "}
//             <ul className="list-unstyled d-flex">
//               {" "}
//               <li className="ms-3">
//                 <a
//                   className="link-body-emphasis"
//                   href="#"
//                   aria-label="Instagram"
//                 >
//                   <svg className="bi" width="24" height="24">
//                     <use xlinkHref="#instagram"></use>
//                   </svg>
//                 </a>
//               </li>{" "}
//               <li className="ms-3">
//                 <a
//                   className="link-body-emphasis"
//                   href="#"
//                   aria-label="Facebook"
//                 >
//                   <svg className="bi" width="24" height="24" aria-hidden="true">
//                     <use xlinkHref="#facebook"></use>
//                   </svg>
//                 </a>
//               </li>{" "}
//             </ul>{" "}
//           </div>{" "}
//         </footer>{" "}
//       </div>
//     </>
//   );
// };

// export default Footer;



import React from "react";

const Footer = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #bfbfecff 0%, #764ba2 100%)',
      color: '#ffffff',
      marginTop: '4rem'
    }}>
      <div className="container">
        <footer className="py-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 style={{ 
                fontWeight: '700',
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Company</h5>
              <ul className="nav flex-column" style={{ gap: '0.5rem' }}>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Press
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 style={{ 
                fontWeight: '700',
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Resources</h5>
              <ul className="nav flex-column" style={{ gap: '0.5rem' }}>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Documentation
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Tutorials
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 style={{ 
                fontWeight: '700',
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Legal</h5>
              <ul className="nav flex-column" style={{ gap: '0.5rem' }}>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Terms of Service
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Cookie Policy
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    padding: '0.25rem 0'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.target.style.transform = 'translateX(0)';
                  }}>
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 style={{ 
                fontWeight: '700',
                fontSize: '1.25rem',
                marginBottom: '1.5rem',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>Newsletter</h5>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                marginBottom: '1rem',
                lineHeight: '1.6'
              }}>
                Subscribe to get the latest updates and news.
              </p>
              <div className="d-flex flex-column gap-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  style={{
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    backdropFilter: 'blur(10px)'
                  }}
                />
                <button 
                  className="btn"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#667eea',
                    fontWeight: '600',
                    borderRadius: '8px',
                    padding: '0.75rem 1.5rem',
                    border: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ffffff';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div 
            className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 mt-4"
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.85)',
              margin: '0.5rem 0',
              fontSize: '0.95rem'
            }}>
              © 2025 Company, Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex gap-3 m-0">
              <li>
                <a
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
