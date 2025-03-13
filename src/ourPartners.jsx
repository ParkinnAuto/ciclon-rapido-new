import React from "react";
import "./ourPartner.css";
import Menu from "./Menu";
import Footer from "./Footer";

function OurPartners() {
  // Array of partner images
  const partnerImages = [
    "src/assets/ourPartners/ourPartner1.png",
    "src/assets/ourPartners/ourPartner2.png",
    "src/assets/ourPartners/ourPartner3.png",
    "src/assets/ourPartners/ourPartner4.png",
    "src/assets/ourPartners/ourPartner5.jpg",
    "src/assets/ourPartners/ourPartner6.png",
    "src/assets/ourPartners/ourPartner7.png",
    "src/assets/ourPartners/ourPartner8.png",
  ];

  return (
    <>
      <Menu />

      <section className="our-partners-section container">
        <h1 className="our-partners-title">Our Partners</h1>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="our-partners-grid">
          {partnerImages.map((image, index) => (
            <div className="our-partners-box" key={index}>
              <img src={image} alt={`Partner ${index + 1}`} className="our-partners-image" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OurPartners;