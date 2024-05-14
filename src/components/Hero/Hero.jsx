import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function template() {
  return (
    <Container>
      <Row className="align-items-center" id="home">
        <Col>
          <Image roundedCircle className="mob-img" src="https://avatars.githubusercontent.com/u/9380605?s=400&u=f18130f9a63a1c21eba83f8608479033d7a55c21&v=4" />
        </Col>
        <Col>
          <h1>Nathan <span style={{color: "skyblue"}}>Nguyen</span></h1>
          <p className="subtitle">
            Software Engineer based in California
          </p>
        </Col>
      </Row>
    </Container>

  );
};

export default template;
