import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: ${props => props.theme.headings};
  }

  .contact-info {
    margin-top: 50px;
    width: 100%;
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: ${props => props.theme.text};
  }

  .contact-method {
    margin: 15px 0;
    
    a {
      color: var(--green);
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;
    display: inline-block;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <motion.h2 
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        What's Next?
      </motion.h2>
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Get In Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hello,
          I'll do my best to get back to you!
        </p>
        <div className="contact-info">
          <div className="contact-method">
            <strong>Email:</strong> <a href="mailto:alexmwangithuku001@gmail.com">alexmwangithuku001@gmail.com</a>
          </div>
          <div className="contact-method">
            <strong>Phone:</strong> <a href="tel:+254769089074">+254 769 089 074</a>
          </div>
        </div>
        <a
          className="email-link"
          href="mailto:alexmwangithuku001@gmail.com"
          rel="noreferrer"
        >
          Say Hello
        </a>
      </motion.div>
    </StyledContactSection>
  );
};

export default Contact;
