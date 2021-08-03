import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import heroStyles from "./Hero.module.scss";

import heroImg from "@/assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className={heroStyles.root}>
      <Row>
        <Col xs={12} md={5} className="order-md-last" style={{ padding: "0" }}>
          <Image src={heroImg} alt="Shortly illustration" />
        </Col>
        <Col xs={12} md={7}>
          <Container>
            <div className={heroStyles.text}>
              <h1>More than just shorter links</h1>
              <p>
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
              <p className="mt-4">
                <a
                  href="/somewhere"
                  className="btn btn-rounded-custom-primary-large"
                >
                  Get started
                </a>
              </p>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
