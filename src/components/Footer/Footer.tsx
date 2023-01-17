import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FooterList } from "../../utilities/constantComponents";

import "./Footer.css";

export const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        {FooterList.map((footer) => {
          return (
            <Col md="4" className="center-text">
              {footer.children}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
