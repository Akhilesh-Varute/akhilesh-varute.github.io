// components/Skills/index.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Layout, Brain, Terminal } from 'lucide-react';
import {
  SkillsSection,
  MainContainer,
  SectionHeader,
  Title,
  Subtitle,
  SkillsGrid,
  SkillCard,
  CategoryIcon,
  CategoryTitle,
  SkillsList,
  SkillTag,
  ProgressBar,
  Progress
} from './styles';

const skillsData = [
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Cloud-native", level: 90 }
    ]
  },
  {
    category: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "UI/UX", level: 80 },
      { name: "Responsive Design", level: 85 },
      { name: "Web Development", level: 90 }
    ]
  },
  {
    category: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "API Development", level: 90 },
      { name: "Database Design", level: 85 },
      { name: "Server Management", level: 80 }
    ]
  },
  {
    category: "Project Management",
    icon: Brain,
    skills: [
      { name: "Team Leadership", level: 85 },
      { name: "Agile/Scrum", level: 80 },
      { name: "Problem Solving", level: 90 },
      { name: "Technical Planning", level: 85 },
      { name: "Mentorship", level: 80 }
    ]
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

const tagVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <MainContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeader>
          <Title>Technical Arsenal</Title>
          <Subtitle>Mastering cutting-edge technologies...</Subtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillsData.map((category, index) => (
            <SkillCard key={category.category}>
              <CategoryIcon>
                <category.icon size={32} strokeWidth={1.5} />
              </CategoryIcon>
              <CategoryTitle>{category.category}</CategoryTitle>
              
              <SkillsList>
                {category.skills.map((skill, i) => (
                  <motion.div key={skill.name} style={{ width: '100%' }}>
                    <SkillTag>
                      {skill.name}
                      <ProgressBar>
                        <Progress value={skill.level} />
                      </ProgressBar>
                    </SkillTag>
                  </motion.div>
                ))}
              </SkillsList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </MainContainer>
    </SkillsSection>
  );
};

export default Skills;