import React from 'react';
import './css/Inicio.css';
import imagen1 from './images/inicio1.jpg';
import imagen2 from './images/inicio2.png';


function SistemaGestionProyectos() {
  return (
    <div>
      <header>
        <h1>SDGP - Sistema de Gestión de Proyectos</h1>
        <p>Gestiona tus proyectos de manera sencilla</p>
        <nav>
          <ul>
            <li><a href="/inicio">Iniciar Sesión</a></li>
            <li><a href="/crearcuenta">Crear Cuenta</a></li>
            <li><a href="/informacion">Soporte</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>¿Cómo funciona SDGP?</h2>
        <p>SDGP es un sistema web en el que puedes trabajar de manera sencilla y establecer colaboradores para un proyecto en común.</p>
        <nav>
          <div className="row cabeza">
            <div className="col">
              <img src={imagen1} alt="Imagen 1" /> {/* Utiliza la imagen importada */}
            </div>
            <div className="col">
              <img src={imagen2} alt="Imagen 1" /> {/* Utiliza la imagen importada */}
            </div>
          </div>
        </nav>
        <a href="/inicio"><button>Iniciar Sesión</button></a>
        <br />
        <a href="/crearcuenta"><button>Crear Cuenta</button></a>
      </main>
    </div>
  );
}

export default SistemaGestionProyectos;
