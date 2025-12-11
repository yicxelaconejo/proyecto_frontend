// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BranchesSection from '../components/BranchesSection';
import ContactForm from '../components/ContactForm';
import { Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ color: '#fff' }}>
      <section id="hero" className="section">
        <HeroSection />
      </section>

      <Box sx={{ mt: 6 }}>
        <section id="servicios" className="section">
          <ServicesSection />
        </section>
      </Box>

      <Box sx={{ mt: 6 }}>
        <section id="sedes" className="section">
          <BranchesSection />
        </section>
      </Box>

      <Box sx={{ mt: 6 }}>
        <section id="contacto" className="section">
          <ContactForm />
        </section>
      </Box>
    </Box>
  );
}
