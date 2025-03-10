import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Icon, IconGitHub, IconLinkedIn, IconTwitter, IconCodepen } from './Icon';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledCredit = styled.div`
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1.5;
  margin-top: 10px;
  color: ${props => props.theme.text};

  a {
    padding: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  const socialMedia = [
    {
      name: 'GitHub',
      url: 'https://github.com/alexthuku',
      icon: <IconGitHub />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alexthuku',
      icon: <IconLinkedIn />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/alexthuku',
      icon: <IconTwitter />,
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/alexthuku',
      icon: <IconCodepen />,
    },
  ];

  return (
    <StyledFooter>
      <StyledSocialLinks>
        {socialMedia.map(({ name, url, icon }) => (
          <motion.div key={name} whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Icon href={url}>{icon}</Icon>
          </motion.div>
        ))}
      </StyledSocialLinks>

      <StyledCredit>
        <div>© 2025 Alex Thuku. All rights reserved.</div>
        <div>
          <a href="https://github.com/alexthuku/portfolio" target="_blank" rel="noopener noreferrer">
            Designed & Built by Alex Thuku
          </a>
        </div>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
