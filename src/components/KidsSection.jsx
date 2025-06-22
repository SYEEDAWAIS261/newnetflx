import React from "react";
import img from "../../src/assets/kids.png"
const KidsSection = () => (
    <>
    <section class="section bg-black text-white text-center text-md-start w-100">
    <div class="container d-flex flex-column flex-md-row align-items-center gap-4">
      <img src={img} alt="Kids" class="img-fluid w-50"/>
      <div class="flex-fill">
        <h1>Create profiles for kids</h1>
        <h4>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h4>
      </div>
    </div>
  </section>

    </>
);
export default KidsSection;