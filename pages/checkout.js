import React, { useState } from "react";
import { Layout } from "../components";
import { useForm } from "react-hook-form";
import {
  Section,
  Form,
  Submit,
  Wrapper,
  Input,
  Title,
  StepSection,
  P,
  Hr,
  Button,
  Span,
  InputWrapper,
} from "../globalStyles/global.elements";

const checkout = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  function handleForm(data) {
    console.log(data);
  }
  return (
    <Layout>
      <Section>
        <Wrapper>
          <Title>Checkout</Title>
          <StepSection>
            <P fontSize="16px">Shipping address</P>
            <Hr />
            <P fontSize="16px">Payment details</P>
          </StepSection>
          {step1 ? (
            <P fontSize="20px">Delivery information</P>
          ) : (
            <P fontSize="20px">Payment information</P>
          )}
          <Form onSubmit={handleSubmit(handleForm)}>
            {step1 && (
              <>
                <InputWrapper>
                  <Input
                    placeholder="Name"
                    name="name"
                    ref={register({ required: true })}
                  />
                  {errors.name && <Span>This field is required</Span>}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    placeholder="Last name"
                    name="lastName"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 10,
                    })}
                  />
                  {errors.lastName && <Span>This field is required</Span>}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    placeholder="Email"
                    name="email"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                  />
                  {errors.email && <Span>This field is required</Span>}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    placeholder="address"
                    name="address"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 20,
                    })}
                  />
                  {errors.address && <Span>This field is required</Span>}
                </InputWrapper>

                <InputWrapper>
                  <Input
                    placeholder="Zip code"
                    name="zipCode"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 6,
                    })}
                  />
                  {errors.zipCode && <Span>This field is required</Span>}
                </InputWrapper>
              </>
            )}

            {step2 && (
              <>
                <InputWrapper>
                  <Input
                    placeholder="Card number"
                    name="creditCard"
                    ref={register({
                      required: true,
                      minLength: 16,
                      maxLength: 16,
                    })}
                  />
                  {errors.creditCard && <Span>Please enter a valid Card</Span>}
                </InputWrapper>

                <InputWrapper>
                  <Input
                    placeholder="Expiry month"
                    name="experyMonth"
                    ref={register({
                      required: true,
                      minLength: 2,
                      maxLength: 2,
                    })}
                  />
                  {errors.experyMonth && (
                    <Span>Please enter a valid month</Span>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    placeholder="Expiry year"
                    name="expiryYear"
                    ref={register({
                      required: true,
                      minLength: 2,
                      maxLength: 2,
                    })}
                  />
                  {errors.expiryYear && <Span>Please enter a valid year </Span>}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    placeholder="CCV"
                    name="ccv"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 3,
                    })}
                  />
                  {errors.ccv && <Span>Please enter a valid ccv</Span>}
                </InputWrapper>

                <Submit type="submit" />
              </>
            )}
          </Form>
          {step1 ? <Button>Next</Button> : null}
        </Wrapper>
      </Section>
    </Layout>
  );
};

export default checkout;
