import React from "react";
import img from "../../src/assets/Netflix-Logo.wine.png"
const Footer = () => (
    <>
    <footer className="text-center text-md-start w-100">
    <div className="container d-flex flex-wrap justify-content-between">
    <div className="text-center mb-4">
        <a href="#">
           <img  src={img} alt="Netflix Logo" height="50"/>  
        </a>
     
    </div>

      <div>
        <a href="#">FAQ</a>
        <a href="#">Privacy</a>
        <a href="#">Speed Test</a>
        <a href="#">Investor Relations</a>
      </div>
      <div>
        <a href="#">Jobs</a>
        <a href="#">Help Center</a>
        <a href="#">Legal Notices</a>
        <a href="#">Cookie Preferences</a>
      </div>
      <div>
        <a href="#">Account</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Only on Netflix</a>
        <a href="#">Corporate Information</a>
      </div>
      <div>
        <a href="#">Terms of Use</a>
        <a href="#">Contact Us</a>
        <a href="#">Media Center</a>
      </div>
    </div>
  </footer>
    </>
);
export default Footer;