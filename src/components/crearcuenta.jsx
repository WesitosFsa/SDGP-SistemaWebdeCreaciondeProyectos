import React from 'react';
import './css/styles.css';

function crearcuenta() {
  return (
    <div className="container">
      <h1>Bienvenido Crea tu cuenta</h1>
      <form action="#">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Recuérdame</label>

        <button type="submit">Crear cuenta</button>
      </form>
      <br />
      <a href="index.html"><button className="volver">Pagina Principal</button></a>
      <br />
      <a href="Proyectos.html"><button className="proyectos">Pagina de proyectos </button></a>
      <br />
      <a href="administrador.html"><button className="proyectos">Pagina del administrador </button></a>
      <br />
      <div className="social-login">
        <button className="google-login">Crear con Google</button>
        <button className="microsoft-login">Crear con Microsoft</button>
      </div>
    </div>
  );
}

export default crearcuenta;
