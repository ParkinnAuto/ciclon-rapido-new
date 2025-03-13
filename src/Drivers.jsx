import React from "react";
import "./Drivers.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Drivers() {
  return (
    <>
      <Menu />

      {/* FIRST DRIVER */}
      <div class="container col-xxl-10 px-6 py-6 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* flex-lg-row-reverse ทำให้รูปภาพที่ต้องซ้ายสลับไปอยู่ขวา */}
          <div class="col-10 col-sm-8 col-lg-6 driverImage">
            <img
              src="/pictures/mainDriver1.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="mainDriver1"
              width="700"
              height="500"
            />
          </div>
          <div div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              NOVIDER
            </h1>
            <p class="lead">
              Gran Turismo 7 stats : 50 races
              <br></br>- Driver rating A<br></br>- Sportmanship rating S
              <br></br>- 20x Pole Positions
              <br></br>- 21 Race Wins
              <br></br>- 41 Clean races
            </p>
              <br></br>
            <span class="badge rounded-pill text-bg-primary fs-5">
              Main Driver
            </span>
          </div>
        </div>
        <hr></hr>
      </div>

      {/* SECOND DRIVER */}

      <div class="container col-xxl-10 px-6 py-6 ">
        <div class="row align-items-center g-5 py-5">
          <div class="col-lg-6 driverImage">
            <img
              src="/pictures/mainDriver2.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="mainDriver2"
              width="700"
              height="500"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">SUNS</h1>
            <p class="lead">
              Gran Turismo 7 stats : 50 races
              <br></br>- Driver rating A<br></br>- Sportmanship rating S
              <br></br>- 20x Pole Positions
              <br></br>- 21 Race Wins
              <br></br>- 41 Clean races
            </p>
              <br></br>
            <span class="badge rounded-pill text-bg-primary fs-5 ">
              Main Driver
            </span>
          </div>
        </div>
        <hr></hr>
      </div>

      {/* THIRD DRIVER */}
      <div class="container col-xxl-10 px-6 py-6 ">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6 driverImage">
            <img
              src="/pictures/reserveDriver1.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="reserveDriver1"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Ynasnsd
            </h1>
            <p class="lead">
              Gran Turismo 7 stats : 50 races 
              <br></br>
              - Driver rating B 
              <br></br>
              - Sportmanship rating S 
              <br></br>
              - 10x Pole Positions 
              <br></br>
              - 19 Race Wins 
              <br></br>
              - 47 Clean races
            </p>
              <br></br>
            <span class="badge rounded-pill text-bg-success fs-5">
              Reserve Driver
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Drivers;
