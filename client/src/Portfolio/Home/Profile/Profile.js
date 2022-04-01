/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../Utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="cols" align="center">
            <div className="cols-icons" align="center">
              <a href="https://www.facebook.com/itscroods03">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/itscroods03">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com/itscroods03">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.github.com/itscroods03">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name" align="center">
            <span className="primary-text">
              {""}
              Hey, it's me <span className="highlighted-text">Sandesh.</span>
            </span>
          </div>
          <div className="profile-details-role" align="center">
            <h1>
              {""}
              <Typical
                loop={Infinity}
                steps={[
                  "An enthusiastic programmer.",
                  1000,
                  "A Web Application Developer.",
                  1000,
                  "A Cyber Security Researcher.",
                  1000,
                  "A Computer Geek.",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline" align="center">
              A passionate frontend and backend web developer.
            </span>
          </div>
          <div className="profile-option">
            <button
              className="btn btn-primary mr-4"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="#">
              <button className="btn btn-success">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
