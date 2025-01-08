import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'


import breadcrumb from '../assets/img/breadcrumb/01.jpg'
import subersibleservice from '../assets/img/submersible-pump-service.jpg'

const DewateringPumpHiringServices = () => {
  return (
    
  <>
  
  <Header/>

  <main className="main">
  {/* breadcrumb */}
  <div
    className="site-breadcrumb"
    style={{ backgroundImage: `url(${breadcrumb})` }}
  >
    <div className="container">
      <h2 className="breadcrumb-title">Dewatering Pump Hiring Services</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active"><i className="fa-solid fa-angles-right me-1"></i>Dewatering Pump Hiring Services</li>
      </ul>
    </div>
  </div>
  {/* breadcrumb end */}
  {/* service-single */}
  <div className="service-single-area py-120">
    <div className="container">
      <div className="service-single-wrapper">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="widget category">
                <h4 className="widget-title">All Services</h4>
                <div className="category-list">
                  <Link to="/rental-services" onClick={() => window.scrollTo(0, 0)}>
                  <i className="fas fa-arrow-right-long"></i>
                    Rental Services
                  </Link>
                  <Link to="/pump-repairing-services" onClick={() => window.scrollTo(0, 0)}>
                  <i className="fas fa-arrow-right-long"></i>
                    Pump Repairing Services
                  </Link>
                  <Link to="/dewatering-pump-hiring-services" onClick={() => window.scrollTo(0, 0)}>
                  <i className="fas fa-arrow-right-long"></i>
                    Dewatering Pump Hiring Services
                  </Link>
                  <Link to="/repairing-services" onClick={() => window.scrollTo(0, 0)}>
                  <i className="fas fa-arrow-right-long"></i>
                    Repairing Service
                  </Link>
                  
                  
                </div>
              </div>
             
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="service-details">
              <div className="service-details-img mb-30">
                <img src={subersibleservice} alt="thumb" />
              </div>
              <div className="service-details">
                <h3 className="mb-20">Dewatering Pump Hiring Services</h3>
                <p className="mb-20">
                At Mansi Engineering & Electricals in Pune India, we understand the significance of efficient dewatering solutions for various industries and projects. Whether you are dealing with construction sites, mining operations, municipal projects, or any other application that requires water removal, our top-notch dewatering pump hiring services have got you covered.
                </p>
               
               
                
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* service-single end*/}
</main>


  <Footer/>
  
  </>

  )
}

export default DewateringPumpHiringServices