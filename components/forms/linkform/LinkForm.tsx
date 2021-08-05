import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import linkFormStyles from "./LinkForm.module.scss";

type LinkFormProps = {
  onCreateShortLink: (link: string, callback: () => void) => void;
};

// const validateLinkInput = () => {}

const LinkForm = ({ onCreateShortLink }: LinkFormProps) => {
  const [linkUrl, setLinkUrl] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (linkUrl == "") {
      setIsValid(false);
      return;
    }

    setSubmitted(true);

    onCreateShortLink(linkUrl, () => {
      setIsValid(true);
      setSubmitted(false);
      setLinkUrl("");
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col xs={12} md={10}>
          <Form.Control
            name="linkUrl"
            placeholder="Shorten a link here..."
            type="url"
            size="lg"
            className={`${linkFormStyles.input} ${
              !isValid ? linkFormStyles.warningborder : ""
            }`}
            onChange={(e) => setLinkUrl(e.target.value)}
            value={linkUrl}
          />
          <div
            className={linkFormStyles.warningtext}
            style={{ visibility: isValid ? "hidden" : "visible" }}
          >
            Please add a link
          </div>
        </Col>
        <Col xs={12} md={2}>
          <Button
            className={`btn btn-block btn-lg btn-custom-primary-large ${linkFormStyles.submitbtn}`}
            type="submit"
            disabled={submitted}
          >
            {submitted ? (
              <span
                className="spinner-border spinner-border-sm mb-1"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Shorten It!"
            )}
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default LinkForm;
