import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h2 {
    margin-top: 10px;
    color: ${props => props.theme.headings};
    line-height: 0.9;
  }

  h3 {
    margin-top: 10px;
    color: ${props => props.theme.text};
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
    color: ${props => props.theme.text};
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

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Alex Thuku.</h2>;
  const three = <h3 className="big-heading">Software Engineer.</h3>;
  const four = (
    <p>
      I'm a software engineer specializing in building backend systems, microservices, and DevOps solutions. 
      Currently, I'm focused on building accessible, performant applications with Go and cloud technologies.
    </p>
  );
  const five = (
    <a
      className="email-link"
      href="#contact"
      rel="noreferrer">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
