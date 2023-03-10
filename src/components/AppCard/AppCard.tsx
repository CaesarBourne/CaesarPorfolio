import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./AppCard.css";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { cardInput } from "../../utilities/appTypes";

const AppCard = ({
  img,
  title,
  description,
  repoLink,
  webLink,
  previewList,
  setPreviewList,
  setShowModal,
}: cardInput) => {
  const openModal = () => {
    setShowModal(true);
    setPreviewList(previewList);
  };

  return (
    <Card className="app-card">
      <Card.Img
        className="cardimgapp"
        variant="top"
        alt="project-image"
        src={previewList[0].img}
      />

      <Card.Body>
        <Card.Title>
          <strong className="title">{title}</strong>
        </Card.Title>
        <Card.Text className="description">{description}</Card.Text>
        <Row className="bottom-buttons w-100">
          <Col xl={4} lg={12} md={12} sm={12} className="project-buttons">
            <Button variant="primary" target="_blank" href={webLink}>
              <CgWebsite />
              &nbsp; Navigate
            </Button>
          </Col>
          <Col xl={4} lg={12} md={12} sm={12} className="project-buttons">
            <Button variant="primary" onClick={openModal}>
              <CgWebsite /> &nbsp; Preview
            </Button>
          </Col>

          <Col xl={4} lg={12} md={12} sm={12}>
            <Button variant="primary" href={repoLink} target="_blank">
              <BsGithub /> &nbsp; GitHub
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AppCard;
