import React from "react";
import { Container } from "react-bootstrap";
import TsParticle from "../components/TsParticle/TsParticle";
import "./ParticleApp.css";
const ParticleApp = ({ children }: any) => {
  return (
    <Container fluid className="particle-app">
      <TsParticle />
      {children}
    </Container>
  );
};

export default ParticleApp;
