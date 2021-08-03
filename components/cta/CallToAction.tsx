import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import ctaStyles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <div className={ctaStyles.root}>
      <div className={ctaStyles.background}>
        <Container>
          <div className={ctaStyles.boost}>
            <h1>Boost your links today</h1>
            <p>
              <Button className="btn btn-rounded-custom-primary-large">
                Get started
              </Button>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallToAction;
