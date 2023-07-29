import React from "react";
import { Form } from "react-bootstrap";

export const FormComponent = ({ label, text, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
      <Form.Text className="text-muted">{text}</Form.Text>
    </Form.Group>
  );
};
