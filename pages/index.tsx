import React from "react";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Page from "../components/utility/Page";
import Hero from "./../components/Hero";
import Team from "./../components/Team/Team";

export default function Home() {
  return (
    <Page
      title="TogaHacks I"
      desc="Exploring economics. Empowering leaders. Official page for the Youth Economics Intitiative (YEI)."
    >
      <Hero />
      <About />
      <FAQ />
      <Team />
    </Page>
  );
}
