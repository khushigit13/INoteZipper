import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        bottom: 0,
        justifyContent: "center",
      }}>
      <Container>
        <Row>
          <Col className="text-center py-3"> Copyright &copy;INoteZipper</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
