import React from 'react';
import FotoCapacitacion from '../assets/images/servicios/capacitacion.webp'

const Capacitacion = () => {
    return (
        <>
            <main className=''>
                <section>
                    <div style={{ backgroundColor: '#2c3e50', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='tituloServicios text-center'>Capacitación en electrónica y electricidad industrial</h2>
                    </div>
                </section>
                <section className='container'>
                    <div style={{ margin: '7vh' }}>
                        <div>
                            <p style={{ fontSize: '20px' }}>En Idelek S.A.S. ofrecemos  charlas y cursos personalizados para ayudar a los operarios de las industrias a adquirir las habilidades y conocimientos eléctricos necesarios para obrar en la misma.</p>
                        </div>
                        <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="col">
                                <h4>Nuestras charlas y cursos</h4>
                                <ul style={{ fontSize: '18px', minWidth: '350px' }}>
                                    <li>Brindan las herramientas esenciales para comprender los principios de la electricidad industrial, desde la teoría básica hasta las aplicaciones prácticas en el mundo real.
                                    </li>
                                    <li>Cubren una amplia gama de temas, incluyendo:
                                        <ul>
                                            <li>Seguridad eléctrica</li>
                                            <li>Motores eléctricos</li>
                                            <li>Sistemas de control</li>
                                            <li>PLC</li>
                                            <li>Cableado y conexionado</li>
                                            <li>Mantenimiento eléctrico</li>
                                            <li>Y mucho más...</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                                <img src={FotoCapacitacion} alt="Imagen ilustrativa de una charla" style={{ width: '100%', minWidth: '200px' }} />
                            </div>
                        </div>
                        <div>
                            <h4>Beneficios de elegirnos</h4>
                            <ul style={{ fontSize: '18px' }}>
                                <li>Formación personalizada y flexible: Ajustamos nuestros programas a las necesidades, horarios y disponibilidad.</li>
                                <li>Metodologías innovadoras: Combinamos teoría y práctica para ofrecer una experiencia de aprendizaje completa y atractiva.</li>
                                <li>Enfoque práctico: Brindamos la oportunidad de poner en práctica los conocimientos adquiridos en un entorno real a través de ejercicios, simulaciones y exámenes.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Capacitacion;