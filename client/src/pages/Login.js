import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FormComponent } from "../components/form/FormComponent";
import { Link } from "react-router-dom";

const Login = () => {
  const input = [
    {
      label: "Email",
      name: "email",
      required: true,
      type: "text",
      placeholder: "youremail@email.com",
      text: " We'll never share your email with anyone else.",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "Password",
    },
  ];
  return (
    <div className="body">
      <Container className="main">
        <Row className="p-5">
          <Col>
            <div className="">
              <h1 className="mt-5 fw-bold text-shadow">Library Management</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </Col>
          <Col className="shadow-lg p-5 rounded">
            <Form>
              {input.map((item, i) => (
                <FormComponent key={i} {...item} />
              ))}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <Link to="/register" className="text-end nav-link text-primary">
              <div>Register here</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
