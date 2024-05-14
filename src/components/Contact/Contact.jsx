import "./Contact.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

function template() {
  return (
    <Container data-aos="fade-up" className="mt-5 mb-4">
      <h1 id="contact" className="projects pb-4 ">Contact</h1>
      <h4>I want to hear from you!</h4>

      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="bg-transparent" border="white">
            <Card.Body>
              <Card.Title><i className="fa fa-linkedin" style={{ color: "white", fontSize: "2em" }}></i></Card.Title>
              <Card.Text>
                <Button variant="link" className="text-white" href="https://linkedin.com/in/nltn/">linkedin.com/NLTN</Button>
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col>
          <Card className="bg-transparent contact-card" border="white">
            <Card.Body>
              <Card.Title><i className="fa fa-github"></i></Card.Title>
              <Card.Text>
                <Button variant="link" href="https://github.com/NLTN">github.com/NLTN</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-transparent contact-card" border="white">
            <Card.Body>
              <Card.Title><i className="fa fa-envelope"></i></Card.Title>
              <Card.Text>
                nathan@me.com
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default template;
