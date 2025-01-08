import React from 'react'
import Header from './Header'
import Footer from './Footer'

import { Link } from 'react-router-dom'
import breadcrumb from '../assets/img/breadcrumb/01.jpg'
import contact from '../assets/img/contact.jpg'

const Contact = () => {
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
      <h2 className="breadcrumb-title">Contact Us</h2>
      <ul className="breadcrumb-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active"><i className="fa-solid fa-angles-right me-1"></i>Contact Us</li>
      </ul>
    </div>
  </div>
  {/* breadcrumb end */}
  {/* contact area */}
  <div className="contact-area py-120">
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fa fa-map-marker-alt" />
              </div>
              <div className="contact-info-content">
                <h5>Address</h5>
                <p>486, Kasba Peth Rd, Phadke Haud,
                Kasba Peth, Pune, Maharashtra 411002</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fa fa-phone-alt" />
              </div>
              <div className="contact-info-content">
                <h5>Call Us</h5>
                <p>+91 84828 58686</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fa fa-envelope" />
              </div>
              <div className="contact-info-content">
                <h5>Email Us</h5>
                <p>
                sales@mansiengg.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-info">
              <div className="contact-info-icon">
                <i className="fa-regular fa-clock" />
              </div>
              <div className="contact-info-content">
                <h5>Open Time</h5>
                <p>Mon - Sat (10.00AM - 05.30PM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-img">
              <img src={contact} alt="" />
            </div>
          </div>
          <div className="col-lg-7 align-self-center">
            <div className="contact-form">
              <div className="contact-form-header">
                <h2>Get In Touch</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page randomised words which don't
                  look even slightly when looking at its layout.{" "}
                </p>
              </div>
              <form
                method="post"
                action="https://live.themewild.com/electrow/assets/php/contact.php"
                id="contact-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Your Subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Write Your Message"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="theme-btn">
                  Send Message <i className="far fa-paper-plane" />
                </button>
                <div className="col-md-12 mt-3">
                  <div className="form-messege text-success" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end contact area */}
  {/* map */}
  <div className="contact-map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.733837404239!2d73.85420221489242!3d18.520430287411146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c03db9b13f27%3A0x8ad25c5fa0dc5539!2s486%2C%20Kasba%20Peth%20Rd%2C%20Phadke%20Haud%2C%20Kasba%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
    />
</div>

</main>


  <Footer/>
  </>

  )
}

export default Contact