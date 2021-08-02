import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import footerStyles from "./Footer.module.scss";

import lightLogo from "@/assets/images/logo-light.svg";
import pinterest from "@/assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <div className={footerStyles.footeritem}>
              <Image
                src={lightLogo}
                alt="Shortly"
                className={footerStyles.logo}
              />
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div className={footerStyles.footeritem}>
              <h6>Features</h6>
              <ul className={footerStyles.footerlinks}>
                <li>
                  <a href="https://gosomewhere">Link Shortening</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Branded Links</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Analytics</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div className={footerStyles.footeritem}>
              <h6>Resources</h6>
              <ul className={footerStyles.footerlinks}>
                <li>
                  <a href="https://gosomewhere">Blog</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Developers</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Support</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <div className={footerStyles.footeritem}>
              <h6>Company</h6>
              <ul className={footerStyles.footerlinks}>
                <li>
                  <a href="https://gosomewhere">About</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Our Team</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Careers</a>
                </li>
                <li>
                  <a href="https://gosomewhere">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className={footerStyles.footeritem}>
              <ul className={footerStyles.iconlinks}>
                <li>
                  <a href="https://gosomewhere">
                    <i className="bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://gosomewhere">
                    <i className="bi-twitter"></i>
                  </a>
                </li>
                <li style={{ paddingTop: "0.2rem" }}>
                  <a href="https://gosomewhere">
                    <Image src={pinterest} alt="Shortly on Pinterest" />
                  </a>
                </li>
                <li>
                  <a href="https://gosomewhere">
                    <i className="bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
