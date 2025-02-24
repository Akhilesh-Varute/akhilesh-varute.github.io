// components/Hero/index.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Code, Server } from 'lucide-react';
import {
  HeroContainer,
  Background,
  Grid,
  GridItem,
  Content,
  Badge,
  HeroTitle,
  TitleHighlight,
  SubtitleContainer,
  Subtitle,
  TypingText,
  StatsContainer,
  StatItem,
  StatContent,
  StatNumber,
  StatLabel,
  CTAContainer,
  CTAButton,
  SocialLinks,
  SocialLink,
  SocialLabel
} from './styles';

const Hero = () => {
  const iconProps = {
    size: 24,
    className: "hero-icon",
    strokeWidth: 1.5
  };

  return (
    <HeroContainer id="home">
      <Background>
        <Grid>
          {[...Array(50)].map((_, i) => (
            <GridItem key={i} />
          ))}
        </Grid>
      </Background>

      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Terminal {...iconProps} />
          <span>Software Developer</span>
        </Badge>

        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Innovating with
          <TitleHighlight> Cloud & AI</TitleHighlight>
        </HeroTitle>

        <SubtitleContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Subtitle>
            Results-driven developer specializing in{' '}
            <TypingText>Gen AI, cloud-native solutions, and full-stack development</TypingText>
          </Subtitle>
        </SubtitleContainer>

        <StatsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <StatItem>
            <Code {...iconProps} />
            <StatContent>
              <StatNumber>40%</StatNumber>
              <StatLabel>Faster Debugging</StatLabel>
            </StatContent>
          </StatItem>
          <StatItem>
            <Server {...iconProps} />
            <StatContent>
              <StatNumber>60%</StatNumber>
              <StatLabel>Process Automation</StatLabel>
            </StatContent>
          </StatItem>
        </StatsContainer>

        <CTAContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <CTAButton href="#contact" $isPrimary>
            Start a Project
          </CTAButton>
          <CTAButton href="#projects">
            View Portfolio
          </CTAButton>
        </CTAContainer>

        <SocialLinks
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {[
            { icon: Github, link: "https://github.com/Akhilesh-Varute", label: "GitHub" },
            { icon: Linkedin, link: "https://www.linkedin.com/in/akhileshvarute", label: "LinkedIn" },
            { icon: Mail, link: "mailto:akhileshvarute23@gmail.com", label: "Email" }
          ].map((social, index) => (
            <SocialLink
              key={social.label}
              href={social.link}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <social.icon {...iconProps} />
              <SocialLabel>{social.label}</SocialLabel>
            </SocialLink>
          ))}
        </SocialLinks>
      </Content>
    </HeroContainer>
  );
};

export default Hero;