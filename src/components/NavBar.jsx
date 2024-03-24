import React from 'react';
import { Link } from 'react-router-dom';
import LogoIdk from '../assets/images/logoIdk.png';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to='/'><img style={{ height: '9vh' }} src={LogoIdk} alt='Logo Idelek' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Inicio</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <p style={{ margin: '0px' }} className="nav-link dropdown-toggle" role="button" data-bs-toggle="" aria-expanded="false">Servicios</p>
                                <ul className="dropdown-menu nav-item">
                                    <li><Link className="nav-link" to='/ingenieria'>Ingeniería y proyectos</Link></li>
                                    <li><Link className="nav-link" to='/tableros'>Armado de tableros eléctricos</Link></li>
                                    <li><Link className="nav-link" to='/instalaciones'>Instalaciones</Link></li>
                                    <li><Link className="nav-link" to='/mantenimiento'>Mantenimiento</Link></li>
                                    <li><Link className="nav-link" to='/termografia'>Termografía y mediciones</Link></li>
                                    <li><Link className="nav-link" to='/capacitacion'>Capacitación</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/clientes'>Clientes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/contacto'>Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
