import "./Resume.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "react-bootstrap";

function template() {
  return (
    <Container>
      <h1 id="resume" data-aos="fade-up" className="resume pb-3">Resume</h1>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card data-aos="fade-up" className="resume-card bg-transparent">
            <Card.Body>
              <Card.Title><h2>Education</h2></Card.Title>
              <div className="resume-subtitle">
                <i className="fa fa-graduation-cap"></i>
                California State University, Fullerton
              </div>
              <p className="resume-term">
                2021 - Present
              </p>
              <p className="resume-detail">
                GPA: 3.83
              </p>

              <div className="resume-subtitle">
                <i className="fa fa-graduation-cap"></i>
                Orange Coast College
              </div>
              <p className="resume-term">
                2018 - 2021
              </p>
              <p className="resume-detail">
                GPA: 3.8
              </p>
            </Card.Body>
          </Card>

          <Card data-aos="fade-up" className="resume-card bg-transparent mt-5">
            <Card.Body>
              <Card.Title><h2>Skills</h2></Card.Title>
              <div className="resume-subtitle">
                <i className="fa fa-database"></i>
                Databases
              </div>
              <p className="resume-detail">
                MS SQL, MySQL, Firebase, Snowflake.
              </p>

              <div className="resume-subtitle">
                <i className="fa fa-cloud"></i>
                Cloud
              </div>
              <p className="resume-detail">
                Amazon Web Services, Google Cloud Platform.
              </p>

              <div className="resume-subtitle">
                <i className="fa fa-gears"></i>
                IoT
              </div>
              <p className="resume-detail">
                Microcontrollers (ESP32, Arduino), LoRa radio communication, electrical systems, solar energy.
              </p>

              <div className="resume-subtitle">
                <i className="fa fa-linux"></i>
                Operating System
              </div>
              <p className="resume-detail">
                Linux, iOS, Android, macOS, MS Windows.
              </p>

              <div className="resume-subtitle">
                <i className="fa fa-code"></i>
                Programming languages
              </div>
              <p className="resume-detail">
                Assembly x86, C/C++, C#, Java, Javascript, Python, PHP, Swift, SQL, Typescript, XML, HTML.
              </p>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card data-aos="fade-up" className="resume-card bg-transparent">
            <Card.Body>
              <Card.Title><h2>Experience</h2></Card.Title>

              <div className="resume-subtitle">
                <i className="fa fa-briefcase"></i>Sonarverse
              </div>
              <p className="resume-term">
                10/2022 - 05/2023
              </p>
              <p className="resume-jobtitle">
                Backend Developer Intern
              </p>
              <ul className="resume-detail">
                <li>Created a bot to collect VC Entities and wallet labels from multiple sources.</li>
                <li>Parallelized tweet-scraper code to improve the performance.</li>
                <li>Wrote a script to estimate the value in USD for the transactions.</li>
                <li>Designed an ETL data pipeline to extract posts from social media platforms, transform them using NLTK (Natural Language Toolkit) to determine whether they are positive, negative, or neutral, and load them into a target database.</li>
                <li>Created a monitoring dashboard for a data pipeline to oversee the health and performance of the system.</li>
                <li>Implemented CI/CD pipelines using GitHub Actions to build, test, and deploy the project to AWS.</li>
              </ul>
            </Card.Body>
          </Card>
          <Card data-aos="fade-up" className="resume-card bg-transparent">
            <Card.Body>
              <div className="resume-subtitle">
                <i className="fa fa-briefcase"></i>LearnCS.io
              </div>
              <p className="resume-term">
                01/2020 - Present
              </p>
              <p className="resume-jobtitle">
                Web Developer
              </p>
              <ul className="resume-detail">
                <li>Built a lightweight & simple 2D animation control library.</li>
                <li>Built an Algorithm Visualizer for visualizing many kinds of sorting algorithms.</li>
                <li>Built a Graph Visualizer for visualizing graph data structures and algorithms.</li>
              </ul>
            </Card.Body>
          </Card>

          <Card data-aos="fade-up" className="resume-card bg-transparent">
            <Card.Body>
              <div className="resume-subtitle">
                <i className="fa fa-briefcase"></i>ACM at CSU Fullerton/ acmcsuf.com
              </div>
              <p className="resume-term">
                03/2021 - 09/2022
              </p>
              <p className="resume-jobtitle">
                Web Developer
              </p>
              <ul className="resume-detail">
                <li>Wrote unit tests.</li>
                <li>Built the TagField component.</li>
                <li>Added Filter by Tags feature that allows users to filter out blog posts quickly.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default template;
