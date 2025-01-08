import React, { useEffect, useRef } from 'react';
import Header from './Header'


import choose from '../assets/img/why-choose-us.jpg'

import pump1 from '../assets/img/pump1.jpg'
import pump2 from '../assets/img/pump2.jpg'
import pump11 from '../assets/img/pump11.jpg'
import pump12 from '../assets/img/pump12.jpg'
import submersible from '../assets/img/submersible-pump.jpg'
import pump8 from '../assets/img/pump8.webp'
import pump9 from '../assets/img/pump9.jpg'
import pump10 from '../assets/img/pump10.jpg'
import pump4 from '../assets/img/pump4.jpg'
import borewellpump from '../assets/img/borewell-submersible-pump.png'
import pump from '../assets/img/pump.png'
import pump13 from '../assets/img/pump13.png'
import worker from '../assets/img/worker.png'
import review from '../assets/img/review.png'
import project from '../assets/img/project-management.png'
import guarantee from '../assets/img/guaranteed.png'
import waterpump from '../assets/img/water-pump.jpeg'
import pumpservice from '../assets/img/pump-service.jpg'
import BorewellPumpservice from '../assets/img/borewell-pump-service.jpg'
import waterpumpservice from '../assets/img/water-pump-service.jpg'
import subersibleservice from '../assets/img/submersible-pump-service.jpg'





import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {

  const counterRef = useRef(null); // Ref for counter area

  useEffect(() => {
    // Initialize Owl Carousel
    window.$(".hero-slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      dots: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
    });

    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the counter area is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the counting animation when in view
          startCounter();
        }
      });
    }, options);

    observer.observe(counterRef.current);

    return () => {
      observer.disconnect(); // Clean up observer
    };



  }, []);

  
  const startCounter = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const countTo = counter.getAttribute('data-to');
      let currentCount = 0;
      const speed = counter.getAttribute('data-speed');
      const increment = Math.ceil(countTo / (speed / 100));

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= countTo) {
          currentCount = countTo;
          clearInterval(interval);
        }
        counter.innerText = currentCount;
      }, 100);
    });
  };


  return (

    <>

      <Header />

      <main className="main">

        {/* hero slider */}
        <div className="hero-section">
          <div className="hero-slider owl-carousel owl-theme">
            {/* Slide 1 */}
            <div
              className="hero-single"
              style={{
                backgroundImage: `url(${pump1})`,
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <h6 className="hero-sub-title" data-animation="fadeInDown" data-delay=".25s">
                    <i className="fa-solid fa-lightbulb" />
                    Welcome To Mansi Engineering & Electricals!
                  </h6>
                  <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                    Retail Appliances,<span> Electrical</span>, and <span>Electronic</span>  Equipment
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    Authorized Dealer:Kirloskar,Shakti,Lubi,Darling Pumps,Khyatee, Everest also We deal in all brands & all type of Pumps.
                  </p>
                  <div className="hero-btn">
                    <Link to="/about" className="theme-btn">
                      About More
                      <i className="fas fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div
              className="hero-single"
              style={{
                backgroundImage: `url(${pump2})`,
              }}
            >
              <div className="container">
                <div className="hero-content">
                  <h6 className="hero-sub-title site-title-tagline" data-animation="fadeInDown" data-delay=".25s">
                    <i className="fa-solid fa-lightbulb" />
                    Welcome To Mansi Engineering & Electricals!
                  </h6>
                  <h1 className="hero-title" data-animation="fadeInRight" data-delay=".50s">
                    Retail Appliances,<span> Electrical</span>, and <span>Electronic</span> Equipment
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".75s">
                    Authorized Dealer:Kirloskar,Shakti,Lubi,Darling Pumps,Khyatee, Everest also We deal in all brands & all type of Pumps.
                  </p>
                  <div className="hero-btn">
                    <Link to="/about" className="theme-btn">
                      About More
                      <i className="fas fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero slider end */}


        {/* appointment area */}
        <div className="appointment">
          <div className="col-lg-8">
            <div className="appointment-form">
              <form action="index.html#">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <select className="form-select" name="service">
                        <option value="">Choose Service</option>
                        <option value={1}>Electrical Services</option>
                        <option value={2}>Electrical Panels</option>
                        <option value={3}>Security System</option>
                        <option value={4}>Surge Protection</option>
                        <option value={5}>Air Conditioning</option>
                        <option value={6}>Indoor Lighting</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <button type="submit" className="theme-btn">
                        Get Service
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* appointment area end*/}




       {/* about area */}
<div className="about-area pt-120 pb-50">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6" data-aos="fade-left" data-aos-delay="250" data-aos-duration="3000">
        <div className="about-left">
          <div className="about-img">
            <img src={pump8} alt="" />
          </div>
          <div className="about-experience">
            <div className="about-experience-icon">
              <i className="fa-solid fa-plug" />
            </div>
            <b className="text-start">
              25 Years Of <br /> Quality Service
            </b>
          </div>
        </div>
      </div>
      <div className="col-lg-6" data-aos="fade-right" data-aos-delay="250" data-aos-duration="3000" >
        <div className="about-right">
          <div className="site-heading mb-3">
            <span className="site-title-tagline">
              <i className="fa-solid fa-lightbulb" /> About Us
            </span>
            <h2 className="site-title">
              We Are Commited To <span>Provide Quality</span> Service
            </h2>
          </div>
          <p className="about-text">
            Founded in 1999, Mansi Engineering & Electricals has established itself as a prominent and trusted name in the water handling solutions industry. With an unwavering commitment to excellence and customer satisfaction, we have become a leading supplier of water supply pumps for a diverse range of applications across various industries. Our wide product range includes Dewatering Pump, Submersible Dewatering Pumps, Dewatering Equipments, Dewatering Pump, Diesel Dewatering Pump, Rainwater Dewatering System, Sludge Dewatering Pump, Water Pumps, Booster Pump, and Borewell Pumps.
          </p>
          <p className="about-text">
            At Mansi Engineering & Electricals, our unwavering commitment to excellence has led us to remarkable growth under the able guidance of our esteemed Owner, Dipak Shinde. With years of experience in the water handling solutions domain, his visionary leadership has been instrumental in shaping our success.
          </p>
          <p className="about-text">
            Presently, we take pride in achieving an annual turnover of approximately Rs. 5-10 Crore, a testament to our dedication to quality and customer satisfaction. As a leading name in the industry, we continually strive to exceed expectations and set new benchmarks.
          </p>
          <p className="about-text">
            Choose Mansi Engineering & Electricals for all your water handling needs, and experience excellence in every drop.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* about area end */}



        {/* service-area */}
        <div className="service-area bg pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="far fa-lightbulb-on" /> Our Services
                  </span>
                  <h2 className="site-title">
                    Expert Pump Repair <span>Services </span>
                    for <span> Reliable</span> and <span>Efficient</span> Performance
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="service-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="service-img">
                    <img src={waterpumpservice} alt="" />
                    <div className="service-icon">
                      <i className="fa-solid fa-screwdriver-wrench" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a >Rental Services</a>
                    </h3>
                    <p className="service-text">
                      Top-quality rental services with well-maintained equipment and exceptional customer support.
                    </p>
                    <div className="service-arrow">
                      <Link to="/rental-services" className="theme-btn text-white" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                        <i className="fas fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-item wow fadeInDown" data-wow-delay=".25s">
                  <div className="service-img">
                    <img src={pumpservice} alt="" />
                    <div className="service-icon">
                      <i className="fa-solid fa-wrench" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a >Pump Repairing Services</a>
                    </h3>
                    <p className="service-text">
                      Mansi Engineering offers expert pump repairing services for residential, commercial, industrial.
                    </p>
                    <div className="service-arrow">
                      <Link to="/pump-repairing-services" className="theme-btn text-white" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                        <i className="fas fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="service-img">
                    <img src={subersibleservice} alt="" />
                    <div className="service-icon">
                      <i className="fa-solid fa-screwdriver-wrench" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a >Dewatering Pump Hiring Services</a>
                    </h3>
                    <p className="service-text">
                      Mansi Engineering offers reliable dewatering pump hiring services for various industries.
                    </p>
                    <div className="service-arrow">
                      <Link to="/dewatering-pump-hiring-services" className="theme-btn text-white" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                        <i className="fas fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-item wow fadeInDown" data-wow-delay=".25s">
                  <div className="service-img">
                    <img src={BorewellPumpservice} alt="" />
                    <div className="service-icon">
                      <i className="fa-solid fa-screwdriver" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">
                      <a >Repairing Service</a>
                    </h3>
                    <p className="service-text">
                      Mansi Engineering provides expert rebaring services to strengthen concrete structures effectively.
                    </p>
                    <div className="service-arrow">
                      <Link to="/repairing-services" className="theme-btn text-white" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                        <i className="fas fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
        {/* service-area */}


        {/* team-area */}
        <div className="team-area pt-50 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="site-heading text-center">
                  <span className="site-title-tagline">
                    <i className="far fa-lightbulb-on" />  Our Products
                  </span>

                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="team-img">
                    <img src={submersible} style={{ height: '300px' }} alt="thumb" />
                  </div>

                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <a >Dewatering Pumps</a>
                      </h5>
                      <Link 
                        to="/dewatering-pump" 
                        className="theme-btn" 
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Read More
                        <i className="fas fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".50s">
                  <div className="team-img">
                    <img src={waterpump} style={{ height: '300px' }} alt="thumb" />
                  </div>

                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <a >Water Pumps</a>
                      </h5>
                      <Link to="/water-pump" className="theme-btn" onClick={() => window.scrollTo(0, 0)} >
                        Read More
                        <i className="fas fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay=".75s">
                  <div className="team-img">
                    <img src={pump} alt="thumb" />
                  </div>

                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <a >Booster Pump</a>
                      </h5>
                      <Link to="/booster-pump" className="theme-btn" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                        <i className="fas fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="team-item wow fadeInUp" data-wow-delay="1s">
                  <div className="team-img ">
                    <img className="bg-secondary" src={borewellpump} style={{ height: '300px' }} alt="thumb" />
                  </div>

                  <div className="team-content">
                    <div className="team-bio">
                      <h5>
                        <a >Borewell Pump</a>
                      </h5>
                      <Link to="/borewell-pump" className="theme-btn" onClick={() => window.scrollTo(0, 0)}>
                        Read More
                        <i className="fas fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team-area end */}



        {/* counter area */}
        <div className="counter-area pt-50 pb-50 mb-90" ref={counterRef}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={project} alt="" />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to={500}
                      data-speed={3000}
                    >
                      500
                    </span>
                    <h6 className="title">+ Projects Done</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={review} alt="" />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to={900}
                      data-speed={3000}
                    >
                      900
                    </span>
                    <h6 className="title">+ Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={worker} alt="" />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to={1500}
                      data-speed={3000}
                    >
                      1500
                    </span>
                    <h6 className="title">+ Experienced Staff</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon">
                    <img src={guarantee} alt="" />
                  </div>
                  <div>
                    <span
                      className="counter"
                      data-count="+"
                      data-to={30}
                      data-speed={3000}
                    >
                      30
                    </span>
                    <h6 className="title">+ Win Awards</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* counter area end */}




       {/* choose-area */}
<div className="choose-area bg">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="choose-img" data-aos="fade-left" data-aos-delay="250" data-aos-duration="3000">
          <img src={choose} style={{ height: '650px' }} alt="" />
         
        </div>
      </div>
      <div className="col-lg-6">
        <div className="choose-content" data-aos="fade-up" data-aos-delay="250" data-aos-duration="3000">
          <div className="site-heading mb-3">
            <span className="site-title-tagline">
              <i className="far fa-lightbulb-on" /> Why Choose Us
            </span>
            <h2 className="site-title">
              We Provide High <span>Quality Services</span> For You
            </h2>
          </div>

          <div className="choose-wrapper">
            <div className="choose-item">
              <div className="choose-icon">
                <i className="fa-solid fa-screwdriver-wrench" />
              </div>
              <div className="choose-item-content">
                <h4>Extensive Pump Fleet</h4>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">
                <i className="fa-solid fa-user" />
              </div>
              <div className="choose-item-content">
                <h4>Expert Guidance</h4>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">
                <i className="fa-solid fa-chart-line" />
              </div>
              <div className="choose-item-content">
                <h4>Reliable Performance</h4>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">
                <i className="fa-solid fa-truck-fast" />
              </div>
              <div className="choose-item-content">
                <h4>On time Delivery</h4>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">
                <i className="fa-solid fa-wrench" />
              </div>
              <div className="choose-item-content">
                <h4>Cost-Effective Solutions</h4>
              </div>
            </div>

            <div className="choose-item">
              <div className="choose-icon">
                <i className="fa-solid fa-screwdriver" />
              </div>
              <div className="choose-item-content">
                <h4>Exceptional Customer Support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* choose-area end */}
















     {/* faq area */}
<div className="faq-area py-120">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="faq-right" data-aos="fade-left" data-aos-delay="250" data-aos-duration="3000">
          <div className="site-heading mb-3">
            <span className="site-title-tagline justify-content-start">
              <i className="far fa-lightbulb-on" /> Faq's
            </span>
            <h2 className="site-title my-3">
              General <span>frequently</span> asked questions
            </h2>
          </div>
          <p className="mb-3">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even.
          </p>
          <div className="faq-img card">
            <img src={pump13} alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="accordion" data-aos="fade-up" data-aos-delay="250" data-aos-duration="3000" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span>
                  <i className="far fa-question" />
                </span>{" "}
                What sets Mansi Engineering & Electricals apart from other pump manufacturers?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Mansi Engineering & Electricals stands out due to its cutting-edge technology, commitment to quality, and extensive service network.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <span>
                  <i className="far fa-question" />
                </span>{" "}
                Do Mansi Engineering & Electricals's pumps require frequent maintenance?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                While the pumps are durable and low-maintenance, regular servicing is recommended to ensure optimal performance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <span>
                  <i className="far fa-question" />
                </span>{" "}
                Does Mansi Engineering & Electricals offer customized pump solutions for specific needs?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, Mansi Engineering & Electricals is known for its ability to provide personalized pump solutions based on customer requirements.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <span>
                  <i className="far fa-question" />
                </span>{" "}
                Does Mansi Engineering & Electricals offer installation services outside of Pune?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Yes, Mansi Engineering & Electricals provides installation services across various locations, ensuring their customers receive expert assistance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* faq area end */}




        <Footer />
      </main>
    </>

  )
}

export default Home