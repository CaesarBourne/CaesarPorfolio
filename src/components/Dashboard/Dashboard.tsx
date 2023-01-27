import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getGreeting } from "../../utilities/helperFunctions";
import TsParticle from "../TsParticle/TsParticle";
import TypeEffect from "../TypeEffect/TypeEffect";
import "./Dashboard.css";
import homeLogo from "../../Assets/computers.svg";
import avata from "../../Assets/emma.png";
import Tilt from "react-parallax-tilt";
import ParticleApp from "../../container/ParticleApp";
import Computer from "../SVGS/computer";

const Dashboard = () => {
  return (
    <section>
      <ParticleApp>
        <Container className=" dashboard-body pt-5">
          <Row>
            <Col md={7} className="dashboard-top">
              <h1 className="pb-1 pl-3 display-6">{getGreeting()}</h1>
              <h1 className="myname">
                I am <strong>Emmanuel Adeleke</strong>
              </h1>
              <div className="typewriter">
                <TypeEffect />
              </div>
            </Col>
            <Col md={5}>
              <span className="home-img">
                <Computer />
              </span>

              {/* <img className="home-img" src={homeLogo} alt="" /> */}
            </Col>
          </Row>
        </Container>
      </ParticleApp>

      {/* second sectio of home */}

      <Container fluid className="position-relative py-5" id="portfolio">
        <Container>
          <Row>
            <Col className="dashboard-profile" md={8}>
              <h1 className="display-6">
                <strong>My Profile</strong>
              </h1>
              <p className="dashboard-profile-body">
                I'd love to contribute my quota to this solution by virtue of my
                vast knowledge with over 10 years as a software engineer,
                <br />
                <br />
                <b className="primary">STANDOUT PROJECTS</b>
                <br />
                <span className="primary">
                  <i>
                    I have been opportune to work on a telecoms portal, that
                    made the purchase of airtime data and other telecom related
                    services easily accessible to the community and everyday
                    customer, this was unique has it had the microservice
                    architecture with over 1million daily users on the platform,
                  </i>
                </span>
              </p>
            </Col>
            <Col md={4}>
              <Tilt>
                <img className="personal" src={avata} alt="" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Dashboard;
