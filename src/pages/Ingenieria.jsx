import React from 'react';
import Materiales from '../assets/images/servicios/materiales-electricos.webp'
import Pliegos from '../assets/images/servicios/pliegos.webp'
import Relevamiento from '../assets/images/servicios/relevamiento-obra.webp'
import PROFINET from '../assets/images/servicios/Certificado PROFINET.webp'
import Pararrayos from '../assets/images/servicios/Certificado-Pararrayos.webp'

const Ingenieria = () => {
    return (
        <>
            <main className='container pag'>
                <section>
                    <div>
                        <h2 className='text-center tituloServicios'>Servicios de ingeniería eléctrica y electrónica</h2>
                    </div>
                    <div className='row'>
                        <ul className="col list-group list-group-flush" style={{ minWidth: '250px', margin: '10px' }}>
                            <li className="list-group-item">Diseño e implementación de proyectos eléctricos</li>
                            <li className="list-group-item">Dirección de proyectos eléctricos en general</li>
                            <li className="list-group-item">Supervisión en terreno de sub-contratistas</li>
                            <li className="list-group-item">Diseño de circuito eléctrico</li>
                        </ul>
                        <ul className='col list-group list-group-flush' style={{ minWidth: '250px', margin: '10px' }}>
                            <li className="list-group-item">Diseño de sistemas de control y automatización industrial</li>
                            <li className="list-group-item">Determinación de la potencia instalada</li>
                            <li className="list-group-item">Listados de materiales</li>
                            <li className="list-group-item">Diseño de redes de baja tensión</li>
                        </ul>
                    </div>
                </section>
                <div>
                    <h3 className='text-center' style={{ margin: '10px' }}>Generación y ejecución de proyectos</h3>
                </div>
                <section className='row' style={{display:'flex', justifyContent:'center'}}>
                    <div className="cardServicios col">
                        <img src={Materiales} alt="Materiales eléctricos" />
                        <div className="card-content">
                            <p>Estimación de costos, mano de obra y materiales</p>
                        </div>
                    </div>
                    <div className="cardServicios col">
                        <img src={Pliegos} alt="Pliegos de especificaciones" />
                        <div className="card-content">
                            <p>Confección de pliegos de especificaciones técnicas, generales y particulares. Planos generales y detalles a los fines de cotización</p>
                        </div>
                    </div>
                    <div className="cardServicios col">
                        <img src={Relevamiento} alt="Inspección instalación" />
                        <div className="card-content">
                            <p>Exposición de obras a proveedores; seguimiento, inspección y recepción de obras</p>
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div>
                        <h3 className='text-center' style={{ margin: '10px' }}>Redes PROFINET</h3>
                    </div>
                    <div className='row'>
                        <div className='col-8  textoIng' style={{ maxWidth: '100%' }}>
                            <p>Se cuenta con la certificación internacional, capacidad y calidad técnica para realizar instalaciones y/o mantenimiento en redes PROFINET.</p>
                            <p>PROFINET (PROcess FIeld NETwork) es un protocolo de comunicación desarrollado por la organización PROFIBUS & PROFINET International (PI). Está diseñado para conectar dispositivos industriales con varios tipos de equipamiento productivo, como motores, sensores y otros dispositivos electrónicos.</p>
                            <p>Es una tecnología de red de campo para la comunicación entre equipos industriales y controladores. Está basado en Ethernet y se usa para interconectar dispositivos dentro de sistemas automatizados para el ahorro de tiempo, reducción de costes y mejora del rendimiento. </p>
                            <p>El estándar PROFINET ofrece los siguientes beneficios: en primer lugar, proporciona alta velocidad de comunicación a partir de 100 Mbps, lo que permite realizar múltiples tareas simultáneamente al mismo tiempo. También admite protocolos flexibles para permitir a los dispositivos compartir información sin conflictos. Además, el estándar PROFINET ofrece una arquitectura escalable que permite añadir dispositivos fácilmente según sea necesario. Utiliza estructuras jerárquicas complejas, lo que facilita la gestión del sistema, y también posee capacidades autodescriptivas e interoperables que simplifican el diseño y la configuración de redes.</p>
                        </div>
                        <div className='col cardServicios' style={{ width: 'max-content', height: '100%' }}>
                            <img style={{ maxWidth: '100%', opacity: '1' }} src={PROFINET} alt="Certificado PROFINET" />
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div>
                        <h3 className='text-center' style={{ margin: '10px' }}>Descargas atmosféricas</h3>
                    </div>
                    <div className='row'>
                        <div className='col cardServicios' style={{ width: 'max-content', height: '100%' }}>
                            <img style={{ maxWidth: '100%', opacity: '1' }} src={Pararrayos} alt="Certificado Pararrayos" />
                        </div>
                        <div className='col-8  textoIng' style={{ maxWidth: '100%' }}>
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