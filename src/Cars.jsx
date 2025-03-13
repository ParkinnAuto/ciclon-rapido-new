import React from "react";
import "./Cars.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Cars() {
  return (
    <>
      <Menu />
      {/* FIRST CAR */}
      <div class="container col-xxl-10 px-4 py-5 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* flex-lg-row-reverse ทำให้รูปภาพที่ต้องซ้ายสลับไปอยู่ขวา */}
          <div class="col-10 col-sm-8 col-lg-6 driverImage">
            <img
              src="/cars/Porsche911.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Prosche911"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Porsche 911 RSR
            </h1>
            <p class="cars-lead">
              Country: Germany
              <br></br>
              Race Program: FIA World Endurance Championship (WEC), IMSA
              WeatherTech SportsCar Championship, 24 Hours of Le Mans, and other
              endurance racing events
              <br></br>
              <br></br>
              The Porsche 911 RSR is a high-performance race car developed by
              Porsche for GT endurance racing. It is based on the Porsche 911
              but features a mid-engine layout for better balance and
              aerodynamics. 
              <br></br>
              <br></br>
              The car competes in the GTE/GTLM class and has
              achieved numerous victories in endurance racing, including at Le
              Mans, Sebring, and Daytona.
            </p>
            <span class="badge rounded-pill text-bg-primary fs-5">GT3 Car</span>
          </div>
        </div>
        <hr></hr>
      </div>

      {/* SECOND CAR */}

      <div class="container col-xxl-10 px-1 py-5">
        <div class="row align-items-center g-5 py-5">
          <div class="col-lg-6 driverImage">
            <img
              src="/cars/Ferrari458.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Ferrari458"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Ferrari 458 GT3
            </h1>
            <p class="cars-lead">
              Country: Italy Predecessor: Ferrari F430 GT3 Race Program: Various
              GT3 championships, including the Blancpain GT Series, FIA GT3
              European Championship, IMSA SportsCar Championship, and 24H Series
              <br></br>
              <br></br>
              The Ferrari 458 GT3 is a race-spec version of the Ferrari 458
              Italia, developed for GT3-class racing. It features a 4.5L
              naturally aspirated V8 engine, producing around 550 hp, with
              significant aerodynamic and suspension upgrades for track
              performance. 
              <br></br>
              <br></br>
              The car has been highly successful in endurance and
              sprint GT3 racing, competing against models from Porsche,
              Lamborghini, and Mercedes-AMG.
            </p>
            <span class="badge rounded-pill text-bg-primary fs-5 ">
              GT3 Car
            </span>
          </div>
        </div>
        <hr></hr>
      </div>

      {/* THIRD CAR */}
      <div class="container col-xxl-10 px-1 py-5 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6 driverImage">
            <img
              src="/cars/SuperFormula.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="SuperFormula"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              SF23 (SuperFormula Honda)
            </h1>
            <p class="cars-lead">
              Country: Japan
              <br></br>
              Predecessor: SF19
              <br></br>
              Race Program: Japanese Super Formula Championship (2023 season and
              beyond)
              <br></br>
              <br></br>
              The SF23 is a next-generation open-wheel race car used in the
              Super Formula series, Japan’s top single-seater racing category.
              It was developed by Dallara, featuring a lightweight chassis with
              improved aerodynamics and sustainability-focused technology. The
              car runs on a 2.0L turbocharged inline-4 engine, supplied by Honda
              (Mugen) or Toyota (TRD), producing around 550-600 hp. 
              
              <br></br>
              <br></br>
              The SF23 was introduced for the 2023 season, with a focus on eco-friendly
              innovations such as sustainable materials and carbon-neutral fuel,
              making it one of the most advanced open-wheel race cars outside of
              Formula 1.
            </p>
            <span class="badge rounded-pill text-bg-success fs-5">
              SuperFormula Car
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cars;
