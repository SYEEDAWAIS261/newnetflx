import React from "react";


const HeroSection = () => (
  <section className="hero text-white text-center py-5 bg-dark w-100">
    <div className="container">
      <h1>Unlimited movies, TV shows, and more</h1>
      <h4>Watch anywhere. Cancel anytime.</h4>
      <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
      <form className="email-form mt-4">
        <div className="d-flex justify-content-center flex-wrap" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input type="email" className="form-control me-2 mb-2" placeholder="Enter email" />
          <button className="btn btn-danger mb-2">Get Started &gt;</button>
        </div>
      </form>
    </div>
  </section>
);

export default HeroSection;