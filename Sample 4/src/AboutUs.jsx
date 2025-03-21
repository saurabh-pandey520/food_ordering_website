import React from 'react';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          At [Swiggy], our mission is to provide high-quality products and services to our customers. We strive to make a positive impact in our industry and community by offering innovative solutions that meet the ever-changing needs of the market.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Story</h2>
        <p>
          Founded in [2020], [Swiggy] was created with the goal of providing exceptional customer service and delivering products that exceed expectations. What started as a small operation has grown into a leading company in our field, thanks to our dedicated team and loyal customers.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We believe in being honest and transparent in all our dealings.</li>
          <li>Innovation: We constantly strive to bring new and better ideas to life.</li>
          <li>Customer Focus: Our customers are at the heart of everything we do.</li>
          <li>Teamwork: We collaborate and support each other to achieve our goals.</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team consists of passionate and skilled professionals who are dedicated to helping our customers succeed. From developers to customer support agents, every team member plays an important role in our company's success.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;