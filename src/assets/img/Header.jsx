import React from 'react'
import {Link,useLocation} from "react-router-dom";
import logo from '../assets/img/mansi1.jpeg'


const Header = () => {

  const location = useLocation(); 

  return (

  
  <>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark p-0">
    <div className="row gx-0 d-none d-lg-flex">
      <div className="col-lg-7 px-5 text-start">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-map-marker-alt text-primary me-2" />
          <small className='text-white'>486, Kasba Peth Rd, Phadke Haud, Kasba Peth, Pune, Maharashtra 411002</small>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <small className="far fa-clock text-primary me-2" />
          <small className='text-white'>Mon - Fri : 09.00 AM - 09.00 PM</small>
        </div>
      </div>
      <div className="col-lg-5 px-5 text-end">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <small className="fa fa-phone-alt text-primary me-2" />
          <span className='text-white'>+91 84828 58686</span>
        </div>
        <div className="h-100 d-inline-flex align-items-center mx-n2">
          <Link
            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-primary"
            to="https://www.facebook.com/mansiengg.in?mibextid=ZbWKwL"
          >
            <i className="fab fa-facebook-f text-primary" />
          </Link>
          <Link
            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-primary"
            
          >
            <i className="fab fa-twitter text-primary" />
          </Link>
          <Link
            className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary text-primary"
            
          >
            <i className="fab fa-linkedin-in text-primary" to="https://www.linkedin.com/company/mansi-engineering-electricals/" />
          </Link>
          <Link className="btn btn-square btn-link rounded-0 text-primary" >
            <i className="fab fa-instagram text-primary" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  
  <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <a
  href="index.html"
  className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
>
  <img src={logo} style={{ height: 60, width: 140 }} alt="logo" />
</a>

    <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
    >
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
                to="/"
                className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
                Home
            </Link>
            <Link
            to="/products"
            className={`nav-item nav-link ${location.pathname === "/products" ? "active" : ""}`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <div className="nav-item dropdown">
  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
    Pages
  </a>
  <div className="dropdown-menu bg-light m-0">
    
    <Link to="/rental-services" className="dropdown-item">
      Rental Services
    </Link>
    <Link to="/pump-repairing-services" className="dropdown-item">
      Pump Repairing Services
    </Link>
    <Link to="/dewatering-pump-hiring-services" className="dropdown-item">
      Dewatering Pump Hiring Services
    </Link>
    <Link to="/rebaring-service" className="dropdown-item">
      Rebaring Service
    </Link>
  </div>
</div>
          <Link
            to="/whychoose"
            className={`nav-item nav-link ${location.pathname === "/whychoose" ? "active" : ""}`}
          >
            Why Choose Us
          </Link>
          <Link
            to="/faq"
            className={`nav-item nav-link ${location.pathname === "/faq" ? "active" : ""}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="nav-item nav-link"
          >
            Contact
          </Link>
        </div>
    </div>
</nav>


  </>

  )
}

export default Header