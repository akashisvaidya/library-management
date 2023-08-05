import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FormComponent } from "../components/form/FormComponent";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helper/axiosHelper";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [userObj, setUserObj] = useState({});
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
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserObj({ ...userObj, [name]: value });
  };
  console.log(userObj);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await loginUser(userObj);
    console.log(status, message);
    toast[status](message);
    status === "success" && navigate("/dashboard");
  };

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
            <Form onSubmit={handleOnSubmit}>
              {input.map((item, i) => (
                <FormComponent key={i} {...item} onChange={handleOnChange} />
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
