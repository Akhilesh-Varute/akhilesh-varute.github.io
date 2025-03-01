import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Terminal, X } from 'lucide-react';
import {
  NavContainer,
  NavLinksContainer,
  NavLink,
  NavLinks,
  Logo,
  MobileLogo,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
  MobileCloseButton,
  CodeBadge,
  LogoText,
  NavProgressBar
} from './styles';

const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'Projects', href: '#projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Contact', href: '#contact' }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const badges = ['{ DEV }', '{ A.I }', '{ AWS }', '{ GEN }'];

  // Cycle through badges on interval
  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % badges.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = document.querySelectorAll('section[id]');

      let found = false;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (!found && scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.getAttribute('id'));
          found = true;
        }
      });

      // If we're at the top or no section found, set home as active
      if (window.scrollY < 100 || !found) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <NavContainer
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
      >
        <NavLinksContainer>
          {/* Logo with name - visible on all screen sizes */}
          <Logo>
            <CodeBadge>
              {badges[badgeIndex]}
            </CodeBadge>
            <LogoText>AKHILESH</LogoText>
          </Logo>

          {!isMobile ? (
            // Desktop navigation links
            <NavLinks>
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={activeSection === item.href.slice(1)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </NavLink>
              ))}
            </NavLinks>
          ) : (
            // Mobile menu button
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </MobileMenuButton>
          )}
        </NavLinksContainer>
        <NavProgressBar
          style={{
            width: `${(activeSection === 'home' ? 0 :
              activeSection === 'projects' ? 25 :
                activeSection === 'skills' ? 50 :
                  activeSection === 'experience' ? 75 : 100)}%`
          }}
        />
      </NavContainer>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu>
            <MobileLogo>
  <CodeBadge style={{ fontSize: '0.9rem', marginRight: '6px' }}>
    {badges[badgeIndex]}
  </CodeBadge>
  <LogoText style={{ fontSize: '0.9rem' }}>AKHILESH</LogoText>
</MobileLogo>

            <MobileCloseButton
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label="Close menu"
            >
              <X size={20} />
            </MobileCloseButton>

            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                active={activeSection === item.href.slice(1)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.1 + index * 0.08,
                    duration: 0.3
                  }
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  transition: {
                    duration: 0.2,
                    delay: (navItems.length - index) * 0.04
                  }
                }}
                whileHover={{ x: 5 }}
              >
                {item.title}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;