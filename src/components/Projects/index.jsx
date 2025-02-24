// components/Projects/index.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Activity, Database } from 'lucide-react';
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
    title: "AI-Based Automation Platform",
    description: "Built and launched AI-driven products that significantly improved automation for internal processes, reducing manual effort and increasing operational efficiency.",
    impact: "60% Manual Effort Reduction",
    tech: ["Gen AI", "Python", "React.js", "MongoDB"],
    icon: Brain
  },
  {
    title: "Development Workflow Optimization",
    description: "Implemented automated solutions for repetitive tasks, significantly improving development speed and workflow efficiency while reducing debugging time.",
    impact: "40% Faster Debugging",
    tech: ["CI/CD", "Docker", "Kubernetes", "FastAPI"],
    icon: Activity
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
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;