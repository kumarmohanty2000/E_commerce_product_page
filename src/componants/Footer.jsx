import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="bg-grey text-light"
      expand="lg"
      style={{ backgroundColor: "gray" }}
    >
      <Container>
        <Row>
          <Col>
            <p class="text-center">
              &copy; 2024 Fashion Retail Store. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
