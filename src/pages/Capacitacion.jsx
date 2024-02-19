import React from 'react';
import FotoCapacitacion from '../assets/images/servicios/capacitacion.png'

const Capacitacion = () => {
    return (
        <>
            <main className='container pag'>
                <section>
                    <article>
                        <div>
                            <h2 className='text-center tituloServicios' >Capacitación en electrónica y electricidad industrial</h2>
                        </div>
                        <div className=''>
                            <p style={{ fontSize: '20px' }}>En Idelek S.A.S. ofrecemos  charlas y cursos personalizados para ayudar a los operarios de las industrias a adquirir las habilidades y conocimientos eléctricos necesarios para obrar en la misma.</p>
                            <div className="row" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <div className="col">
                                    <p style={{ fontSize: '20px' }}>Nuestras charlas y cursos:</p>
                                        <ul style={{ fontSize: '18px', minWidth:'350px' }}>
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
                                    <img src={FotoCapacitacion} alt="" style={{ width: '100%', minWidth:'200px' }} />
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '20px' }}>Beneficios de elegirnos:</p>
                                    <ul style={{ fontSize: '18px' }}>
                                        <li>Formación personalizada y flexible: Ajustamos nuestros programas a las necesidades, horarios y disponibilidad.</li>
                                        <li>Metodologías innovadoras: Combinamos teoría y práctica para ofrecer una experiencia de aprendizaje completa y atractiva.</li>
                                        <li>Enfoque práctico: Brindamos la oportunidad de poner en práctica los conocimientos adquiridos en un entorno real a través de ejercicios, simulaciones y exámenes.</li>
                                    </ul>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Capacitacion;
