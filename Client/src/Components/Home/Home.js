import React from "react";
import { Link } from "react-router-dom";
import '/Users/yash/Downloads/FetchMeHomeUpdatedUI/Client/src/Styles/Home.css';

// Import images
import heroImage from "./images/girlHoldingADog.png";
import footPrint from "./images/footPrint.png";
import dogWithToy from "./images/HomeDarkCardLeftPic.png";
import happyDogPic from "./images/HomeDarkCardRightPic.png";
import testimonial1 from "./images/HomeDarkCardLeftPic.png";
import testimonial2 from "./images/HomeDarkCardRightPic.png";
import testimonial3 from "./images/homepageDog.png";

const Home = () => {
  const stats = [
    { number: "1,200+", label: "Pets Adopted" },
    { number: "500+", label: "Lost Pets Found" },
    { number: "5,000+", label: "Happy Families" },
  ];

  const features = [
    {
      title: "The Joy of Pet Adoption",
      description: "Bringing a pet into your life can be an incredibly rewarding experience, not just for you but for the furry friend you welcome into your home.",
      icon: "heart"
    },
    {
      title: "Bringing Lost Pets Back",
      description: "Reuniting lost pets with their families is a heartfelt mission that requires quick action, community support, and the right resources.",
      icon: "map-marker"
    },
    {
      title: "Healing Power of Animals",
      description: "Animals have an extraordinary ability to touch our lives in profound ways, offering companionship and a therapeutic bond that impacts our wellbeing.",
      icon: "medkit"
    }
  ];

  const testimonials = [
    {
      text: "Thanks to FetchMeHome, I found my perfect furry companion. The process was seamless and supportive!",
      author: "Sarah J.",
      image: testimonial1
    },
    {
      text: "After weeks of searching, FetchMeHome helped me reunite with my lost cat. I'm forever grateful!",
      author: "Michael T.",
      image: testimonial2
    },
    {
      text: "The personality test matched me with the perfect dog for my lifestyle. Couldn't be happier!",
      author: "Emily R.",
      image: testimonial3
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Finding Forever Homes <span className="accent">Together</span>
              </h1>
              <p>
                Whether you're looking to adopt a new companion or reunite with a lost friend,
                we're here to make the journey simple, supportive, and joyful.
              </p>
              <div className="hero-buttons">
                <Link to="/pets" className="btn btn-primary">
                  <span>Adopt a Pet</span>
                  <img src={footPrint} alt="footprint" className="btn-icon" />
                </Link>
                <Link to="/find" className="btn btn-outline">
                  <span>Find a Pet</span>
                  <img src={footPrint} alt="footprint" className="btn-icon" />
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src={heroImage} 
                alt="Happy pet and owner"
                className="floating"
              />
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow">↓</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-wrapper">
            <div className="mission-image-left">
              <img src={dogWithToy} alt="Dog with toy" className="mission-img" />
            </div>
            <div className="mission-text-left">
              <p><span className="mission-number">1,200+</span> Furry Friends<br/>Living Their Best Lives</p>
            </div>
            <div className="mission-image-right">
              <img src={happyDogPic} alt="Happy dog" className="mission-img" />
            </div>
            <div className="mission-text-right">
              <p className="mission-label">WHAT WE DO?</p>
              <p>"With a focus on pet adoption and reuniting lost pets with their families, FetchMeHome makes it easy to find a loving companion or bring a missing pet back home."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-wrapper">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Looking to Adopt or Reunite a Lost Pet?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`fa fa-${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Match?</h2>
            <p>Take our pet personality quiz to discover which animal companion would fit best with your lifestyle.</p>
            <Link to="/personality" className="btn btn-primary">Take Personality Quiz</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={`${testimonial.author}`} />
                </div>
                <div className="quote-mark">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          width: 100%;
          overflow: hidden;
        }
        
        /* Hero Section */
        .hero {
          min-height: 90vh;
          background: linear-gradient(135deg, #fff8f0 0%, #fff3e0 100%);
          padding: 80px 0 40px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .hero-text {
          flex: 1;
          max-width: 600px;
          animation: fadeInUp 1.2s ease;
        }
        
        .hero-text h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #2c2c2c;
        }
        
        .accent {
          color: #ff8c00;
          position: relative;
          display: inline-block;
        }
        
        .accent::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: #ffab40;
          border-radius: 2px;
        }
        
        .hero-text p {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: #495057;
        }
        
        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 2rem;
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
          animation: fadeInRight 1.5s ease;
        }
        
        .hero-image img {
          max-width: 100%;
          height: auto;
        }
        
        .floating {
          animation: float 6s ease-in-out infinite;
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeIn 2s ease;
        }
        
        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid #6c757d;
          border-radius: 20px;
          position: relative;
        }
        
        .wheel {
          width: 6px;
          height: 6px;
          background-color: #6c757d;
          border-radius: 50%;
          position: absolute;
          top: 8px;
          left: 10px;
          animation: scroll 2s infinite;
        }
        
        .arrow {
          font-size: 1.2rem;
          color: #6c757d;
          margin-top: 5px;
          animation: bounce 2s infinite;
        }
        
        /* Mission Section */
        .mission {
          padding: 80px 0;
          background: linear-gradient(135deg, #2c3e50 0%, #1a202c 100%);
          color: white;
        }
        
        .mission-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          align-items: center;
        }
        
        .mission-image-left,
        .mission-image-right {
          text-align: center;
        }
        
        .mission-img {
          max-width: 100%;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }
        
        .mission-img:hover {
          transform: scale(1.05);
        }
        
        .mission-text-left,
        .mission-text-right {
          padding: 0 20px;
        }
        
        .mission-number {
          font-size: 3rem;
          font-weight: bold;
          color: #ffab40;
          display: block;
          margin-bottom: 10px;
        }
        
        .mission-label {
          color: #ffab40;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }
        
        /* Stats Section */
        .stats {
          padding: 40px 0;
          background-color: #ff8c00;
          color: white;
        }
        
        .stats-wrapper {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          text-align: center;
        }
        
        .stat-item {
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .stat-label {
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Features Section */
        .features {
          padding: 80px 0;
          background-color: #f8f9fa;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2.5rem;
          text-align: center;
          position: relative;
          color: #2c2c2c;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: #ff8c00;
          border-radius: 2px;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        
        .feature-card {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
          width: 70px;
          height: 70px;
          background-color: #fff3e0;
          color: #ff8c00;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
        }
        
        .feature-card h3 {
          color: #2c2c2c;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }
        
        .feature-card p {
          color: #6c757d;
          line-height: 1.6;
        }
        
        /* CTA Section */
        .cta {
          padding: 80px 0;
          background-color: #4e54c8;
          color: white;
          text-align: center;
        }
        
        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .cta p {
          margin-bottom: 2rem;
          font-size: 1.2rem;
          opacity: 0.9;
        }
        
        /* Testimonials Section */
        .testimonials {
          padding: 80px 0;
          background-color: #fff8f0;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }
        
        .testimonial-card {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
          position: relative;
          text-align: center;
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px);
        }
        
        .testimonial-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 20px;
          border: 5px solid #ff8c00;
        }
        
        .testimonial-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .quote-mark {
          font-size: 3rem;
          color: #ff8c00;
          opacity: 0.3;
          position: absolute;
          top: 10px;
          left: 20px;
          line-height: 1;
        }
        
        .testimonial-text {
          font-style: italic;
          margin-bottom: 20px;
          color: #495057;
        }
        
        .testimonial-author {
          font-weight: bold;
          color: #ff8c00;
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        @keyframes scroll {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(15px);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        /* Responsive */
        @media (max-width: 992px) {
          .hero-text h1 {
            font-size: 2.8rem;
          }
          
          .hero-content {
            flex-direction: column;
          }
          
          .hero-text {
            max-width: 100%;
            text-align: center;
            margin-bottom: 40px;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .mission-wrapper {
            grid-template-columns: 1fr;
          }
          
          .mission-image-right {
            order: 3;
          }
          
          .mission-text-right {
            order: 4;
          }
        }
        
        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.3rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .stat-label {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero {
            padding: 60px 0 30px;
          }
          
          .hero-text h1 {
            font-size: 2rem;
          }
          
          .hero-text p {
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;