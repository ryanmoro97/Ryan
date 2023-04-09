import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Header, Footer } from '../components';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Just4Fun from './Just4Fun';
import Mtns from './Mtns';
import Fish from './Fish';
import Bikes from './Bikes';
import Ski from './Ski';
import Cliff from './Cliff';


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
                <Route path="/Mtns" element={<Mtns />} />
                <Route path="/Fish" element={<Fish />} />
                <Route path="/Bikes" element={<Bikes />} />
                <Route path="/Ski" element={<Ski />} />
                <Route path="/Cliff" element={<Cliff />} />
            </Routes>
        </Container>
        <Footer />
    </Router>
  );
}

export default AppRoutes;
