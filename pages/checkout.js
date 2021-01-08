import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import { useForm } from "react-hook-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { handleCaptureCheckout } from "../store/cartActions";
import commerce from "../commerce/commerce";
import { Review, Confirmation } from "../components";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  Section,
  Form,
  Submit,
  Wrapper,
  Input,
  Title,
  StepSection,
  Pa,
  Hr,
  Span,
  InputWrapper,
  Display1,
  Display2,
  Button,
} from "../globalStyles/global.elements";

const checkout = () => {
  const { captureOrder, processingOrder, orderError } = useSelector(
    (store) => store
  );
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [token, setToken] = useState(null);
  const [shippingData, setShippingData] = useState(null);
  const { cart } = useSelector((store) => store);
  const stripePromise = loadStripe(process.env.stripekey);

  function handleStep(e) {
    e.preventDefault();
    setStep1(!step1);
    setStep2(!step2);
  }
  function handleForm(data) {
    setStep1(!step1);
    setStep2(!step2);
    setShippingData(data);
  }
  async function handlePayment(e, elements, stripe) {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });
    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: token.live.line_items,
        customer: {
          firstname: shippingData.firstname,
          lastname: shippingData.lastname,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address,
          town_city: "San Francisco",
          county_state: "US-CA",
          postal_zip_code: "94103",
          country: "US",
        },
        billing: {
          name: "John Doe",
          street: "234 Fake St",
          town_city: "San Francisco",
          county_state: "US-CA",
          postal_zip_code: "94103",
          country: "US",
        },
        fulfillment: { shipping_method: "ship_7RyWOwmK5nEa2V" },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      dispatch(handleCaptureCheckout(token.id, orderData));
    }
  }

  useEffect(
    function () {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          setToken(token);
        } catch (error) {}
      };
      generateToken();
    },
    [cart]
  );

  useEffect(function () {
    dispatch({ type: "RESET" });
  }, []);

  const Payment = () => (
    <Display2 step2={step2}>
      {token && <Review data={token} />}
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form
              style={{ width: "90%", margin: "auto", paddingTop: "5%" }}
              onSubmit={(e) => handlePayment(e, elements, stripe)}
            >
              <CardElement />
              <br />
              <div
                style={{
                  display: "flex",
                }}
              >
                <Button onClick={handleStep}>back</Button>
                <Button type="submit">Pay</Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </Display2>
  );

  return (
    <Layout>
      {processingOrder ? (
        <Section>
          <Wrapper>
            {" "}
            {captureOrder && <Confirmation data={captureOrder} />}{" "}
            {orderError && <h1>there was an error</h1>}
          </Wrapper>
        </Section>
      ) : (
        <Section step1={step1}>
          <Wrapper>
            <Title>Checkout</Title>
            <StepSection>
              <Pa fontSize="16px">
                {" "}
                {step1 ? (
                  <AiOutlineCheckCircle style={{ color: "lightblue" }} />
                ) : (
                  <AiFillCheckCircle />
                )}
                Shipping address
              </Pa>
              <Hr />
              <Pa fontSize="16px">
                {" "}
                <AiOutlineCheckCircle
                  style={{
                    color: step2 ? "lightblue" : "black",
                  }}
                />{" "}
                Payment details
              </Pa>
            </StepSection>
            {step1 ? (
              <Pa fontSize="20px">Delivery information</Pa>
            ) : (
              <Pa fontSize="20px">Payment information</Pa>
            )}
            <Form onSubmit={handleSubmit(handleForm)}>
              <Display1 step1={step1}>
                <InputWrapper>
                  <Input
                    placeholder="First name"
                    name="firstname"
                    ref={register({ required: true })}
                  />
                  {errors.name && <Span>This field is required</Span>}
                </InputWrapper>
                <InputWrapper>
                  <Input
                    placeholder="Last name"
                    name="lastname"
                    ref={register({ required: true })}
                  />
                  {errors.name && <Span>This field is required</Span>}
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
                    name="zipcode"
                    ref={register({
                      required: true,
                      minLength: 3,
                      maxLength: 6,
                    })}
                  />
                  {errors.zipCode && <Span>This field is required</Span>}
                </InputWrapper>
                <Submit type="submit" />
              </Display1>
            </Form>
            <Payment />
          </Wrapper>
        </Section>
      )}
    </Layout>
  );
};

export default checkout;
