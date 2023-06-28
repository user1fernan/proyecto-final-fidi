import React, { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function Registro() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor, guardarlos en una base de datos, etc.
      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
      console.log('Clave:', clave);
      // Luego puedes redirigir al usuario a otra página o mostrar un mensaje de éxito, según tus necesidades
    };
  
    const registrarConFacebook = () => {
      // Lógica para registrar con Facebook
    };
  
    const registrarConTwitter = () => {
      // Lógica para registrar con Twitter
    };
  
    const registrarConLinkedIn = () => {
      // Lógica para registrar con LinkedIn
    };
  
    const registrarConGitHub = () => {
      // Lógica para registrar con GitHub
    };
  
    return (
      <div className="registro-container p-4">
        <h1>Regístrate en Fidi</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre" className="text-light">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo" className="text-light">Correo electrónico:</label>
            <input
              type="email"
              className="form-control"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="clave" className="text-light">Clave:</label>
            <input
              type="password"
              className="form-control"
              id="clave"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-dark">Registrarse</button>
          </div>
          <div className="text-center">
            <p>O regístrate con:</p>
            <div>
              <button className="btn btn-primary" onClick={registrarConFacebook}>
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </button>
              <button className="btn btn-info" onClick={registrarConTwitter}>
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </button>
              <button className="btn btn-danger" onClick={registrarConLinkedIn}>
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </button>
              <button className="btn btn-dark" onClick={registrarConGitHub}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  export default Registro;