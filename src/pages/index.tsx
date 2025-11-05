import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container>
        {/* <Clients /> */}
        <Features />
        <Steps />
        <Faq />
      </Container>
    </div>
  );
}
