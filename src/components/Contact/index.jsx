// components/Contact/index.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin, Phone, Check } from 'lucide-react';
import {
  ContactSection,
  ContactContainer,
  SectionHeader,
  Title,
  Subtitle,
  ContactGrid,
  ContactForm,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  ContactInfo,
  ContactCard,
  IconWrapper,
  ContactDetails,
  ContactTitle,
  ContactText,
  SocialLinks,
  SocialButton,
  ErrorMessage,
  SuccessMessage
} from './styles';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Replace with your n8n webhook URL
        const response = await fetch('https://primary-production-9252.up.railway.app/webhook/contact-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message
          })
        });

        if (response.ok) {
          const result = await response.json();
          setShowSuccess(true);
          setFormState({ name: '', email: '', message: '' });
          setTimeout(() => setShowSuccess(false), 3000);
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        setErrors({ submit: 'Failed to send message. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <ContactSection id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ContactContainer>
          <SectionHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Title>Let's Connect</Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Subtitle>
                Available for cloud-native development and AI integration projects
              </Subtitle>
            </motion.div>
          </SectionHeader>

          <ContactGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                  {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Message</Label>
                  <Textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project requirements..."
                  />
                  {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>

                {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}

                <SubmitButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </SubmitButton>
              </ContactForm>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactInfo>
                <ContactCard>
                  <IconWrapper>
                    <MessageSquare size={24} />
                  </IconWrapper>
                  <ContactDetails>
                    <ContactTitle>Expertise Areas</ContactTitle>
                    <ContactText>
                      Cloud-Native Solutions • Gen AI Integration • Full-Stack Development
                    </ContactText>
                  </ContactDetails>
                </ContactCard>

                <ContactCard>
                  <IconWrapper>
                    <Mail size={24} />
                  </IconWrapper>
                  <ContactDetails>
                    <ContactTitle>Email</ContactTitle>
                    <ContactText>akhileshvarute23@gmail.com</ContactText>
                  </ContactDetails>
                </ContactCard>

                <ContactCard>
                  <IconWrapper>
                    <Phone size={24} />
                  </IconWrapper>
                  <ContactDetails>
                    <ContactTitle>Phone</ContactTitle>
                    <ContactText>+91 9511977521</ContactText>
                  </ContactDetails>
                </ContactCard>

                <SocialLinks>
                  <SocialButton
                    href="https://www.linkedin.com/in/akhileshvarute"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </SocialButton>
                  <SocialButton
                    href="https://github.com/Akhilesh-Varute"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </SocialButton>
                  <SocialButton
                    href="mailto:akhileshvarute23@gmail.com"
                  >
                    <Mail size={20} />
                  </SocialButton>
                </SocialLinks>
              </ContactInfo>
            </motion.div>
          </ContactGrid>

          <AnimatePresence>
            {showSuccess && (
              <SuccessMessage
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
              >
                <Check size={20} />
                Message sent successfully
              </SuccessMessage>
            )}
          </AnimatePresence>
        </ContactContainer>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;
