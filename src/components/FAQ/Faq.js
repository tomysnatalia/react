import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={settings.faq.titleText} image={settings.faq.image} />
    <p>{settings.faq.content}</p>
  </Container>
);

export default Faq;
