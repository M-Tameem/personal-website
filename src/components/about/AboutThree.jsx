import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const AboutThree = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me-3.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Ux/Ui Designer</p>
                  <h3>John Smith</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
                  </p>
                  <p>
                    I'm a Freelancer Front-end Developer with over 3 years of
                    experience. I'm from San Francisco. I code and create web
                    elements for amazing people around the world. I like work
                    with new people. New people new Experiences.
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
                        <li>
                          <label>Area: </label>
                          <span>Toronto, Canada</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
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
            <h3>Gallery.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutThree;
