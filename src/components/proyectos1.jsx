import React, { useState, useEffect } from 'react';
import './css/proyectos1.css'; // Asegúrate de usar './' para indicar que es un archivo local

const Proyectos1 = () => {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [estadoProyecto, setEstadoProyecto] = useState('');
  const [actualizacionProyecto, setActualizacionProyecto] = useState('');
  const [tareas, setTareas] = useState('');
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    cargarProyectosDesdeLocalStorage();
  }, []);

  const cargarProyectosDesdeLocalStorage = () => {
    const proyectosGuardados = localStorage.getItem('proyectos');
    if (proyectosGuardados) {
      setProyectos(JSON.parse(proyectosGuardados));
    }
  };

  const actualizarProyectosEnLocalStorage = () => {
    localStorage.setItem('proyectos', JSON.stringify(proyectos));
  };

  const agregarProyecto = () => {
    const nuevoProyecto = {
      nombre: nombreProyecto,
      estado: estadoProyecto,
      actualizacion: actualizacionProyecto,
      tareas: tareas
    };

    setProyectos([...proyectos, nuevoProyecto]);
    actualizarProyectosEnLocalStorage();

    // Limpiar los campos del formulario
    setNombreProyecto('');
    setEstadoProyecto('');
    setActualizacionProyecto('');
    setTareas('');
  };

  const eliminarProyecto = index => {
    const nuevosProyectos = proyectos.filter((_, i) => i !== index);
    setProyectos(nuevosProyectos);
    actualizarProyectosEnLocalStorage();
  };

  return (
    <div>
      <header>
        <h1>SDGP - Sistema de Gestión de Proyectos</h1>
        <nav>
          <ul>
            
            <li><a href="/usuario">Usuario</a></li>
            <li><a href="/visualizar">Proyectos</a></li>
            <li><a href="assets/MANUAL-HTML-Y-CSS.pdf" download>Documentos</a></li>
            <li><a href="/usuario">Cuenta</a></li>
            <li><a href="colaboradores.html">Colaboradores</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Proyectos</h2>
        <table id="tablaProyectos">
          <thead>
            <tr>
              <th>Nombre Proyecto</th>
              <th>Estado del Proyecto</th>
              <th>Actualizaciones del Proyecto</th>
              <th>Tareas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proyectos.map((proyecto, index) => (
              <tr key={index}>
                <td>{proyecto.nombre}</td>
                <td>{proyecto.estado}</td>
                <td>{proyecto.actualizacion}</td>
                <td>{proyecto.tareas}</td>
                <td>
                  <button onClick={() => console.log("Ver proyecto")}>Ver</button>
                  <button onClick={() => console.log("Editar proyecto")}>Editar</button>
                  <button onClick={() => eliminarProyecto(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Formulario para agregar nuevos proyectos */}
        <form id="formularioProyecto">
          <label htmlFor="nombreProyecto">Nombre del Proyecto:</label>
          <input type="text" id="nombreProyecto" value={nombreProyecto} onChange={e => setNombreProyecto(e.target.value)} required />
          <label htmlFor="estadoProyecto">Estado del Proyecto:</label>
          <input type="text" id="estadoProyecto" value={estadoProyecto} onChange={e => setEstadoProyecto(e.target.value)} required />
          <label htmlFor="actualizacionProyecto">Actualizacion del Proyecto:</label>
          <input type="text" id="actualizacionProyecto" value={actualizacionProyecto} onChange={e => setActualizacionProyecto(e.target.value)} required />
          <label htmlFor="tareas">Tareas:</label>
          <input type="text" id="tareas" value={tareas} onChange={e => setTareas(e.target.value)} required />
          <button type="button" onClick={agregarProyecto}>Agregar Proyecto</button>
        </form>
        <section>
          <br />
          <a href="VisualizarProyectos.html"><button className="volver">Visualizar Proyectos</button></a>
          <br />
        </section>
      </main>
    </div>
  );
};

export default Proyectos1;
