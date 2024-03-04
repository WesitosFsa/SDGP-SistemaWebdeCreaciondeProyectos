import React from 'react';
import './css/user.css'; // Asegúrate de usar './' para indicar que es un archivo local
function Usuario() {
  return (
    <div>
      <section>
        <h2>Información Personal</h2>
        <p><strong>Nombre:</strong> Mateo Garzón</p>
        <p><strong>Fecha de Nacimiento:</strong> 3 Diciembre de 2003</p>
        <p><strong>Dirección:</strong> ASJKDHJAKSD</p>
        <p><strong>Teléfono:</strong> 1564156</p>
        <p><strong>Email:</strong> mateo.garzon@email.com</p>
        <img src="assets/img/usuario.png" alt="Mateo Garzón" />
        <h1>Mateo Garzón</h1>
        <p>Currículum Vitae</p>
      </section>

      <section className="education">
        <h2>Educación</h2>
        <ul>
          <li><strong>Grado en Informática</strong> - Instituto 5 de Junio</li>
          <li><strong>Universidad: Tecnologia de desarrollo de Software</strong> - EPN -</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experiencia Laboral</h2>
        <ul>
          <li>
            <strong>Desarrollador Web</strong>
            <p>Trabajé en el desarrollo de aplicaciones web utilizando HTML, CSS, y JavaScript.</p>
          </li>
          <li>
            <strong>Analista de Sistemas</strong>
            <p>Participé en proyectos de análisis y mejora de sistemas informáticos.</p>
          </li>
        </ul>
      </section>

      <footer>
        <p>2024 Mateo Garzón - Currículum Vitae</p>
      </footer>
    </div>
  );
}

export default Usuario;