import React from 'react';
import { ThemeProvider } from './styles/Theme';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
