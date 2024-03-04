import React from 'react';
import './css/Inicio.css'; // Asegúrate de usar './' para indicar que es un archivo local


const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Email:', email, 'Password:', password);
    // Aquí puedes agregar la lógica para iniciar sesión
  };

  return (
    <div className="container">
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Recuérdame</label>

        <button type="submit">Entrar</button>
      </form>
      <br />
      <button className="volver" onClick={() => window.location.href = '/'}>Pagina Principal</button>
      <br />
      <button className="proyectos" onClick={() => window.location.href = '/Proyectos'}>Pagina de Proyectos</button>
      <br />
      <button className="proyectos" onClick={() => window.location.href = '/administrador'}>Pagina del administrador</button>
      <br />
      <div className="social-login">
        <button className="google-login">Entrar con Google</button>
        <button className="microsoft-login">Entrar con Microsoft</button>
      </div>
      <br />
      <a href="#">Olvidé mi contraseña</a>
    </div>
  );
};
export default LoginPage;