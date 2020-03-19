import React from "react";
import { connect, css, styled } from "frontity";

const Contact = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <Title>Send me a message</Title>
          <Description>Wanna ping me? Use the form below</Description>
        </Heading>

        <FormContainer>
          <Form>

            <Row>
              <InputGroup>
                <Label>Your Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                />
              </InputGroup>

              <InputGroup>
                <Label>Your Email Address</Label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Row>

            <InputGroup>
              <Label>Your Message</Label>
              <TextArea
                type="text"
                rows="3"
                placeholder="How can I help you?"
              />
            </InputGroup>

            <SubmitContainer>
              <SubmitButton type="submit">Get In Touch</SubmitButton>
            </SubmitContainer>

          </Form>
        </FormContainer>

      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  transform: translateY(18em);
`;

const Container = styled.div`
  width: 1100px;
  height: 100%;
  padding: 4.5em 2em;
  background: #fff;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 3em;
  line-height: 35px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
`;

const Description = styled.p`
  margin-top: 0.1em;
`;

const FormContainer = styled.div`
  padding: 0 3em;
`;

const Form = styled.form``;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  & > div {
    &:first-child {
      margin-right: 3em;
    }
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: .3em;
  font-size: .8em;
  color: rgba(20, 22, 24, 0.33);
`;

const InputGroup = styled.div`
  width: 100%;
  margin: .8em 0;
`;

const inputStyles = css`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--primary-color);
  padding: 10px 0;
  outline: none;
  font-size: .8em;
  color: var(--primary-color);

  &::placeholder {
    color: rgba(20, 22, 24, 0.62);
    font-size: .7rem;
  }
`;

const TextArea = styled.textarea`
  ${inputStyles}
  resize: none;
`;

const Input = styled.input`
  ${inputStyles}
`;

const SubmitButton = styled.button`
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #fff;
  padding: 0 2.1em;
  height: 44px;
  cursor: pointer;
  font-size: .8em;
`;

const SubmitContainer = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: center;
`;

export default connect(Contact);
