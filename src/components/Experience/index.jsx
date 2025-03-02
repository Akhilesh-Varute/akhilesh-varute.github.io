import React from 'react';
import { motion } from 'framer-motion';
import {
  ExperienceSection,
  ExperienceContainer,
  SectionHeader,
  Title,
  Subtitle,
  Timeline,
  TimelineItem,
  TimelineConnector,
  ExperienceCard,
  Period,
  Role,
  Company,
  AchievementsList,
  AchievementItem
} from './styles';

const experienceData = [
  {
    period: "June 2024 - Present",
    role: "Software Developer",
    company: "Expert Cloud Consulting",
    achievements: [
      "Managing 3+ projects simultaneously with high customer satisfaction",
      "Developed Gen AI-based products and cloud-native solutions for enhanced automation",
      "Reduced debugging time by 40%, accelerating product release cycles",
      "Built a next-generation AWS integration platform for internal applications",
      "Accelerated deployment cycles by 75% using cloud-native architectures"
    ]
  },
  {
    period: "Sept 2023 - Feb 2024",
    role: "Student",
    company: "Sunbeam Infotech",
    achievements: [
      "Completed Post Graduate-Diploma in Advanced Computing",
      "Focused on modern full-stack development and Agile methodologies",
      "Built multiple projects using React.js, Node.js, and Docker",
      "Learned and implemented DevOps practices"
    ]
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer
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
            Professional Journey
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building innovative solutions and leading high-performance teams
          </Subtitle>
        </SectionHeader>

        <Timeline>
          {experienceData.map((experience, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TimelineConnector />
              <ExperienceCard
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween" }}
              >
                <Period>{experience.period}</Period>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <AchievementsList>
                  {experience.achievements.map((achievement, i) => (
                    <AchievementItem
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                      {achievement}
                    </AchievementItem>
                  ))}
                </AchievementsList>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;