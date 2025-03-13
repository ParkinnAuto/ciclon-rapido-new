import React from "react";
import "./ourPartner.css";
import Menu from "./Menu";
import Footer from "./Footer";

function OurPartners() {
  // Array of partner images
  const partnerImages = [
    "public/ourPartners/ourPartner1.png",
    "public/ourPartners/ourPartner2.png",
    "public/ourPartners/ourPartner3.png",
    "public/ourPartners/ourPartner4.png",
    "public/ourPartners/ourPartner5.jpg",
    "public/ourPartners/ourPartner6.png",
    "public/ourPartners/ourPartner7.png",
    "public/ourPartners/ourPartner8.png",
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