import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import service from '../assets/img/service/single.jpg'
import pump10 from '../assets/img/pump10.jpg'
import breadcrumb from '../assets/img/breadcrumb/01.jpg'
import BorewellPumpservice from '../assets/img/borewell-pump-service.jpg'

const RebaringServices = () => {
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
      <h2 className="breadcrumb-title">Repairing Service</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="active"><i className="fa-solid fa-angles-right me-1"></i>Repairing Service</li>
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
                <img src={BorewellPumpservice} alt="thumb" />
              </div>
              <div className="service-details">
                <h3 className="mb-20">Repairing Service</h3>
                <p className="mb-20">
                Mansi Engineering & Electricals in Pune India, offers repair and expansion services for a variety of structures as part of its commitment to serving the demands of civil and construction sites. Our specialized staff fortifies the beams of these constructions using cutting-edge equipment and chemical procedures to make sure they can bear the tension of concrete. Our skilled personnel continuously monitor the rebaring services process to provide the best outcomes with a focus on upholding high-quality standards.
                </p>
                <p className="mb-20">
                Rebaring, also known as reinforcing steel, is the process of adding steel bars or meshes within concrete structures to provide additional tensile strength. Concrete, on its own, is excellent in compression but weak in tension. By strategically placing reinforcing bars, the load-carrying capacity of the concrete is greatly improved, making it capable of withstanding various external forces and environmental factors.
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

export default RebaringServices