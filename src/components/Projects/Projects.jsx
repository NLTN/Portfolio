import "./Projects.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import imgQuicksort from '../../assets/images/projects/quicksort1.gif';
import imgACMCSUF from '../../assets/images/projects/acmcsuf.png';

function template() {
  return (
    <>
      <h1 data-aos="fade-up" id="projects" className="projects pb-4">Projects</h1>

      <Row data-aos="fade-up" xs={1} md={2} className="g-4">
        <Col>
          <Card className="p-2" style={{ width: '24rem', minHeight: '470px' }}>
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

        <Col>
          <Card className="p-2" style={{ width: '24rem', minHeight: '470px' }}>
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
    </>
  );
};

export default template;
