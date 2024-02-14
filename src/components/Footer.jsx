import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className>
                    <div className="container text-center mt-5">
                        <div className="row">
                            <div className="col-sm mt-4 fw-bold">
                                <h5 className="text-uppercase fw-bold mb-4">Nuestros servicios</h5>
                                <p><Link to='/ingenieria' className="text-reset">Ingeniería y proyectos</Link></p>
                                <p><Link to='/tableros' className="text-reset">Armado de tableros eléctricos</Link></p>
                                <p><Link to='/instalaciones' className="text-reset">Instalaciones</Link></p>
                                <p><Link to='/mantenimiento' className="text-reset">Mantenimiento</Link></p>
                                <p><Link to='/termografia' className="text-reset">Termografía y mediciones</Link></p>
                                <p><Link to='/alumbrado' className="text-reset">Alumbrado público</Link></p>
                            </div>
                            <div className="col-sm mt-4 fw-bold">
                                <h5 className="text-uppercase fw-bold mb-4">Contacto</h5>
                                <p>Puedes hacer clic para acceder a la ubicación, enviar un mail o llamar por teléfono.</p>
                                <p><a className='text-muted' href='https://maps.app.goo.gl/qtHc1mjJZHagBLH39'><i style={{ padding: '6px' }} className="bi bi-geo-alt-fill" />Alonso de Reinoso 3449 - Córdoba capital, Córdoba, Argentina.</a></p>
                                <p><a className='text-muted' href='mailto:info@idelek.com.ar'><i style={{ padding: '6px' }} className="bi bi-envelope-at-fill" />info@idelek.com.ar</a></p>
                                <p><a className='text-muted' href='tel:+5493515165848'><i style={{ padding: '6px' }} className="bi bi-telephone-fill" />351-5165848</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright - Todos los derechos reservados de IDELEK S.A.S
                </div>
            </footer>
        </div>
    );
}

export default Footer;
