import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Services from "./Services/page";
//import About from "../components/About";
//import Contact from "../components/Contact";
import Footer from "./Footer/page";
import Testimonial from "./Testimonial/Testimonial";
import React from 'react';
import Specialpoint from './Specialpoint/page';
//import Banner from '../components/Banner';
//import Core from '../components/Core';
import Herosection from './Herosection/page';



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Specialpoint/>
      <Services/>
      <Herosection/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
