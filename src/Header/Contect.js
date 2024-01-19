import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { save } from "../Api/Db";
import axios from "axios";

function Contect(props) {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const myfun = (e) => {
    e.preventDefault();
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (data.email.match(pattern)) {
      
      save("contect", data);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("messege").value = "";
      console.log(data);
    } else {
      alert("Your email is not valid");
    }
  };

  const hello = (info) => {
    const { name, value } = info.target;
    setdata({ ...data, [name]: value });
  };

  return (
    <Container className="pt-4">
      <Form onSubmit={myfun} className=" text-center pt-4">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            id="name"
            as="textarea"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={hello}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="formEmail ">
          <Form.Label> Email address</Form.Label>
          <Form.Control
            className=""
            id="email"
            as="textarea"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={hello}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3  " controlId="formmessage">
          <Form.Label> messege address</Form.Label>
          <Form.Control
            id="messege"
            as="textarea"
            name="message"
            placeholder="Enter your message"
            value={data.message}
            onChange={hello}
            required
          />
        </Form.Group>

        <Button variant="primary" className="pb-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contect;
