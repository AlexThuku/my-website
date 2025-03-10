import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IconGitHub, IconExternal, IconFolder } from '../layout/Icon';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  margin-top: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const StyledProjectInner = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  border-radius: var(--border-radius);
  background-color: ${props => props.theme.cardBackground};
  padding: 2rem 1.75rem;
  height: 100%;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-7px);
  }
`;

const StyledProject = styled(motion.div)`
  position: relative;
  cursor: default;
  height: 100%;
`;

const StyledProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledFolder = styled.div`
  color: var(--green);
  svg {
    width: 40px;
    height: 40px;
  }
`;

const StyledProjectLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: -10px;
  color: ${props => props.theme.text};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 7px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledProjectName = styled.h3`
  margin: 0 0 10px;
  color: ${props => props.theme.headings};
  font-size: var(--fz-xxl);
`;

const StyledProjectDescription = styled.div`
  color: ${props => props.theme.text};
  font-size: 17px;
  min-height: 80px;
`;

const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: ${props => props.theme.text};
    line-height: 1.75;
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const FeaturedProject = styled(motion.div)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const StyledFeaturedImg = styled.div`
  grid-column: 1 / 8;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }

  a {
    width: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  }

  .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);

    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(50%);
    }
  }
`;

const StyledFeaturedContent = styled.div`
  position: relative;
  grid-column: 7 / -1;
  grid-row: 1 / -1;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: ${props => props.theme.cardBackground};
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 25px 25px 20px;
  }
`;

const StyledFeaturedProjectLinks = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${props => props.theme.text};

  a {
    padding: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StyledProjectOverline = styled.p`
  margin: 10px 0;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;

const StyledFeaturedTitle = styled.h3`
  color: ${props => props.theme.headings};
  font-size: clamp(24px, 5vw, 28px);
  margin: 0 0 20px;

  @media (min-width: 768px) {
    margin: 0 0 20px;
  }
`;

const StyledFeaturedDescription = styled.div`
  position: relative;
  z-index: 2;
  color: ${props => props.theme.text};
  font-size: 18px;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: ${props => props.theme.cardBackground};
  
  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: transparent;
  }

  p {
    margin: 0;
  }
`;

const StyledFeaturedTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    margin: 0 20px 5px 0;
    color: ${props => props.theme.text};
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    li {
      margin: 0 10px 5px 0;
      color: ${props => props.theme.text};
    }
  }
`;

const Projects = () => {
  // Placeholder featured projects
  const featuredProjects = [
    {
      title: 'Featured Project Title',
      description: 'A brief description of the project will go here. This is a placeholder for your featured project description.',
      tech: ['Go', 'Kubernetes', 'Docker', 'AWS'],
      github: '#',
      external: '#',
      image: null, // You can add actual image path later
    },
    {
      title: 'Second Featured Project',
      description: 'Another placeholder for your featured project description. Describe what the project does, technologies used, and challenges solved.',
      tech: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      github: '#',
      external: '#',
      image: null, // You can add actual image path later
    },
  ];

  // Placeholder other projects
  const otherProjects = [
    {
      title: 'Project One',
      description: 'A short description of your project will go here. This is a placeholder for your future project.',
      tech: ['Go', 'MongoDB', 'Docker'],
      github: '#',
      external: '#',
    },
    {
      title: 'Project Two',
      description: 'Another placeholder for a project description. Describe the stack, your role, and any challenges solved.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      github: '#',
      external: '#',
    },
    {
      title: 'Project Three',
      description: 'This is a placeholder description for your third project. Add details about this project later.',
      tech: ['Python', 'Flask', 'AWS Lambda'],
      github: '#',
      external: '#',
    },
    {
      title: 'Project Four',
      description: 'A brief explanation of what this project does, technologies used, and your role in it.',
      tech: ['React', 'Next.js', 'Firebase'],
      github: '#',
      external: '#',
    },
    {
      title: 'Project Five',
      description: 'More details about this amazing project of yours will go here once you complete it.',
      tech: ['Go', 'RESTful API', 'PostgreSQL'],
      github: '#',
      external: '#',
    },
    {
      title: 'Project Six',
      description: 'A short explanation of how you contributed to this project and what technologies were used.',
      tech: ['Kubernetes', 'Docker', 'CI/CD'],
      github: '#',
      external: '#',
    },
  ];

  return (
    <StyledProjectsSection id="projects">
      <motion.h2 
        className="numbered-heading" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Some Things I've Built
      </motion.h2>

      <div>
        {featuredProjects.map((project, i) => (
          <FeaturedProject 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StyledFeaturedImg>
              <a href={project.external || project.github || '#'}>
                <div className="img">
                  {/* Placeholder for project image */}
                  <svg height="100%" width="100%" viewBox="0 0 500 300">
                    <rect width="500" height="300" fill="#d8d8d8" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#555">
                      Project Screenshot
                    </text>
                  </svg>
                </div>
              </a>
            </StyledFeaturedImg>

            <StyledFeaturedContent>
              <StyledProjectOverline>Featured Project</StyledProjectOverline>
              <StyledFeaturedTitle>{project.title}</StyledFeaturedTitle>
              <StyledFeaturedDescription>
                <p>{project.description}</p>
              </StyledFeaturedDescription>
              
              <StyledFeaturedTechList>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </StyledFeaturedTechList>

              <StyledFeaturedProjectLinks>
                {project.github && (
                  <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                    <IconGitHub />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer">
                    <IconExternal />
                  </a>
                )}
              </StyledFeaturedProjectLinks>
            </StyledFeaturedContent>
          </FeaturedProject>
        ))}
      </div>

      <motion.h2 
        className="numbered-heading" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Other Noteworthy Projects
      </motion.h2>

      <StyledProjectsGrid>
        {otherProjects.map((project, i) => (
          <StyledProject
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <StyledProjectInner>
              <StyledProjectHeader>
                <StyledFolder>
                  <IconFolder />
                </StyledFolder>
                <StyledProjectLinks>
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                      <IconGitHub />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer">
                      <IconExternal />
                    </a>
                  )}
                </StyledProjectLinks>
              </StyledProjectHeader>

              <StyledProjectName>{project.title}</StyledProjectName>
              <StyledProjectDescription>{project.description}</StyledProjectDescription>
              
              <StyledTechList>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </StyledTechList>
            </StyledProjectInner>
          </StyledProject>
        ))}
      </StyledProjectsGrid>
    </StyledProjectsSection>
  );
};

export default Projects;
