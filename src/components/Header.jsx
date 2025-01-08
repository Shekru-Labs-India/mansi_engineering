import React,{useEffect,useState} from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isFixed, setIsFixed] = useState(false); // State to track fixed position

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50); // Update state based on scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);


  return (
     
    <>
    
    
  {/* header area */}
  <header className="header">
    {/* top header */}
    <div className="header-top">
      <div className="container">
        <div className="header-top-wrapper">
          <div className="header-top-left">
            <div className="header-top-contact">
              <ul>
                <li>
                  <a href="index.html#">
                    <i className="fa fa-map-marker-alt me-1" /> 
                    486, Kasba Peth Rd, Phadke Haud, Kasba Peth, Pune, Maharashtra 411002

                  </a>
                </li>
                <li>
  <Link to="mailto:sales@mansiengg.com">
    <i className="fa fa-envelope me-1" />
    <span>sales@mansiengg.com</span>
  </Link>
</li>

                <li>
                  <a href="tel:+21236547898">
                    <i className="fa fa-phone-alt" /> +91 84828 58686

                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-top-right">
            <div className="header-top-social">
              <span>Follow Us: </span>
              <Link to="https://www.facebook.com/mansiengg.in?mibextid=ZbWKwL" target="_blank">
                <i className="fab fa-facebook" />
              </Link>
              <Link
  
  to="https://wa.me/918482858686"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fa-brands fa-whatsapp"></i>
</Link>

              
              <Link to="https://www.linkedin.com/company/mansi-engineering-electricals/" target="_blank">
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-navigation">
    <nav className={`navbar navbar-expand-lg ${isFixed ? 'fixed-top' : ''}`}> {/* Updated className */}
    <div className="container position-relative">
      <a className="navbar-brand" href="index.html">
      <img src={logo} alt="logo" style={{ width: '190px', height: '80px' }} />
      </a>
      <div className="mobile-menu-right">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-mobile-icon">
            <i className="fa-solid fa-bars" />
          </span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="main_nav">
        <ul className="navbar-nav">
        <li className="nav-item dropdown">
                <Link
                  className="nav-link  "
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About
                </Link>
              </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              data-bs-toggle="dropdown"
               aria-expanded="false"
            >
              Services <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu fade-down">
            <li>
                    <Link className="dropdown-item" to="/rental-services" onClick={() => window.scrollTo(0, 0)}>
                    Rental Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pump-repairing-services" onClick={() => window.scrollTo(0, 0)}>
                    Pump Repairing Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dewatering-pump-hiring-services" onClick={() => window.scrollTo(0, 0)}>
                    Dewatering Pump Hiring
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/repairing-services" onClick={() => window.scrollTo(0, 0)}>
                    Repairing Services
                    </Link>
                  </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              data-bs-toggle="dropdown"
               aria-expanded="false"
            >
              Products <i className="fas fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu fade-down">
              
            <li>
                    <Link className="dropdown-item" to="/dewatering-pump" onClick={() => window.scrollTo(0, 0)}>
                    Dewatering Pump
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/water-pump" onClick={() => window.scrollTo(0, 0)}>
                    Water Pump
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/booster-pump" onClick={() => window.scrollTo(0, 0)}>
                    Booster Pump
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/borewell-pump" onClick={() => window.scrollTo(0, 0)}>
                    Borewell Pump
                    </Link>
                  </li>
             
              
            </ul>
          </li>
          
          <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
         
        </ul>
        <div className="nav-right">
          
          <div className="nav-right-btn mt-2">
            <Link to="https://wa.me/918482858686"
            target="_blank"
             rel="noopener noreferrer" className="theme-btn">
              Get A Quote
              <i className="fas fa-arrow-right-long" />
            </Link>
          </div>
        </div>
      </div>
      {/* search area */}
      <div className="search-area">
        <form action="index.html#">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type Keyword..."
            />
            <button type="submit" className="search-icon-btn">
              <i className="far fa-search" />
            </button>
          </div>
        </form>
      </div>
      {/* search area end */}
    </div>
  </nav>
</div>

  </header>
  {/* header area end */}



    </>

  )
}

export default Header