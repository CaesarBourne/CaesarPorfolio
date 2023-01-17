import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ParticleApp from "../../container/ParticleApp";
// import resume from '../../Assets/EmmaAdelekeCVSN.pdf'
// import resumeemma from "./resume.pdf";
import "./Resume.css";
import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [file, setFile] = useState(
    "https://raw.githubusercontent.com/CaesarBourne/CaesarPorfolio/main/src/Assets/resume.pdf"
  );
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  return (
    <ParticleApp>
      <Container className="resume-container">
        <Row className="d-flex justify-content-center position-relative">
          <Button variant="primary" target="_blank" className="download">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="justify-content-center py-5">
          <Document
            className={"d-flex justify-content-center"}
            onLoadError={console.error}
            file={}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </Row>
      </Container>
    </ParticleApp>
  );
};

export default Resume;
