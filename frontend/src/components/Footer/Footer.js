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
          <Col className="text-center py-3">
            - made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/khushigit13"
              style={{ textDecoration: "none" }}>
              <b>Khushi Sahu 👩‍💻</b>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
