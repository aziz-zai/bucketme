import React from "react";
import { BsCardList } from "react-icons/bs";
import background from "../../media/background.jpg";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="heroContainer">
        <div className="heroBackground">
          <img className="heroVideo" src={background}></img>
        </div>
        <div className="heroContent">
          <div className="heroTitle">bucket.me</div>
          <p className="heroText">
            You are the dreamer. We are the manifestation.
          </p>
          <div className="btnContainer">
            <button className="heroBtn">
              <BsCardList />
              &nbsp; Create Your Dreams
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
