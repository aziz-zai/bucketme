import React from "react";
import background from "../media/background.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="homeBackground">
          <img className="homeVideo" src={background}></img>
        </div>
        <div className="homeContent">
          <div className="homeTitle">bucket.me</div>
          <p className="homeText">
            You are the dreamer. We are the manifestation.
          </p>
          <div className="btnContainer">
            <button className="homeBtn">&nbsp; Create Your Dreams</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
