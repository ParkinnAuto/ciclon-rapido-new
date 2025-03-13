import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <>
      <header className="bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-lg-start pt-3 pb-3">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="nav-item">
                <a href="/" className="nav-link px-3 text-secondary fs-6">
                  HOME
                </a>
              </li>

              <li className="nav-item">
                <a href="/Drivers" className="nav-link px-2 text-white fs-6">
                  OUR TEAM
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/Drivers" className="submenu-link">
                      Drivers
                    </a>
                  </li>
                  <li>
                    <a href="/Cars" className="submenu-link">
                      Cars
                    </a>
                  </li>
                  <li>
                    <a href="/Archievement" className="submenu-link">
                      Achievement
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/Gallery" className="nav-link px-2 text-white fs-6">
                  GALLERY
                </a>
              </li>

              <li className="nav-item">
                <a href="/CarDesign" className="nav-link px-2 text-white fs-6">
                  DESIGN
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/CarDesign" className="submenu-link">
                      Cars Design
                    </a>
                  </li>
                  <li>
                    <a href="/Stationery" className="submenu-link">
                      Stationery
                    </a>
                  </li>
                  <li>
                    <a href="/Dress" className="submenu-link">
                      Dress
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/ourHistory" className="nav-link px-2 text-white fs-6">
                  ABOUT US
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/ourHistory" className="submenu-link">
                      Our History
                    </a>
                  </li>
                  <li>
                    <a href="/ourPartners" className="submenu-link">
                      Our Partners
                    </a>
                  </li>
                  <li>
                    <a href="/ContactUs" className="submenu-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default Menu;
