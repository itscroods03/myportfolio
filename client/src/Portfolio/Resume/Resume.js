import React, { useState, useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML/HTML5", ratingPercentage: 100 },
    { skill: "CSS/SCSS/Bootstraps/Tailwind", ratingPercentage: 80 },
    { skill: "Gitbash/Github", ratingPercentage: 80 },
    { skill: "JavaScript/Jquery", ratingPercentage: 50 },
    { skill: "Wordpress/MySQL", ratingPercentage: 70 },
    { skill: "React JS/VueJS", ratingPercentage: 40 },
    { skill: "PHP/Laravel", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Multivendor Ecommerce ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  PHP, Laravel, node, composer, Bootstrap, Mysql",
    },
    {
        title: "School Management System ",
        duration: { fromDate: "2019", toDate: "2021" },
        description:
          "A school management system application for the management of whole school administration",
        subHeading:
          "Technologies Used:  PHP, Laravel, node, composer, Bootstrap, Mysql",
      },
    
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Glory English Boarding School, Birtabazar"}
        subHeading={"School Leaving Certificate Level(Upto Class 10)"}
      />

      <ResumeHeading
       heading={"Gomendra Multiple Campus, Birtamode"}
       subHeading={"Higher Secondary Level(Upto Class 12)"}
      />
      <ResumeHeading
        heading={"Gomendra Multiple Campus"}
        subHeading={"Bachelor in Computer Application(Currently running)"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
        <ResumeHeading
          heading={"Sashwat Express Travel Agency"}
          subHeading={"Airlines Ticket booking and ordering."}
          fromDate={"2016"}
          toDate={"2017"}
        />
         <ResumeHeading
          heading={"Milan Mobile Center"}
          subHeading={"Mobiles and Smartphones sales and repairing."}
          fromDate={"2017"}
          toDate={"2018"}
        />
         <ResumeHeading
          heading={"Index IT Solution"}
          subHeading={"An IT company for web and desktop application development."}
          fromDate={"2018"}
          toDate={"2020"}
        />

    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Reading and Writing"
        description="Apart from being a tech enthusiast and a coder, i also love to read books and write different stuffs."
      />
      <ResumeHeading
        heading="Music and Play Guitar"
        description="I also love to listen songs and sing songs sometimes playing a guitar because I believe music helps to calm the stress and gives peace out of it."
      />
      <ResumeHeading
        heading="Games and Sports"
        description="I also have lots of interest in outdoor activities and sports like quiz, chess, football, volleyball, cricket, swimming, etc. cause those stuffs helps me to keep fit and healthy in this busy life."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div /* className="bullet-icons" */></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;