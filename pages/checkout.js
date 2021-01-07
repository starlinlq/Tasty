import React from "react";
import { Layout } from "../components";
import { useForm } from "react-hook-form";
import {
  Section,
  Form,
  Label,
  Wrapper,
  Input,
} from "../globalStyles/global.elements";

const checkout = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  function handleForm(e) {
    e.preventDefault();
  }
  return (
    <Layout>
      <Section>
        <Form>
          <h3>Customer information</h3>
          <Wrapper>
            <Label>Name</Label>
            <Input name="name" ref={register({ required: true })} />
            {errors.name && <span>This field is required</span>}
          </Wrapper>
          <Wrapper>
            <Label>Last name</Label>
            <Input
              name="lastName"
              ref={register({ required: true, minLength: 3, maxLength: 10 })}
            />
            {errors.lastName && <span>This field is required</span>}
          </Wrapper>
          <Wrapper>
            <Label>email</Label>
            <Input
              name="email"
              ref={register({ required: true, minLength: 3, maxLength: 10 })}
            />
            {errors.email && <span>This field is required</span>}
          </Wrapper>
          <h3>Shipping details</h3>
          <Wrapper>
            <Label>Full name</Label>
            <Input
              name="email"
              ref={register({ required: true, minLength: 3, maxLength: 10 })}
            />
            {errors.email && <span>This field is required</span>}
          </Wrapper>
          <Wrapper>
            <Label>Street address</Label>
            <Input
              name="streetAddress"
              ref={register({ required: true, minLength: 3, maxLength: 10 })}
            />
            {errors.streetAddress && <span>This field is required</span>}
          </Wrapper>
        </Form>
      </Section>
    </Layout>
  );
};

export default checkout;
