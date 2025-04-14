import React from "react";
import HomeLandingContainer from "./HomeLandingContainer";
import CardBelowHome from "./CardBelowHome";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";
import "../../Styles/Home.css";

const Home = (props) => {
  return (
    <div className="home-page-wrapper">
      <HomeLandingContainer description={props.description} />
      <CardBelowHome />
      <div className="home-statistics-banner">
        <div className="stat-item">
          <span className="stat-number">1200+</span>
          <span className="stat-label">Pets Adopted</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Lost Pets Found</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5000+</span>
          <span className="stat-label">Happy Families</span>
        </div>
      </div>
      <PlanningToAdoptAPet />
      <div className="testimonials-section">
        <h2>Success Stories</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="/Assets/testimonial1.jpg" alt="Happy pet owner" />
            </div>
            <p className="testimonial-text">"Thanks to FetchMeHome, I found my perfect furry companion. The process was seamless and supportive!"</p>
            <p className="testimonial-author">- Sarah J.</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="/Assets/testimonial2.jpg" alt="Happy pet owner" />
            </div>
            <p className="testimonial-text">"After weeks of searching, FetchMeHome helped me reunite with my lost cat. I'm forever grateful!"</p>
            <p className="testimonial-author">- Michael T.</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src="/Assets/testimonial3.jpg" alt="Happy pet owner" />
            </div>
            <p className="testimonial-text">"The personality test matched me with the perfect dog for my lifestyle. Couldn't be happier!"</p>
            <p className="testimonial-author">- Emily R.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;