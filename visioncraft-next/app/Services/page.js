import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-yellow-100">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="border p-4 rounded-lg bg-white">
          <h3 className="text-xl font-semibold">Camera Repair</h3>
          <p>Get your camera back in action with our expert repair services.</p>
          <Link href="/services" className="text-blue-600 mt-4 block">Learn More</Link>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h3 className="text-xl font-semibold">Film Development</h3>
          <p>Preserve your memories with professional film development and digitization.</p>
          <Link href="/services" className="text-blue-600 mt-4 block">Learn More</Link>
        </div>
        <div className="border p-4 rounded-lg bg-white">
          <h3 className="text-xl font-semibold">Photography Workshops</h3>
          <p>Enhance your skills with our hands-on workshops for all levels.</p>
          <Link href="/services" className="text-blue-600 mt-4 block">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
