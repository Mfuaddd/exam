import React from "react";
import { Helmet } from "react-helmet-async";
import Menu from "../../components/Menu";
import Welcome from "../../components/Welcome";
import Testimonials from "../../components/Testimonials";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import Contact from "../../components/Contact";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <Welcome />
      <Testimonials />
      <Services />
      <Menu />
      <Contact />
    </>
  );
}

export default HomePage;
