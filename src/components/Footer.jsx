import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="text-center bg-body-tertiary text-muted">
                <section className="container text-center mt-5">
                    <div className="row">
                        <div className="col-sm mt-4 fw-bold">
                            <p className="text-uppercase fw-bold mb-4" style={{fontSize:'20px'}}>Nuestros servicios</p>
                            <p><Link to='/ingenieria' className="text-reset">Ingeniería y proyectos</Link></p>
                            <p><Link to='/tableros' className="text-reset">Armado de tableros eléctricos</Link></p>
                            <p><Link to='/mantenimiento' className="text-reset">Mantenimiento</Link></p>
                            <p><Link to='/instalaciones' className="text-reset">Instalaciones</Link></p>
                            <p><Link to='/termografia' className="text-reset">Termografía y mediciones</Link></p>
                            <p><Link to='/capacitacion' className="text-reset">Capacitación</Link></p>
                        </div>
                        <div className="col-sm mt-4 fw-bold">
                            <p className="text-uppercase fw-bold mb-4" style={{fontSize:'20px'}}>Contacto</p>
                            <p>Puedes hacer clic para acceder a la ubicación, enviar un mail o llamar por teléfono.</p>
                            <p><a className='text-muted' href='https://maps.app.goo.gl/qtHc1mjJZHagBLH39'><i style={{ padding: '6px' }} className="bi bi-geo-alt-fill" />Alonso de Reinoso 3449 - Córdoba capital, Córdoba, Argentina.</a></p>
                            <p><a className='text-muted' href='mailto:info@idelek.com.ar'><i style={{ padding: '6px' }} className="bi bi-envelope-at-fill" />info@idelek.com.ar</a></p>
                            <p><a className='text-muted' href='tel:+5493515165848'><i style={{ padding: '6px' }} className="bi bi-telephone-fill" />351-5165848</a></p>
                        </div>
                    </div>
                </section>
                <section className='' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', display: 'flex', justifyContent: 'space-around' }}>
                    <div className="container p-4 row" style={{ alignItems: 'center' }}>
                        <div className='col copyright '>
                            <p style={{ minWidth: '300px', margin: '0' }} >© 2025 Copyright - Todos los derechos reservados de IDELEK S.A.S.</p>
                        </div>
                        <div className='col' style={{ height: '70px' }}>
                            <a href="http://qr.afip.gob.ar/?qr=n0x3DUDFrPJY8FH550P6ag,," target="_F960AFIPInfo"><img style={{ height: '100%', width:'max-content' }} src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" alt="Data Fiscal Idelek" border={0} /></a>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
}

export default Footer;
