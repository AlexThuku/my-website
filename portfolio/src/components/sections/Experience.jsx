import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledExperienceSection = styled.section`
  max-width: 900px;

  .inner {
    display: flex;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 50px);
    margin-left: -25px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    width: calc(100% + 50px);
    margin-left: -25px;
  }
`;

const StyledTabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid ${props => props.theme.lineColor};
  background-color: transparent;
  color: ${props => (props.isActive ? 'var(--green)' : props.theme.text)};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;
  transition: var(--transition);

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }

  &:hover,
  &:focus {
    background-color: var(--green-tint);
    color: var(--green);
  }

  ${props =>
    props.isActive &&
    `
    background-color: var(--green-tint);
    color: var(--green);
    border-left: 2px solid var(--green);

    &:hover,
    &:focus {
      background-color: var(--green-tint);
    }
  `}
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--green);
  transform: translateY(
    calc(${props => props.activeTabId} * var(--tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: var(--tab-width);
    height: 2px;
    margin-left: 50px;
    transform: translateX(
      calc(${props => props.activeTabId} * var(--tab-width))
    );
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);

    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  }

  h3 {
    margin-bottom: 5px;
    font-size: var(--fz-xxl);
    font-weight: 500;

    .company {
      color: var(--green);
    }
  }

  .range {
    margin-bottom: 20px;
    color: ${props => props.theme.text};
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const tabs = useRef([]);

  // Sample job data - replace with your actual experience
  const jobsData = [
    {
      title: 'Senior Backend Engineer',
      company: 'Tech Company',
      url: '#',
      range: 'March 2022 - Present',
      duties: [
        'Designed and implemented microservices using Go and modern cloud technologies',
        'Led the migration from monolithic architecture to distributed systems using Kubernetes',
        'Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment',
        'Optimized database queries and improved API performance by 40%'
      ]
    },
    {
      title: 'Backend Developer',
      company: 'Another Company',
      url: '#',
      range: 'January 2020 - February 2022',
      duties: [
        'Developed RESTful APIs using Python and Django',
        'Managed PostgreSQL databases and implemented data models',
        'Implemented message queue systems using RabbitMQ',
        'Collaborated with frontend teams to integrate APIs and improve user experience'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'First Company',
      url: '#',
      range: 'June 2018 - December 2019',
      duties: [
        'Built and maintained backend services with Node.js',
        'Implemented authentication and authorization systems',
        'Created data pipelines for analytics',
        'Contributed to open-source projects and internal libraries'
      ]
    }
  ];

  // Focus on tab change
  useEffect(() => {
    if (tabs.current[activeTabId]) {
      tabs.current[activeTabId].focus();
    }
  }, [activeTabId]);

  return (
    <StyledExperienceSection id="experience">
      <motion.h2 
        className="numbered-heading" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Where I've Worked
      </motion.h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {jobsData.map((job, i) => (
            <StyledTabButton
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
              ref={el => (tabs.current[i] = el)}
            >
              <span>{job.company}</span>
            </StyledTabButton>
          ))}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {jobsData.map((job, i) => (
            <StyledTabContent
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${i}`}
              aria-hidden={activeTabId !== i}
              hidden={activeTabId !== i}
            >
              <h3>
                <span>{job.title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  <a href={job.url} target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                </span>
              </h3>

              <p className="range">{job.range}</p>

              <ul>
                {job.duties.map((duty, j) => (
                  <li key={j}>{duty}</li>
                ))}
              </ul>
            </StyledTabContent>
          ))}
        </motion.div>
      </div>
    </StyledExperienceSection>
  );
};

export default Experience;
