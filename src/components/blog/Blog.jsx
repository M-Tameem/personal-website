import React from "react";

const News = () => {
  const articles = [
    {
      title: "How we once lost $500 million in donations, and using blockchain to prevent it from happening again",
      subtitle: "Working through what flaws can exist in current charity donations and how Blockchain could be used to fix them - 2023",
      url: "https://medium.com/@mtameem.mughal/how-we-once-lost-500-million-in-donations-and-using-blockchain-to-prevent-it-from-happening-8dac10123057",
      image: "img/blog/blog-1.jpg",
    },
    {
      title: "Revitalizing Deforested Ecosystems",
      subtitle: "Exploring CRISPR and AI to resolve deforestation - 2022",
      url: "https://medium.com/@hailey.kim/revitalizing-deforested-ecosystems-d218c5933fe8",
      image: "img/blog/blog-4.jpg",
    },
    {
      title: "I Generate, You... Discriminate?",
      subtitle: "Explaining GANs and my recent project in a more intuitive manner - 2021",
      url: "https://medium.com/@mtameem.mughal/i-generate-you-discriminate-8794fed3000d",
      image: "img/blog/blog-2.jpg",
    },
    {
      title: "Reinforcement Learning: A Live-Action Experience",
      subtitle: "Explaining reinforcement learning from an intuitive point of view - 2021",
      url: "https://medium.com/@mtameem.mughal/reinforcement-learning-a-live-action-experience-55aa94418ca8",
      image: "img/blog/blog-3.jpg",
    },
  ];

  return (
    <div className="row">
      {articles.map((article, index) => (
        <div key={index} className="col-md-6 m-15px-tb">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="blog-grid">
              <div className="blog-img">
                <img src={article.image} alt="blog post" />
              </div>
              <div className="blog-info">
                <h6>{article.title}</h6>
                <div className="blog-info">
                <h16>{article.subtitle}</h16>
                </div>
            </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
