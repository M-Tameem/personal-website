import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Founder`,
    jobType: `MicroLab | Remote`,
    jobDuration: `March 2023 - Present`,
    timeDuraton: `Part-time`,
    compnayName: "MicroLab",
    jobDescription: `Founding a startup aiming to use microfluidic chips to make more accessible and affordable medical diagnostic tools and testing kits for rural communities.`,
  },
  {
    jobPosition: `Student Consultant`,
    jobType: `CAE | Remote`,
    jobDuration: `Specific project dates`,
    timeDuraton: `Project Based`,
    compnayName: "CAE",
    jobDescription: `Selected to work alongside CAE as part of a student consulting project to discuss and pitch other industries and revenue avenues to their VP, Joe Armstrong.`,
  },
  {
    jobPosition: `Project Liasion`,
    jobType: `World Energy Ventures Inc | Toronto, Canada`,
    jobDuration: `Jun 2020 - Present`,
    timeDuraton: `Part-time`,
    compnayName: "World Energy Ventures Inc",
    jobDescription: `Working as a project liasion to the CEO of a renewable energy company. Responsibilities include oversight of project, technical assistance, drafting business emails, and maintaining schedules and fluid communication.`,
  },
  {
    jobPosition: `SEO and Marketing Intern`,
    jobType: `MEAT | Toronto, Canada`,
    jobDuration: `Jun 2019 - July 2020`,
    timeDuraton: `Part-time`,
    compnayName: "MEATWEV",
    jobDescription: "Worked as a marketing intern at a Halal lab-grown meat startup aiming to provide meat to the Muslim community in Toronto, Canada. Designed and integrated content for brochures, websites and other social media. Developed and designed booths for conventions."
  },
  {
    jobPosition: `Student Consultant`,
    jobType: `IKEA | Remote`,
    jobDuration: `Specific project dates`,
    timeDuraton: `Project Based`,
    compnayName: "IKEA Canada",
    jobDescription: `Worked alongside IKEA for a student consulting project to discuss and pitch ideas to IKEA Canada executives for their expansion into more urban areas and reducing carbon footprint.`,
  }
];


const educatonContent = [
  {
    passingYear: "Developing cheaper Syphillis testing kits",
    degreeTitle: "Microlab",
    instituteName: "Founder",
  },
  {
    passingYear: "Blockchain-based Donation Tracker",
    degreeTitle: "Decisivity",
    instituteName: "Personal project",
  },
  {
    passingYear: "AI Classifier for predicting drug toxicity",
    degreeTitle: "SMART",
    instituteName: "Team project | Lead AI developer",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div className="resume-row" key={i}>
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
              // End resume-row
            ))}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Significant Projects & Skills</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 m-15px-tb">
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div className="col-lg-7 ml-auto m-15px-tb">
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
