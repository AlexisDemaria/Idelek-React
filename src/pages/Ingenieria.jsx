import React from 'react';
import Materiales from '../assets/images/servicios/materiales-electricos.webp'
import Pliegos from '../assets/images/servicios/pliegos.webp'
import Relevamiento from '../assets/images/servicios/relevamiento-obra.webp'
import PROFINET from '../assets/images/servicios/Certificado PROFINET.webp'
import Pararrayos from '../assets/images/servicios/Certificado-Pararrayos.webp'
import LogoProfi from '../assets/images/servicios/Profinet - Profibus.jpg'
import LogoAEA from '../assets/images/servicios/Logo AEA.png'

const Ingenieria = () => {
    return (
        <>
            <main className=''>
                <section>
                    <div style={{ backgroundColor: '#2c3e50', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='tituloServicios text-center'>Proyectos de ingeniería eléctrica y electrónica</h2>
                    </div>
                </section>

                <section className='' style={{ margin: '10vh 0 10vh' }}>
                    <div className='container'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="true"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Diseño e implementación de proyectos eléctricos
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse show" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Desarrollo y ejecución de sistemas eléctricos eficientes y seguros, adaptados a las necesidades del cliente. Garantizamos soluciones innovadoras y cumplimiento normativo.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Redes PROFINET
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                                    <div className="accordion-body">
                                        <p>
                                            Implementación y optimización de redes industriales basadas en Profinet para garantizar una comunicación eficiente. Configuración de dispositivos y diagnóstico de redes para un rendimiento óptimo. Integración con sistemas de automatización y control industrial.
                                        </p>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <a className='botonHome' href="#profinet"> Ver más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Protección contra Descargas Atmosféricas
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Diseño e instalación de sistemas de protección contra rayos para minimizar riesgos en instalaciones eléctricas. Implementación de pararrayos y sistemas de puesta a tierra conforme a normativas vigentes. Análisis de vulnerabilidad y mantenimiento preventivo para garantizar seguridad.
                                        </p>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <a className='botonHome' href="#rayos"> Ver más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour"
                                    >
                                        Diseño de circuitos eléctricos
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Planificación de circuitos eléctricos optimizados para eficiencia, seguridad y funcionalidad. Nos aseguramos de que cada diseño se adapte a las necesidades específicas del proyecto.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFive"
                                    >
                                        Diseño de sistemas de control y automatización industrial
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Creación de soluciones automatizadas para mejorar la eficiencia y el control de procesos industriales. Implementamos tecnologías avanzadas para optimizar la producción.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSix"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseSix"
                                    >
                                        Determinación de la potencia instalada
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Cálculo de la capacidad eléctrica necesaria para optimizar el consumo energético y evitar sobrecargas. Evaluamos la demanda para garantizar un suministro confiable.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseSeven"
                                    >
                                        Listados de materiales
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Elaboración detallada de insumos y equipos necesarios para la ejecución de proyectos eléctricos. Optimizamos costos sin comprometer la calidad del proyecto.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseEight"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseEight"
                                    >
                                        Diseño de redes de baja tensión
                                    </button>
                                </h2>
                                <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Planificación y desarrollo de redes eléctricas seguras y eficientes para instalaciones de baja tensión. Garantizamos estabilidad y seguridad en la distribución eléctrica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#616161', minHeight: '300px' }}>
                        <h3 className='text-center' style={{ fontSize: '30px', color: '#fff' }}>Generación y ejecución de proyectos</h3>
                    </div>
                </section>

                <section className='galeria'>
                    <div className="imagen-container">
                        <img src={Materiales} alt="Materiales eléctricos" />
                        <div className="overlay">
                            <p>Estimación de costos, mano de obra y materiales</p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Pliegos} alt="Pliegos de especificaciones" />
                        <div className="overlay">
                            <p>Confección de pliegos de especificaciones técnicas, generales y particulares. Planos generales y detalles a los fines de cotización</p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Relevamiento} alt="Inspección instalación" />
                        <div className="overlay">
                            <p>Exposición de obras a proveedores; seguimiento, inspección y recepción de obras</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#616161', minHeight: '300px' }}>
                        <h3 className='text-center' style={{ fontSize: '30px', color: '#fff' }}>Certificaciones</h3>
                    </div>
                </section>
                <div id='profinet'></div>

                <section>
                    <div className='d-flex justify-content-around align-items-center' style={{ backgroundColor: '#2c3e50', minHeight: '200px', padding: '10px' }}>
                        <h4 className='text-center' style={{ color: '#dedede' }}>Redes PROFINET</h4>
                        <img style={{ height: '100px' }} src={LogoProfi} alt="Logo Profinet - Profibus" />
                    </div>
                </section>

                <section className='container'>
                    <div className='row certificados'>
                        <div className='col' style={{ width: '100%', minWidth: '340px' }}>
                            <p>Se cuenta con la certificación internacional, capacidad y calidad técnica para realizar instalaciones y/o mantenimiento en redes PROFINET.</p>
                            <p>PROFINET (PROcess FIeld NETwork) es un protocolo de comunicación desarrollado por la organización PROFIBUS & PROFINET International (PI). Está diseñado para conectar dispositivos industriales con varios tipos de equipamiento productivo, como motores, sensores y otros dispositivos electrónicos.</p>
                            <p>Es una tecnología de red de campo para la comunicación entre equipos industriales y controladores. Está basado en Ethernet y se usa para interconectar dispositivos dentro de sistemas automatizados para el ahorro de tiempo, reducción de costes y mejora del rendimiento.</p>
                            <p>El estándar PROFINET ofrece los siguientes beneficios: en primer lugar, proporciona alta velocidad de comunicación a partir de 100 Mbps, lo que permite realizar múltiples tareas simultáneamente al mismo tiempo. También admite protocolos flexibles para permitir a los dispositivos compartir información sin conflictos. Además, el estándar PROFINET ofrece una arquitectura escalable que permite añadir dispositivos fácilmente según sea necesario. Utiliza estructuras jerárquicas complejas, lo que facilita la gestión del sistema, y también posee capacidades autodescriptivas e interoperables que simplifican el diseño y la configuración de redes.</p>
                        </div>
                        <div className='col cardServicios' style={{ width: 'max-content', height: '100%' }}>
                            <img style={{ maxWidth: '100%', opacity: '1' }} src={PROFINET} alt="Certificado PROFINET" />
                        </div>
                    </div>
                </section>

                <section id='rayos'>
                    <div className='d-flex justify-content-around align-items-center' style={{ backgroundColor: '#2c3e50', minHeight: '200px', padding: '10px' }}>
                        <img style={{ height: '100px' }} src={LogoAEA} alt="Logo AEA" />
                        <h4 className='text-center' style={{ color: '#dedede' }}>Descargas atmosféricas</h4>
                    </div>
                </section>

                <section className='container'>
                    <div className='row certificados'>
                        <div className='col cardServicios' style={{ width: 'max-content', height: '100%' }}>
                            <img style={{ maxWidth: '100%', opacity: '1' }} src={Pararrayos} alt="Certificado Pararrayos" />
                        </div>
                        <div className='col' style={{ width: '100%', minWidth: '340px' }}>
                            <p>Por otro lado, tambien estamos capacitados y certificados por AEA (Asociación Electrotécnica Argentina), en consideraciones sobre la protección contra descargas atmosféricas, más conocidas como rayos.</p>
                            <p>Es de suma importancia considerar la aplicación de sistemas de pararrayos a nivel industrial, dado que se brinda: Seguridad Humana, reduciendo el riesgo de graves lesiones o incluso la muerte de operarios; Protección de Infraestructura, dado que la energía de una descarga puede inducir corrientes y voltajes elevados que pueden destruir componentes electrónicos y eléctricos.</p>
                            <p>Ádemas, se debe tener en cuenta la generación de incendios a causa de las descargas atmosféricas, al encender materiales inflamables o al sobrecalentar conductores eléctricos.</p>
                            <p>Por último, se cumple con la normativa, ya que, muchas industrias están reguladas por normativas que requieren medidas de protección contra rayos.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Ingenieria;