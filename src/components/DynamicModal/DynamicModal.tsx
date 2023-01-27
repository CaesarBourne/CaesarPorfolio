import React from "react";

import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./DynamicModal.css";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import mymtn from "../../Assets/mymtn.png";
import { AiFillCloseCircle } from "react-icons/ai";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const modal = {
  hidden: {
    y: "-100vh",
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    y: "100px",
    x: "15vw",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const DynamicModal = ({
  showModal,
  setShowModal,
  imageList,
  children,
  previewList,
}: any) => {
  const closeModal = () => {
    setShowModal(false);
  };

  console.log("PREV ", previewList);
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="backdrop"
          exit={{ x: "-100vw" }}
        >
          <motion.div variants={modal} exit={{ opacity: 0 }} className="modal">
            {/* <p>Want to make another Pizza</p>
            <Link to={"/"}>
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link> */}
            <motion.div className="carousel-container">
              <Row className="carousel-header">
                <Col md={6}>
                  <h3>MY MTN Web</h3>
                </Col>
                <Col className="close" md={6}>
                  <Button onClick={closeModal} variant="primary">
                    <AiFillCloseCircle />
                  </Button>
                </Col>
              </Row>
              <Carousel className="carouselApp" variant="dark">
                {previewList.map((page: any, index: any) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-100 carousel-img"
                        src={page.img}
                        alt="First slide"
                      />
                      <Carousel.Caption className="caption">
                        <h3>{page.title}</h3>
                        <p>{page.label}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
                {/* <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={mymtn}
                    alt="First slide"
                  />
                  <Carousel.Caption className="caption">
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
                {/* <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={mymtn}
                    alt="Second slide"
                  />

                  <Carousel.Caption className="caption">
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={mymtn}
                    alt="Third slide"
                  />

                  <Carousel.Caption className="caption">
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DynamicModal;
