import React from "react";
import About from "../components/About";
import Contact from "../components/Contact/Contact";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Page from "../components/utility/Page";
import Hero from "./../components/Hero";
import Team from "./../components/Team/Team";

export default function Home() {
  return (
    <Page
      title="TogaHacks I"
      desc="TogaHacks I is a 24 hour programming event where high school
              students all over Silicon Valley come together to develop a
              software or hardware project!"
    >
      <Hero />
      <About />
      <FAQ />
      <Team />
      <Sponsors />
      <Contact />
    </Page>
  );
}
