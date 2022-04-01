import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "I'm currently a BCA/IT student and a web application developer with background knowledge of various html, css and javascript components including frontend frameworks like VueJS, ReactJS, etc. with strong background knowledge of PHP framework like Laravel for a full web application development.",
    highlights: {
      heading: "Here are my few highlights:",
      bullets: [
        "Interactive and responsive webpage design and development.",
        "Knowledge of React and VueJS reusable components",
        "Knowledge of PHP/Laravel for backend web application development",
        "Familiar with mysql as database and git for managing projects.",
      ],
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn btn-primary mr-4"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                  Hire Me
                </button>
              <a href="#">
                <button className="btn btn-success">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
