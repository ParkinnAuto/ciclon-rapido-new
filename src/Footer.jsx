import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/*FOOTER*/}
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 border-top">
          <div class="col mb-3">
            <p class="text-body-secondary">© Ciclón Rápido 2025</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5 className="nav-item">
              <a href="/Drivers" class="nav-link p-0 text-head">
                OUR TEAM
              </a>
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/Drivers" class="nav-link p-0 text-body-secondary">
                  Drivers
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/Cars" class="nav-link p-0 text-body-secondary">
                  Cars
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="/Archievement"
                  class="nav-link p-0 text-body-secondary"
                >
                  Achievement
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="nav-item">
              <a href="/Gallery" class="nav-link p-0 text-head">
                GALLERY
              </a>
            </h5>
          </div>

          <div class="col mb-3">
            <h5 className="nav-item">
              <a href="/CarDesign" class="nav-link p-0 text-head">
                DESIGN
              </a>
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/CarDesign" class="nav-link p-0 text-body-secondary">
                  Cars Design
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/Stationery" class="nav-link p-0 text-body-secondary">
                  Staionery
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/Dress" class="nav-link p-0 text-body-secondary">
                  Dress
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 className="nav-item">
              <a href="/ourHistory" class="nav-link p-0 text-head">
                ABOUT US
              </a>
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="/ourHistory" class="nav-link p-0 text-body-secondary">
                  Our History
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/ourPartners" class="nav-link p-0 text-body-secondary">
                  Our Partners
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="/ContactUs" class="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
