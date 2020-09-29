import React from "react";
import Title from "./globals/Title";
import styled from "styled-components";

export default function Contact() {
  return (
    <Section className="section">
      <div className="container">
        <Title title="contact" subtitle="soulstamina" />
        <div className="columns is-centered">
          <form
            action="https://formspree.io/mgenkpzr"
            method="POST"
            className="column is-two-thirds-tablet is-half-desktop"
          >
            {/* name */}
            <div className="field">
              <label htmlFor="name" className="label">
                name
              </label>
              <input
                type="text"
                className="input"
                name="name"
                id="name"
                placeholder="name"
              />
            </div>
            {/* email */}
            <div className="field">
              <label htmlFor="name" className="label">
                email
              </label>
              <input
                type="text"
                className="input"
                name="email"
                id="email"
                placeholder="email"
              />
            </div>
            {/* message */}
            <div className="field">
              <label htmlFor="message" className="label">
                message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="message"
                className="textarea"
              ></textarea>
            </div>
            {/* submit */}
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <Button type="submit" className="button is-primary">
                  submit
                </Button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  label {
    font-family: "Heebo", sans-serif;
    font-weight: 300;
    display: none;
  }

  .field {
    margin: 2em 0;
  }
`;

const Button = styled.button`
  padding: 0em 0.4em 0 0.3em;
  border: none;
  background: #bc9f75 !important;
  color: #fff8ee !important;
  cursor: pointer;
  transition: ease-out 200ms;
  font-size: 1.5rem;

  &:hover {
    background: #bd9762 !important;
    transition: ease-in-out 200ms;
  }
`;
