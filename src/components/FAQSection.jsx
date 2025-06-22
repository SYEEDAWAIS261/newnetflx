import React from "react";

const FAQSection = () => (
<section className="section bg-black text-white w-100">
    <div className="container text-center">
      <h1 class="mb-4">Frequently Asked Questions</h1>
      <div className="faq">
        <h4 className="faq-item">What is Netflix?</h4>
        <h4 className="faq-item">How much does Netflix cost?</h4>
        <h4 className="faq-item">Where can I watch?</h4>
        <h4 className="faq-item">How do I cancel?</h4>
        <h4 className="faq-item">What can I watch on Netflix?</h4>
        <h4 className="faq-item">Is Netflix good for kids?</h4>
      </div>
      <form className="email-form d-flex mt-3 mx-auto">
      <input type="email" className="form-control me-2" placeholder="Email address"/>
      <button className="btn btn-danger">Get Started &gt;</button>
    </form>

    </div>
  </section>

);

export default FAQSection;