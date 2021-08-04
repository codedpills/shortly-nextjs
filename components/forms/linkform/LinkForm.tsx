import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import linkFormStyles from "./LinkForm.module.scss";

const LinkForm = () => {
  const [validated, setValidated] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const linkInputVal = inputRef.current.value;

    if (linkInputVal === "") {
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Col xs={12} md={10}>
          <Form.Control
            ref={inputRef}
            placeholder="Shorten a link here..."
            type="url"
            required
            size="lg"
            className={linkFormStyles.input}
          />
          <Form.Control.Feedback type="invalid">
            Please add a link
          </Form.Control.Feedback>
        </Col>
        <Col xs={12} md={2}>
          <Button
            className={`btn btn-block btn-lg btn-custom-primary-large ${linkFormStyles.submitbtn}`}
            type="submit"
          >
            Shorten It!
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default LinkForm;
