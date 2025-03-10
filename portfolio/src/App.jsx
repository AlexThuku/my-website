import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import SEO from './components/SEO';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Ensure the page starts at the top on initial load
  useEffect(() => {
    // If no hash is present, force scroll to top and set hero as active
    if (window.location.hash === '') {
      window.scrollTo(0, 0);
      setActiveSection('hero');
    } else {
      // If there's a hash, scroll to that section
      const sectionId = window.location.hash.substring(1);
      setActiveSection(sectionId);
    }
  }, []);

  // Track active section for SEO updates
  useEffect(() => {
    // Set a timeout to prevent the observer from affecting initial page load
    const initialLoadTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 3000); // Wait longer than the loading screen (2000ms) to ensure proper initialization

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isInitialLoad) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
            
            // Only update URL hash after initial load is complete
            if (!isInitialLoad) {
              // Only update URL hash if it's not the initial load and we're not on the hero section
              // If we're on hero section, keep the URL clean without a hash
              if (id !== 'hero') {
                window.history.replaceState(null, null, `#${id}`);
              } else {
                // Remove any hash if we're at the hero section
                if (window.location.hash) {
                  window.history.replaceState(null, null, '/');
                }
              }
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Wait a bit before observing sections to ensure the page is properly rendered
    const observeTimer = setTimeout(() => {
      // Observe all section elements
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(initialLoadTimer);
      clearTimeout(observeTimer);
    };
  }, [isInitialLoad]);

  // SEO title and description based on active section
  const getSeoProps = () => {
    switch (activeSection) {
      case 'about':
        return {
          title: 'About',
          description: 'Software engineer specializing in backend systems, microservices, and DevOps solutions. Learn about my background and expertise.',
          section: 'about'
        };
      case 'experience':
        return {
          title: 'Experience',
          description: 'Alex Thuku\'s professional experience as a software engineer with expertise in Go and cloud technologies.',
          section: 'experience'
        };
      case 'projects':
        return {
          title: 'Projects',
          description: 'Explore Alex Thuku\'s software engineering projects focused on backend development, microservices, and DevOps solutions.',
          section: 'projects'
        };
      case 'contact':
        return {
          title: 'Contact',
          description: 'Get in touch with Alex Thuku, software engineer specializing in backend systems, microservices, and DevOps solutions.',
          section: 'contact'
        };
      default:
        return {
          title: 'Alex Thuku | Software Engineer',
          description: 'Software engineer specializing in building backend systems, microservices, and DevOps solutions with Go and cloud technologies.',
          section: ''
        };
    }
  };

  return (
    <ThemeProvider>
      <SEO {...getSeoProps()} />
      <GlobalStyle />
      <Layout>
        <Hero id="hero" />
        <About id="about" />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
