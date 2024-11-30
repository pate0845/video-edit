// components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/g.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white py-32 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">DISCOVER OUR PHOTOGRAPHY SERVICES</h1>
        <p className="text-lg max-w-2xl mx-auto">We are passionate about capturing life’s precious moments. Our team of skilled photographers and state-of-the-art equipment ensure that every shot is a masterpiece. Explore our range of services designed to meet all your photography needs.</p>
      </div>
    </div>
  );
};





export default Banner;
