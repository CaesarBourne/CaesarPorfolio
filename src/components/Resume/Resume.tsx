import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import ParticleApp from "../../container/ParticleApp";
import resume from "../../Assets/resume.pdf";

import "./Resume.css";
import { AiOutlineDownload } from "react-icons/ai";

import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };
  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };

  return (
    <ParticleApp>
      <Container className="resume-container">
        <Row className="d-flex justify-content-center position-relative">
          <Button
            variant="success"
            href={resume}
            target="_blank"
            className="download"
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="py-5 Example__container__document">
          <Document
            className={"d-flex justify-content-center"}
            onLoadError={console.error}
            file={resume}
            options={options}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                scale={width > 786 ? 1.7 : 0.6}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ))}
            {/* {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => (
                <Page pageNumber={page} />
              ))} */}
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
