import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactos" element={<Contacts />} />
          {/* Add more routes as needed */}
          <Route path="/escola" element={<div>Escola Page - Coming Soon</div>} />
          <Route path="/alunos" element={<div>Alunos Page - Coming Soon</div>} />
          <Route path="/atividades" element={<div>Atividades Page - Coming Soon</div>} />
          <Route path="/biblioteca" element={<div>Biblioteca Page - Coming Soon</div>} />
          <Route path="/erasmus" element={<div>Erasmus Page - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;