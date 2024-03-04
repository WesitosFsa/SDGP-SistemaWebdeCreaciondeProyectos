import React, { useState } from 'react';
import './css/administrador.css';


function AdministradorUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [filtro, setFiltro] = useState('');

    const agregarUsuario = (evento) => {
        evento.preventDefault();
        const nombre = evento.target.elements.nombre.value;
        const email = evento.target.elements.email.value;
        const ubicacion = evento.target.elements.ubicacion.value;
        const permisos = evento.target.elements.permisos.value;
        setUsuarios(prevUsuarios => [...prevUsuarios, { nombre, email, ubicacion, permisos, fecha: new Date().toLocaleDateString() }]);
        evento.target.reset();
    };

    const eliminarUsuario = (index) => {
        setUsuarios(prevUsuarios => prevUsuarios.filter((usuario, i) => i !== index));
    };

    const filtrarTabla = (evento) => {
        setFiltro(evento.target.value.toUpperCase());
    };

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.nombre.toUpperCase().includes(filtro) ||
        usuario.email.toUpperCase().includes(filtro) ||
        usuario.ubicacion.toUpperCase().includes(filtro) ||
        usuario.permisos.toUpperCase().includes(filtro)
    );

    return (
        <div>
            <h1>Administrador de Usuarios</h1>
            <input type="text" id="buscar" name="buscar" placeholder="Buscar" onInput={filtrarTabla} />
            <hr />
            <table id="tablaUsuarios">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Email</th>
                        <th>Ubicacion</th>
                        <th>Unido</th>
                        <th>Permisos</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuariosFiltrados.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.ubicacion}</td>
                            <td>{usuario.fecha}</td>
                            <td>{usuario.permisos}</td>
                            <td><button className="eliminar" onClick={() => eliminarUsuario(index)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <section>
                <br />
                <a href="/"><button className="volver">Pagina Principal</button></a>
                <br />
            </section>
            <form id="formularioUsuario" onSubmit={agregarUsuario}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" required />
                <br />
                <label htmlFor="permisos">Permisos:</label>
                <select id="permisos" name="permisos">
                    <option value="admin">Administrador</option>
                    <option value="usuario">Usuario</option>
                </select>
                <br />
                <button type="submit">Agregar Usuario</button>
            </form>
        </div>
    );
}

export default AdministradorUsuarios;

