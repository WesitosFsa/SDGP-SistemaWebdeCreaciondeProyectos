import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './inicio.css';
import LoginPage from './components/inicio';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
  
          <Route path="/inicio" element={<LoginPage />} /> {/* Página de inicio de sesión */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;