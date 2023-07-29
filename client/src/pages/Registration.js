import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FormComponent } from "../components/form/FormComponent";
import { Link } from "react-router-dom";
import { ImBackward2 } from "react-icons/im";
import { registerUser } from "../helper/axiosHelper";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({});
  const input = [
    {
      label: "Username",
      name: "name",
      required: true,
      type: "text",
      placeholder: "Your user name.",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      type: "text",
      placeholder: "Your user name.",
      text: " We'll never share your email with anyone else.",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "Password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      placeholder: "Retype Password",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      return window.alert("Password do not match");
    }

    const { status, message } = await registerUser(rest);
    console.log(status, message);
    toast[status](message);
  };
  return (
    <div className="body">
      <Container className="main">
        <Row className="p-5">
          <Link to="/">
            <span>
              <ImBackward2 size={45} />
            </span>
          </Link>

          <Col className="d-flex justify-content-center align-items-center">
            <div className="">
              <h1 className="mt-5 fw-bold text-shadow">Register Here</h1>
              <p className="text-center">Lets get you started.</p>
            </div>
          </Col>
          <Col className="shadow-lg p-5 rounded">
            <Form onSubmit={handleOnSubmit}>
              {input.map((item, i) => (
                <FormComponent key={i} {...item} onChange={handleOnChange} />
              ))}
              <Form.Select
                className="mb-3"
                onChange={handleOnChange}
                name="role"
              >
                <option>Select Role</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </Form.Select>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
