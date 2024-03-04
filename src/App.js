import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './inicio.css';
import AdministradorUsuarios from './components/administrador';
import InformacionUsuarios from './components/colaboradores';
import LoginPage from './components/inicio';
import Crearcuenta from './components/crearcuenta';
import SistemaGestionProyectos from './components/index';
import SoporteTecnico from './components/informacion'


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/inicio" element={<LoginPage />} />
          <Route path="/administrador" element={<AdministradorUsuarios />} /> 
          <Route path="/colaboradores" element={<InformacionUsuarios />} /> 
          <Route path="/crearcuenta" element={<Crearcuenta />} /> 
          <Route path="/index" element={<SistemaGestionProyectos />} /> 
          <Route path="/informacion" element={<SoporteTecnico />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;