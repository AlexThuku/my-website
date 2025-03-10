import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 150px;

  @media (max-width: 1080px) {
    padding: 200px 100px;
  }
  @media (max-width: 768px) {
    padding: 150px 50px;
  }
  @media (max-width: 480px) {
    padding: 125px 25px;
  }
`;

// Animated loader
const StyledLoader = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

const Logo = styled(motion.div)`
  color: var(--green);
  font-size: 4rem;
  font-weight: 700;
`;

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Scroll to top when page loads and after loading screen
      window.scrollTo(0, 0);
      
      // Force the URL to be without hash on initial load
      if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="root">
      <AnimatePresence>
        {isLoading ? (
          <StyledLoader
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AT
            </Logo>
          </StyledLoader>
        ) : (
          <StyledContent>
            <Navbar />
            <StyledMain>{children}</StyledMain>
            <Footer />
          </StyledContent>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
