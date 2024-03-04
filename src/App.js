import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/inicio';
import Proyectos from './components/proyectos2';
import Proyectos1 from './components/proyectos1';
import Usuario from './components/usuario';
import VisualizarProyectos from './components/visualizarproyectos';

//import MainPage from './components/main'; // Importa el componente de la página principal
//import ProyectosPage from './components/proyectos'; // Importa el componente de la página de proyectos
//import AdminPage from './components/administrador'; // Importa el componente de la página del administrador

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/inicio" element={<LoginPage />} /> {/* Página de inicio de sesión */}
          <Route path="/proyectos" element={<Proyectos />} /> {/* Página de inicio de sesión */}
          <Route path="/proyectosuser" element={<Proyectos1 />} /> {/* Página de inicio de sesión */}
          <Route path="/usuario" element={<Usuario />} /> {/* Página de inicio de sesión */}
          <Route path="/visualizar" element={<VisualizarProyectos />} /> {/* Página de inicio de sesión */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;