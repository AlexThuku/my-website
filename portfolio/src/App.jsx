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
  const [activeSection, setActiveSection] = useState('');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
            
            // Only update URL hash after initial load is complete
            if (!isInitialLoad) {
              // Update URL hash for better indexing
              window.history.replaceState(null, null, id === 'hero' ? '/' : `#${id}`);
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
          title: 'About Alex Thuku',
          description: 'Software engineer specializing in backend systems, microservices, and DevOps solutions. Learn about my background and expertise.',
          section: 'about'
        };
      case 'experience':
        return {
          title: 'Experience | Alex Thuku',
          description: 'Alex Thuku\'s professional experience as a software engineer with expertise in Go and cloud technologies.',
          section: 'experience'
        };
      case 'projects':
        return {
          title: 'Projects | Alex Thuku',
          description: 'Explore Alex Thuku\'s software engineering projects focused on backend development, microservices, and DevOps solutions.',
          section: 'projects'
        };
      case 'contact':
        return {
          title: 'Contact | Alex Thuku',
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
