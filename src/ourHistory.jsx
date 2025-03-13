import React from "react";
import "./ourHistory.css";
import Menu from "./Menu";
import Footer from "./Footer";

function OurHistory() {
  return (
    <>
      <Menu />
      {/* COVER PART */}
      <div className="ourHistory-cover-container">
        <img
          src="public/ourHistory/ourHistoryCover.jpg"
          alt="Our History Cover"
        />
        <div className="ourHistory-overlay">
          <h1 className="ourHistory-title display-3">Our History</h1>
        </div>
      </div>

      {/* FIRST PART */}
      <div className="ourHistory-container col-xxl-10 px-1 py-5">
        <div className="ourHistory-row row flex-lg-row-reverse align-items-center g-5 py-5">
          <hr></hr>
          <div className="ourHistory-col col-10 col-sm-8 col-lg-6 ourHistory-foundersImage">
            <img
              src="public/ourHistory/ourHistory1.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Founders Image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="ourHistory-col col-lg-6">
            <h1 className="ourHistory-title display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Our History
            </h1>
            <p className="ourHistory-history-lead">
              <br></br>
              Founded in 2024, our racing team emerged from a shared passion for
              speed, precision, and the thrill of competition. What began as a
              small group of enthusiasts has evolved into a formidable presence
              in the world of motorsport, competing at various prestigious
              events around the globe. 
              <br></br>
              <br></br>
              Over the years, we have cultivated a
              reputation for excellence, achieving numerous podium finishes and
              securing valuable partnerships that have fueled our growth. As we
              continue to push the boundaries of performance, we remain
              dedicated to fostering talent, embracing innovation, and inspiring
              the next generation of racers, all while striving for victory on
              the track.
            </p>
          </div>
        </div>
      </div>

      {/* SECOND PART */}
      <div className="ourHistory-container col-xxl-10 px-1 py-1">
        <div className="ourHistory-row row align-items-center g-5 py-5">
          <div className="ourHistory-col col-lg-6 ourHistory-foundersImage">
            <img
              src="public/ourHistory/ourHistory2.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Logo"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="ourHistory-col col-lg-6">
            <h1 className="ourHistory-title display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Early Years
            </h1>
            <p className="ourHistory-history-lead">
              In our early years, we focused on grassroots racing, participating
              in local events and honing our skills. Among our founders, "Parkin
              Arsanamanee" faced significant challenges in life. Struggling with
              personal loss, he found himself at a crossroads, unsure of his
              next steps.
              <br />
              <br />
              Recognizing his potential and determination, fellow founder Vinit
              Thongchaidamrongkul reached out to him with an invitation to
              create something extraordinary: Ciclón Rápido. This partnership
              not only reignited Parkin's passion for racing but also laid the
              foundation for a team built on resilience and camaraderie.
              Together, they embraced the challenges ahead, setting the stage
              for a remarkable journey in the world of motorsport.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default OurHistory;
