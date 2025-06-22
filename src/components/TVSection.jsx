import React from 'react';
import tvImage from '../../src/assets/tv.png';

const TVSection = () => (
  <>
    <section className="section bg-black text-white text-center text-md-start py-5 w-100">
      <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
        <div className="flex-fill">
          <h1>Enjoy on your TV</h1>
          <h4>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h4>
        </div>
        <img src={tvImage} alt="TV" className="img-fluid w-50" />
      </div>
    </section>
    <hr style={{ borderTop: '2px solid white', opacity: 1, margin: 0 }} />
  </>
);

export default TVSection;