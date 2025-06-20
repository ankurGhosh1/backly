import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Image from "next/image";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div>
      <Hero />
      <Container>
        <Clients />
        <Features />
        <Steps />
      </Container>
    </div>
  );
}
