import React from "react";
import "./ContactUs.css";
import Menu from "./Menu";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
      <Menu />

      <section className="contactus-section py-3 py-md-5 py-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-11 col-md-10 col-lg-8">
              <h3 className="contactus-subtitle fs-5 mb-2 text-secondary text-uppercase">Contact</h3>
              <h2 className="contactus-title display-5 mb-4 mb-md-5 mb-xl-8">
                We're always on the lookout to work with new clients. Please get
                in touch in one of the following ways.
              </h2>
            </div>
          </div>
        </div>

        <div className="container px-4 py-5" id="contactus-icons">
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <div className="contactus-icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#toggles2"></use>
                </svg>
              </div>
              <div>
                <h3 className="contactus-icon-title fs-2 text-body-emphasis">Gmail</h3>
                <p className="contactus-icon-text">ciclonrapido@gmail.com</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="contactus-icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#cpu-fill"></use>
                </svg>
              </div>
              <div>
                <h3 className="contactus-icon-title fs-2 text-body-emphasis">YouTube</h3>
                <p className="contactus-icon-text">Rápidoracing</p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <div className="contactus-icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg className="bi" width="1em" height="1em">
                  <use xlinkHref="#tools"></use>
                </svg>
              </div>
              <div>
                <h3 className="contactus-icon-title fs-2 text-body-emphasis">Instagram</h3>
                <a className="contactus-icon-link" href="https://www.instagram.com/ciclonrapido/" target="_blank" rel="noopener noreferrer">
                  ciclonrapido
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactUs;