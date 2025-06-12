import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Activity, Database, Workflow } from 'lucide-react';
import {
  ProjectsSection,
  ProjectsContainer,
  SectionHeader,
  Title,
  Subtitle,
  ProjectsGrid,
  ProjectCard,
  IconContainer,
  ProjectTitle,
  ProjectImpact,
  ProjectDescription,
  TechStack,
  TechTag
} from './styles';

const projectsData = [
  {
    title: "Enterprise Cloud Platform",
    description: "Successfully launched and managed an enterprise-level application on AWS, implementing cloud-native solutions and ensuring high availability and scalability.",
    impact: "Successful AWS Deployment",
    tech: ["AWS", "Cloud-native", "Docker", "Kubernetes"],
    icon: Cloud
  },
  {
    title: "Multi-Cloud Management System",
    description: "Developing a sophisticated multi-cloud application that functions as a secondary AWS environment, enabling seamless integration and management across multiple cloud platforms.",
    impact: "Enhanced Cloud Flexibility",
    tech: ["AWS", "Multi-cloud", "API Development", "Node.js"],
    icon: Database
  },
  {
    title: "AI-Powered Developer Assistant",
    description: "Created an AI-driven assistant to provide real-time support for development tasks and cloud configurations, optimizing team workflows.",
    impact: "Enhanced Workflow Efficiency",
    tech: ["Gen AI", "Python", "AWS", "WebSocket"],
    icon: Brain
  },
  {
    title: "Development Workflow Optimization",
    description: "Implemented automated solutions for repetitive tasks, significantly improving development speed and workflow efficiency while reducing debugging time.",
    impact: "40% Faster Debugging",
    tech: ["CI/CD", "Docker", "Kubernetes", "FastAPI"],
    icon: Activity
  },
  {
    title: "Business Automation Solutions",
    description: "Developed custom automation workflows for small businesses to streamline lead generation, CRM integrations, and operational processes. Built API-driven systems to automate customer outreach and data reporting, enhancing productivity and scalability.",
    impact: "40% Time Savings",
    tech: ["JavaScript", "Node.js", "APIs", "Cloud"],
    icon: Workflow
  },
  {
    title: "Contact Form Lead Automation",
    description: "Built a scalable web application to automate lead capture and management through contact forms, integrating with CRMs and email systems. Deployed on Vercel for high performance and reliability, streamlining client outreach for small businesses.",
    impact: "50% Faster Lead Capture",
    tech: ["JavaScript", "Node.js", "APIs", "Vercel"],
    icon: Workflow,
    link: "https://contact-form-automation.vercel.app/"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Impact Driven
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming challenges into innovative solutions with measurable results
          </Subtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <IconContainer>
                <project.icon size={32} strokeWidth={1.5} />
              </IconContainer>

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectImpact>{project.impact}</ProjectImpact>
              <ProjectDescription>{project.description}</ProjectDescription>

              <TechStack>
                {project.tech.map((tech, i) => (
                  <TechTag
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {tech}
                  </TechTag>
                ))}
              </TechStack>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ marginTop: '1rem', display: 'inline-block', color: 'var(--primary)', textDecoration: 'underline' }}
                >
                  View Project
                </motion.a>
              )}
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;