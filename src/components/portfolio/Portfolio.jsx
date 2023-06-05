import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "AI/AI-Healthtech", "Blockchain", "Consultant Decks", "Hackathon Projects"];

const portfolioItems = [
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "Cibastra Project",
    subTitle: "NASA Space Apps Hackathon Challenge 2021 - Global Nominee",
    alterText: "Cibastra Project",
    portfolioLink: "https://2021.spaceappschallenge.org/challenges/statements/have-seeds-will-travel/teams/cibastra/project",
    category: ["All", "Hackathon Projects"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "SMART Project",
    subTitle: "AI project developed alongside BenchSci. Aims to predict the toxicity of drugs pre-clinical trial using a custom-built AI model",
    alterText: "SMART Project",
    portfolioLink: "https://m-tameem.github.io/SMART/",
    category: ["All", "AI/AI-Healthtech"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "Decisivity",
    subTitle: "Prototype WebApp to track charity donations on the Ethereum network",
    alterText: "Decisivity",
    portfolioLink: "https://decisivity.mtameemmughal.repl.co/",
    category: ["All", "Blockchain"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "CAE TKS Project",
    subTitle: "Consulting CAE on expanding in the field of Robotic Surgery with their existing simulation solutions",
    alterText: "CAE TKS Project",
    portfolioLink: "https://docs.google.com/presentation/d/10G6UL1nYKYAqpOyCpiN7-9fYL7ypasAm7bPkZpYXWLA/edit?usp=sharing.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FMQEVykgWy1eKUbwOz42NoAokWan1%2FIKEA%20TKS%20MuhammadTameem%2C%20Amory%2C%20Alana%2C%20Araddhya%2C%20Oran.pdf?alt=media&token=57eac6e7-7d0a-44a6-ab6e-88837131ac01",
    category: ["All", "Consultant Decks"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "IKEA TKS Project",
    subTitle: "Consulting IKEA on expanding to Urban areas",
    alterText: "IKEA TKS Project",
    portfolioLink: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FMQEVykgWy1eKUbwOz42NoAokWan1%2FIKEA%20TKS%20MuhammadTameem%2C%20Amory%2C%20Alana%2C%20Araddhya%2C%20Oran.pdf?alt=media&token=57eac6e7-7d0a-44a6-ab6e-88837131ac01",
    category: ["All", "Consultant Decks"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "Spruce Home",
    subTitle: "Moonshot project using AI and CRISPR to develop a long-term deforestation solution",
    alterText: "Spruce Home",
    portfolioLink: "https://m-tameem.github.io/Spruce/Spruce-Home",
    category: ["All", "AI/AI-Healthtech"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "ComputeAway",
    subTitle: "Using Blockchain to provide eco-friendly compute resources",
    alterText: "Blockchain Presentation",
    portfolioLink: "https://docs.google.com/presentation/d/10G6UL1nYKYAqpOyCpiN7-9fYL7ypasAm7bPkZpYXWLA/edit#slide=id.g21e3a1fdeb0_2_26",
    category: ["All", "Blockchain"],
  },{
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "NeuroVoice Project",
    subTitle: "Hackathon Project",
    alterText: "NeuroVoice Project",
    portfolioLink: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FMQEVykgWy1eKUbwOz42NoAokWan1%2FNeuroVoice%20Final%20Draft.pdf?alt=media&token=1c618f4a-131a-49a0-9c6d-d92f2c5fa9ae",
    category: ["All", "Hackathon Projects"],
  },
  {
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "Heli.AI Project",
    subTitle: "Hackathon Project",
    alterText: "Heli.AI Project",
    portfolioLink: "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FMQEVykgWy1eKUbwOz42NoAokWan1%2Fheli.ai.pdf?alt=media&token=4fdd2ebb-5b20-4a75-bc39-7881f8cd28da",
    category: ["All", "Hackathon Projects"],
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabList.map((tab, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {portfolioItems
                    .filter((item) => item.category.includes(tab))
                    .map((val, j) => (
                      <div className="portfolio-box-01" key={j}>
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a
                                href={val.portfolioLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          <Item
                            original={val.img}
                            thumbnail={val.img}
                            width={val.width}
                            height={val.height}
                          >
                            {({ ref, open }) => (
                              <div className="gallery-link">
                                <img
                                  src={val.img}
                                  alt="Childhood"
                                  role="button"
                                  ref={ref}
                                  onClick={open}
                                />
                              </div>
                            )}
                          </Item>

                          <a
                            className="portfolio-icon"
                            href={val.portfolioLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FiLink />
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default Portfolio;
