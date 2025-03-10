import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../styles/Theme';
import { IconSun, IconMoon } from './Icon';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: ${props => props.theme.navBackground};
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  box-shadow: ${props => props.theme.navShadow};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: ${props => props.theme.text};
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;
`;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 42px;
    height: 42px;
    font-size: var(--fz-heading);
    font-weight: 700;
    color: var(--green);
    
    &:hover,
    &:focus {
      svg {
        fill: var(--green-tint);
      }
    }

    svg {
      fill: none;
      transition: var(--transition);
      user-select: none;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled.a`
  padding: 10px;
  margin: 0 5px;
  text-decoration: none;
  color: ${props => props.theme.text};
  font-size: var(--fz-sm);
  font-family: var(--font-mono);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: var(--green);
  }

  counter-increment: item 1;

  &:before {
    content: '0' counter(item) '.';
    margin-right: 5px;
    color: var(--green);
    font-size: var(--fz-xxs);
    text-align: right;
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: transparent;
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  margin-left: 15px;

  &:hover {
    background: var(--lightest-navy);
    color: var(--green);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
`;

const StyledHamburger = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 24px;
`;

const StyledHamburgerBox = styled.div`
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 24px;
  
  &:hover {
    cursor: pointer;
  }
`;

const StyledHamburgerInner = styled.div`
  background-color: ${({ menuOpen, theme }) => (menuOpen ? 'transparent' : 'var(--green)')};
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 3px;
  top: 50%;
  transition: all 0.3s ease;

  &:before,
  &:after {
    content: '';
    display: block;
    background-color: var(--green);
    position: absolute;
    left: auto;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &:before {
    width: ${props => (props.menuOpen ? '100%' : '100%')};
    top: ${props => (props.menuOpen ? '0' : '-10px')};
    transform: ${props => (props.menuOpen ? 'rotate(45deg)' : 'none')};
  }

  &:after {
    width: ${props => (props.menuOpen ? '100%' : '100%')};
    bottom: ${props => (props.menuOpen ? '0' : '-10px')};
    transform: ${props => (props.menuOpen ? 'rotate(-45deg)' : 'none')};
  }
`;

const StyledMobileMenu = styled(motion.aside)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: ${props => props.theme.cardBackground};
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform-origin: right;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${props => props.theme.text};
    font-family: var(--font-mono);
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));

      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      text-decoration-skip-ink: auto;
      color: ${props => props.theme.text};
      padding: 3px 20px 20px;
      transition: all 0.25s ease;

      &:hover, &:focus {
        color: var(--green);
      }

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: var(--green);
        font-size: var(--fz-sm);
      }
    }
  }
`;

const NavLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Contact', url: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('none');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside of mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen) {
        const menu = document.querySelector('.mobile-menu');
        const hamburger = document.querySelector('.hamburger');
        if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>
          <a href="#" aria-label="home">
            AT
          </a>
        </StyledLogo>

        <StyledLinks>
          <nav>
            {NavLinks.map(({ name, url }) => (
              <StyledLink key={name} href={url}>
                {name}
              </StyledLink>
            ))}
          </nav>

          <StyledButton onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </StyledButton>
        </StyledLinks>

        <StyledHamburgerButton
          onClick={toggleMenu}
          aria-label="Menu"
          className="hamburger"
        >
          <StyledHamburger>
            <StyledHamburgerBox>
              <StyledHamburgerInner menuOpen={menuOpen} />
            </StyledHamburgerBox>
          </StyledHamburger>
        </StyledHamburgerButton>

        <AnimatePresence>
          {menuOpen && (
            <StyledMobileMenu
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <nav>
                <ol>
                  {NavLinks.map(({ name, url }) => (
                    <li key={name}>
                      <a href={url} onClick={() => setMenuOpen(false)}>
                        {name}
                      </a>
                    </li>
                  ))}
                </ol>
                
                <StyledButton onClick={toggleTheme} aria-label="Toggle Theme">
                  {theme === 'dark' ? <IconSun /> : <IconMoon />}
                </StyledButton>
              </nav>
            </StyledMobileMenu>
          )}
        </AnimatePresence>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
