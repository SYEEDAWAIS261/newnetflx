import React from "react";
import img from "../../src/assets/Netflix-Logo.wine.png"

const DownloadSection = () =>  (
   <section class="section bg-black text-white text-center text-md-start w-100">
    <div class="container d-flex flex-column flex-md-row align-items-center gap-4">
      <img src={img} alt="Mobile" className="img-fluid w-25"/>
      <div class="flex-fill">
        <h1>Download your shows to watch offline</h1>
        <h4>Save your favorites easily and always have something to watch.</h4>
      </div>
    </div>
  </section>
  );
export default DownloadSection;