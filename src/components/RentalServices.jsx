import React from 'react'
import Header from './Header'
import Footer from './Footer'
import service from '../assets/img/service/single.jpg'
import { Link } from 'react-router-dom'
import pump10 from '../assets/img/pump10.jpg'
import breadcrumb from '../assets/img/breadcrumb/01.jpg'
import waterpumpservice from '../assets/img/water-pump-service.jpg'

const RentalServices = () => {
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
      <h2 className="breadcrumb-title">Rental Services</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active"><i className="fa-solid fa-angles-right me-1"></i>Rental Services</li>
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
                <img src={waterpumpservice} alt="thumb" />
              </div>
              <div className="service-details">
                <h3 className="mb-20">Rental Services</h3>
                <p className="mb-20">
                Do you require trustworthy and effective rental services for dewatering pumps, centrifugal pumps, diesel engine pumps, water pumps, sludge pumps, or diesel engine pumps in Pune, India? Consider Mansi Engineering & Electricals first. We are here to accommodate all of your rental needs with our wide variety of services.
                </p>
                <p className="mb-20">
                At Mansi Engineering & Electricals, we understand the importance of having access to high-quality equipment for your projects. That's why we offer a comprehensive selection of rental services specifically tailored to meet the demands of various industries. Whether you require a water pump for irrigation purposes, a sludge pump for waste management, or a dewatering pump for construction sites, we have got you covered.
                </p>
                <p className="mb-20">
                Our rental services boast state-of-the-art equipment that is meticulously maintained and regularly inspected to ensure optimal performance and reliability. We take pride in our commitment to providing top-notch customer service and guaranteeing that our clients receive the best possible solutions for their pumping requirements.
                </p>
                <p className="mb-20">
                By choosing Mansi Engineering & Electricals in Pune India as your rental service provider, you can save both time and energy. Our team of knowledgeable professionals will guide you through the process of selecting the perfect pump for your specific needs.
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

export default RentalServices