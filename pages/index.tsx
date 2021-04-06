import React from "react";
import Page from "../components/utility/Page";
import Hero from "./../components/Hero";

export default function Home() {
  return (
    <Page
      title="TogaHacks I"
      desc="Exploring economics. Empowering leaders. Official page for the Youth Economics Intitiative (YEI)."
    >
      <Hero />
    </Page>
  );
}
