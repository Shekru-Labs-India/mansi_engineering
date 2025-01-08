import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
   
  <>
  
  <div id="whatsapp-chat-container">
    <a href="https://wa.me/918482858686?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank">
         
        <i id="whatsapp-icon" className="fa-brands fa-whatsapp fa-shake"></i>
    </a>
</div>

  
  {/* footer area */}
  <footer className="footer-area">
    <div className="footer-widget">
      <div className="container">
        <div className="row footer-widget-wrapper pt-100 pb-70">
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget-box about-us">
              <Link to="/" className="footer-logo bg-light rounded ">
                <img src={logo} alt="" style={{ width: '200px', height: '80px' }}/>
              </Link>
              <p className="mb-3">
              Mansi Engineering & Electricals is a trusted leader in water handling solutions, offering a wide range of pumps for diverse applications.
              </p>
              <ul className="footer-contact">
                <li>
                 
                    <i className="fa-solid fa-phone" />
                    +91 84828 58686
                  
                </li>
                <li>
                  <i className="fa-solid fa-location-dot px-2" />
                  486, Kasba Peth Rd, Phadke Haud,
                  Kasba Peth, Pune, Maharashtra 411002
                </li>
                <li>
                  
                    <i className="fa-solid fa-envelope" />
                    sales@mansiengg.com
                    
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mt-4">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right"  /> About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right"  /> Contact
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-4">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Our Services</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/rental-services" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" /> Rental Services
                  </Link>
                </li>
                <li>
                  <Link to="/pump-repairing-services" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" /> Pump Repairing Services
                  </Link>
                </li>
                <li>
                  <Link to="/dewatering-pump-hiring-services" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" /> Dewatering Pump Hiring Services
                  </Link>
                </li>
                <li>
                  <Link to="/repairing-services" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" /> Repairing Service
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-4">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Our Products</h4>
              <ul className="footer-list">
                <li>
                  <Link to="/dewatering-pump" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" />  Dewatering Pump
                  </Link>
                </li>
                <li>
                  <Link to="/water-pump" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" />  Water Pump
                  </Link>
                </li>
                <li>
                  <Link to="/booster-pump" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" /> Booster Pump
                  </Link>
                </li>
                <li>
                  <Link to="/borewell-pump" onClick={() => window.scrollTo(0, 0)}>
                    <i className="fas fa-caret-right" />  Borewell Pump
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
      <div className="row d-flex justify-content-between text-center">
  <div className="col-12 col-md-3 align-self-center">
    <p className="copyright-text">
      © Mansi Engineering & Electricals.<br/><span id="date" />{" "}
      All Rights Reserved.
    </p>
  </div>
  <div className="col-12 col-md-3 align-self-center">
    <p className="copyright-text">
      <Link to="https://www.techyantriki.com/" target="_blank"><i className="fa-solid fa-bolt "></i> Powered by <br/> Techyantriki solutions Pvt. Ltd.</Link>
    </p>
  </div>
  <div className="col-12 col-md-3 align-self-center d-flex justify-content-center">
  <ul className="footer-social ">
    <li className="d-inline">
      <Link to="https://www.facebook.com/mansiengg.in?mibextid=ZbWKwL" target="_blank">
        <i className="fab fa-facebook-f" />
      </Link>
    </li>
    <li className="d-inline mx-2">
      <Link to="https://wa.me/918482858686" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp" />
      </Link>
    </li>
    <li className="d-inline">
      <Link to="https://www.linkedin.com/company/mansi-engineering-electricals/" target="_blank">
        <i className="fab fa-linkedin-in" />
      </Link>
    </li>
  </ul>
</div>
</div>
      </div>
    </div>
  </footer>
  {/* footer area end */}

  {isVisible && (
        <Link to="#" id="scroll-top" className="active" onClick={scrollToTop}>
          <i className="fa-solid fa-chevron-up" />
        </Link>
      )}

  </>

  )
}

export default Footer