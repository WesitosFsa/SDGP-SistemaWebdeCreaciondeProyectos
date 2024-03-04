import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/inicio';
import MainPage from './components/main'; // Importa el componente de la página principal
import ProyectosPage from './components/proyectos'; // Importa el componente de la página de proyectos
import AdminPage from './components/administrador'; // Importa el componente de la página del administrador

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Página principal */}
          <Route path="/inicio" element={<LoginPage />} /> {/* Página de inicio de sesión */}
          <Route path="/proyectos" element={<ProyectosPage />} /> {/* Página de proyectos */}
          <Route path="/administrador" element={<AdminPage />} /> {/* Página de administrador */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

export default App;