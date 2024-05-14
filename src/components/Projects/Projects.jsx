import "./Projects.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgQuicksort from '../../assets/images/projects/quicksort1.gif';
import imgACMCSUF from '../../assets/images/projects/acmcsuf.png';
import { Container } from "react-bootstrap";

function template() {
  return (
    <>
      <h1 data-aos="fade-up" id="projects" className="projects pb-4">Projects</h1>
      <Container data-aos="fade-up" className="d-flex justify-content-center">
      <Row xs={1} md={2} className="g-4">
        <Col className="d-flex justify-content-center">
          <Card className="p-2 projectcard">
            <Card.Img data-aos="zoom-in" data-aos-duration="800" variant="top" src={imgQuicksort} />
            <Card.Body className="align-content-end">
              <Card.Title>LearnCS.io</Card.Title>
              <Card.Text>
                A website offers interactive visualizations of data structures and algorithms, enabling users to explore and understand concepts like arrays, linked lists, trees, and graphs.
              </Card.Text>
              <Button variant="primary" href="https://learncs.io/quick-sort1">Visit learncs.io</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col className="d-flex justify-content-center">
          <Card className="p-2 projectcard">
            <Card.Img data-aos="zoom-in" data-aos-duration="800" variant="top" src={imgACMCSUF} />
            <Card.Body className="align-content-end">
              <Card.Title>ACM at CSUF</Card.Title>
              <Card.Text>
                The official website of CSUF's ACM chapter serves as the digital hub for a vibrant community dedicated to fostering innovation, collaboration, creativity, and inclusivity in the tech industry.
              </Card.Text>
              <Button variant="primary" href="https://acmcsuf.com">Website</Button> &nbsp;
              <Button variant="primary" href="https://github.com/EthanThatOneKid/acmcsuf.com">Github Repo</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export default template;
