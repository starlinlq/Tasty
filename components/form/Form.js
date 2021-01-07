import React from "react";
import { useForm } from "react-hook-form";
import { Container, Input, Wrapper } from "./form.elements";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Input value="name" />
      </Form>
    </Container>
  );
};

export default Form;
