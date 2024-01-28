import React from 'react';
import {Link} from 'react-router-dom'
import LogoIdk from '../assets/images/logoIdk.png'

const NavBar = () => {
    return (
        <>
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to='/'><img style={{height:'10vh'}} src={LogoIdk} alt='Logo Idelek'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Inicio</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <p style={{margin:'0px'}} className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Servicios</p>
                    <ul className="dropdown-menu nav-item">
                        <li><Link className="nav-link" to='/ingenieria'>Ingeniería y proyectos</Link></li>
                        <li><Link className="nav-link" to='/tableros-electricos'>Diseño y construcción tableros eléctricos</Link></li>
                        <li><Link className="nav-link" to='/obras-instalaciones'>Obras e instalaciones</Link></li>
                        <li><Link className="nav-link" to='/mantenimiento'>Mantenimiento</Link></li>
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
        </div>
        </>
    );
}

export default NavBar;