import React, { useState } from "react";
import "./Archievement.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Archievement() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    
  ];

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to handle closing the image
  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Menu />
      <main>
        <div className="achievements-cover-container">
          <img
            src="src/assets/pictures/home image1.jpg"
            alt="Achievement First Image"
            className="achievements-first-pic"
          />
          <div className="achievements-overlay1">
            <h1 className="display-3">OUR ACHIEVEMENTS</h1>
            <p className="lead mb-3">Victory in our hands.</p>
          </div>
        </div>

        <div className="achievements-album py-5 bg-body-tertiary">
          <div className="container">
            <hr />
            <br />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
              {images.map((image, index) => (
                <div className="col" key={index}>
                  <div className="achievements-card shadow-sm">
                    <img
                      src={image.src}
                      alt={`Achievement ${index + 1}`}
                      className="achievements-card-img-top"
                      onClick={() => handleImageClick(image)}
                      style={{ cursor: "pointer" }} // Change cursor on hover
                    />
                    <div className="card-body">
                      <p className="card-text">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Display the selected image in a larger view */}
        {selectedImage && (
          <div className="achievements-overlayExamples" onClick={handleClose}>
            <img src={selectedImage.src} alt="Selected" className="achievements-selected-image" />
            <p className="achievements-image-description">{selectedImage.description}</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Archievement;