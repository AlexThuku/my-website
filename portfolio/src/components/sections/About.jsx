import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(140px, 200px));
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(1, minmax(200px, 1fr));
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);
      
      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${props => props.theme.background};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = ({ id }) => {
  const skills = [
    'Go (Golang)',
    'Python',
    'JavaScript',
    'SQL/NoSQL',
    'Bash/Shell',
    'RESTful APIs',
    'gRPC',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
    'Google Cloud',
    'Microservices',
    'Message Queues',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Jenkins',
    'GitLab CI',
    'GitHub Actions',
    'Git'
  ];

  return (
    <StyledAboutSection id={id}>
      <motion.h2 
        className="numbered-heading" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="inner">
        <StyledText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Hello! I'm Alex, a software engineer passionate about building efficient, 
              scalable, and maintainable backend systems and microservices. My journey in tech began 
              with my fascination for solving complex problems and creating systems that make a difference.
            </p>

            <p>
              I specialize in developing high-performance applications using Go and Python, with a strong
              focus on cloud-native technologies and DevOps practices. My experience spans across designing,
              implementing, and maintaining backend services that power modern applications.
            </p>

            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </motion.div>

          <motion.ul 
            className="skills-list"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </motion.ul>
        </StyledText>

        <StyledPic>
          <motion.div 
            className="wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="img">
              {/* You can replace this with an actual image later */}
              <svg height="300" width="300" viewBox="0 0 300 300">
                <rect width="300" height="300" fill="#d8d8d8" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#555">
                  Profile Picture
                </text>
              </svg>
            </div>
          </motion.div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
