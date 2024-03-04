import React from 'react';
import './css/Inicio.css';

function SistemaGestionProyectos() {
  return (
    <div>
      <header>
        <h1>SDGP - Sistema de Gestión de Proyectos</h1>
        <p>Gestiona tus proyectos de manera sencilla</p>
        <nav>
          <ul>
            <li><a href="Inicio.html">Iniciar Sesión</a></li>
            <li><a href="CrearCuenta.html">Crear Cuenta</a></li>
            <li><a href="informacion.html">Soporte</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>¿Cómo funciona SDGP?</h2>
        <p>SDGP es un sistema web en el que puedes trabajar de manera sencilla y establecer colaboradores para un proyecto en común.</p>
        <nav>
          <div className="row cabeza">
            <div className="col">
              <img src="assets/img/inicio1.jpg" alt="Imagen 1" />
            </div>
            <div className="col">
              <img src="assets/img/inicio2.png" alt="Imagen 2" />
            </div>
          </div>
        </nav>
        <a href="Inicio.html"><button>Iniciar Sesión</button></a>
        <br />
        <a href="CrearCuenta.html"><button>Crear Cuenta</button></a>
      </main>
    </div>
  );
}

export default SistemaGestionProyectos;
