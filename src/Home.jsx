import React, { useState } from "react";
import "./Home.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pictures/image2.jpg",
    "/pictures/image3.jpg",
    "/pictures/image4.jpg",
    "/pictures/image5.jpg",
    "/pictures/image6.jpg",
    "/carDesign/carDesign2.webp",
  ];

  // Normal function to handle image click
  function handleImageClick(image) {
    setSelectedImage(image);
  }

  // Normal function to handle closing the image
  function handleClose() {
    setSelectedImage(null);
  }

  return (
    <>
      <Menu />

      {/* HOME VIDEO, TEXT CENTER */}
      <div className="home-cover-container">
      {/*}  <video autoPlay loop muted>
          <source src="/pictures/194ee0157ff38-master_playlist.mp4" />
        </video>*/}
        <div className="home-overlay">
          <h1 className="display-3">
            Welcome to{" "}
            <i>
              <b>Ciclón Rápido</b>
            </i>
          </h1>
          <p className="lead mb-3">
            Discover amazing content and connect with us.
          </p>
          <a href="/ContactUS" className="btn btn-dark btn-lg">
            Get Started
          </a>
        </div>
      </div>

      <br />

      {/* ALBUM EXAMPLES */}
      <section className="text-center container">
        <hr />
        <div className="row py-lg-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">GALLERY EXAMPLES</h1>
            <p className="lead text-body-secondary">
              Discover our collection of motorsport excellence. Each image showcases the perfect blend of design and performance, reflecting our commitment to speed and precision.
            </p>
          </div>
        </div>
      </section>

      {/* ALBUM EXAMPLES PICTURES */}
      <div className="container mt-2 mb-5">
        <div className="row">
          {images.map((image, index) => (
            <div className="col-sm-4 mb-3 mb-sm-0" key={index}>
              <div className="home-card">
                <div className="home-card-body">
                  <img
                    src={image}
                    className="home-card-img-top"
                    alt={`image ${index + 2}`}
                    onClick={() => handleImageClick(image)}
                    style={{ cursor: "pointer" }}
                  />
                  <b></b>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
        <br />
        <hr />
      </div>

      {/* Display the selected image in a larger view */}
      {selectedImage && (
        <div className="home-overlayExamples" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}

      {/* OUR SPONSOR */}
      <section className="text-center container">
        <div className="row py-lg-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">OUR PARTNER</h1>
          </div>
        </div>
      </section>

      {/* OUR SPONSOR PICTURE */}
      <div className="home-ourSponsor">
        <img
          src="/pictures/sponsor porsche.jpg"
          alt="sponsor"
          className="home-cover-image1"
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;