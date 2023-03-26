import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Header, Footer } from '../components';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Just4Fun from './Just4Fun';

function AppRoutes() {
  return (
    <Router>
        <Header />
        <Container>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/just4fun" element={<Just4Fun />} />
            </Routes>
        </Container>
        <Footer />
    </Router>
  );
}

export default AppRoutes;
