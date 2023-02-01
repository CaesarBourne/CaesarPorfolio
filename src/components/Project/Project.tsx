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
          <h1 className=" text-white text-center font-weight-bold pt-5 display-6 w-100">
            <strong className="primary">Some </strong>
            Deployed <strong className="primary">Projects</strong>
          </h1>
          <p className="w-100 text-center text-white">
            please do find some live applications
          </p>
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
                  <Col
                    key={index}
                    md={6}
                    lg={6}
                    xl={4}
                    className="py-3 px-2  appcard"
                  >
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
