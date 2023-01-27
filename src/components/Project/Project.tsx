import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ParticleApp from "../../container/ParticleApp";
import { CardList } from "../../utilities/helperFunctions";
import AppCard from "../AppCard/AppCard";
import DynamicModal from "../DynamicModal/DynamicModal";
import "./Project.css";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [previews, setPreviewListState] = useState(["true"]);

  return (
    <>
      <DynamicModal
        showModal={showModal}
        previewList={previews}
        setShowModal={setShowModal}
      ></DynamicModal>
      <ParticleApp>
        <Container className=" justify-content-center projects">
          <h1 className=" text-white font-weight-bold pt-5 display-6 ">
            Deployed <strong className="primary">Projects</strong>
          </h1>
          <p className="text-white"> List of projects worked on</p>
          <Row className="justify-content-center pb-1">
            {CardList.map(
              (
                {
                  img,
                  title,
                  description,
                  repoLink,
                  webLink,
                  setPreviewList,
                  previewList,
                },
                index
              ) => {
                return (
                  <Col key={index} md={4} className="py-5 px-4 h-auto">
                    <AppCard
                      img={img}
                      title={title}
                      description={description}
                      repoLink={repoLink}
                      webLink={webLink}
                      previewList={previewList}
                      setPreviewList={setPreviewListState}
                      setShowModal={setShowModal}
                    />
                  </Col>
                );
              }
            )}
          </Row>
        </Container>
      </ParticleApp>
    </>
  );
};

export default Project;
