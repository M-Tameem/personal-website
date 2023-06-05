import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/Testimonial";
import Services from "../service/Service";
import Awards from "../award/Awards";

const AboutTwo = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/headshot-me.png" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>AI enthusiast</p>
                  <h3>Muhammad-Tameem Mughal</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a 17 year old student working on learning and using emerging technologies such as
                    AI and Blockchain. I'm particularly interested in the intersection of AI and Biology, and 
                    I worked on creating a drug toxicity predictive model for the company BenchSci, and theorized the use of NLP to optimize transcription factors for enzymes. 
                    For Blockchain I created a prototype of a supply-chain tracking system for charity's to be more transparent. 
                    I also consulted with Interac's Strategic Foresight team on the possible effects of Blockchain on banking in the next 10 years.
                  </p>
                  <p>
                    I'm currently working on two projects. I'm working on founding MicroLab -
                    an initiative focused on using microfluidic chips to make medical diagnostics
                    more affordable and accessible. Secondly, I'm exploring QML and working on
                    using a QSVM (Quantum-enhanced Support Vector Machine) for analyzing the
                    interactions between ligands and enzymes.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                      <li>
                          <label>Name: </label>
                          <span>Muhammad-Tameem Mughal</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>17 years</span>
                        </li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                      <li>
                          <label>Area: </label>
                          <span>Toronto, Canada</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>mtameem.mughal@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
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
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

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
          <h3>Achievements.</h3>

          </div>
          <Awards />
          {/* End Awards */}

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
            <h3>Companies I've worked with</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
