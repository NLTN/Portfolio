import "./Contact.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function template() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted.");
  };
  return (
    <Container data-aos="fade-up" className="mt-5 mb-4">
      <h1 id="contact" className="pb-4 ">Contact</h1>
      <h4>I want to hear from you!</h4>

      <Row xs={1} md={2} className="g-4">
        <Col xs={12} md={5}>
          <Card className="contact-card bg-transparent" border="white">
            <Card.Body>
              <Card.Text>
                <i className="fa fa-linkedin"></i>
                <Button variant="link" className="text-white" href="https://linkedin.com/in/nltn/">linkedin.com/NLTN</Button>
              </Card.Text>
              <Card.Text>
                <i className="fa fa-github"></i>
                <Button variant="link" href="https://github.com/NLTN">github.com/NLTN</Button>
              </Card.Text>
              <Card.Text>
                <i className="fa fa-envelope"></i>
                <Button variant="link" href="mailto: nathan@me.com">nathan@me.com</Button>
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col xs={12} md={7}>
          <Card className="bg-transparent" border="white">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="textbox1">
                      <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="textbox2">
                      <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default template;
