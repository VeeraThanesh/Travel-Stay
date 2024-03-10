import React, { useEffect } from "react";
import "./About.css";

// Import Images
import mountain from "../../Assets/mountain.png";
import hiking from "../../Assets/hiking.png";
import customer from "../../Assets/customer.png";

// Import Video
import video from "../../Assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">Why Hikings?</h2>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={mountain} alt="Mountain" />
            <h3>100+ Mountains</h3>
            <p>
              Mountains stand tall, inviting adventurers with their majestic
              beauty and untamed allure,promising a journey of exploration and
              resilience.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={hiking} alt="Hiking" />
            <h3>1000+ Hikings</h3>
            <p>
              Hiking is a great way to enjoy nature, get some excercise and
              clear your mind. Just put on comfy shoes, grab water and explore
              outdoor trails for a refreshing experience.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={customer} alt="Customer" />
            <h3>2000+ Customer</h3>
            <p>
              Customers drive businesses. By meeting their needs and providing
              excellent service, a positive customer experience is created.
              Happy Customers lead to loyalty.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="cardText"
            >
              <h2>Wondeful House Experience in there!</h2>
              <p>
                The Adventure subranking is based on an equally weighted average
                of scores from five country
              </p>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="cardVideo"
            >
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
