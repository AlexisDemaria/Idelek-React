import React from 'react';
import Instalaciones1 from '../assets/images/servicios/bandejas2.jpg'
import Instalaciones2 from '../assets/images/servicios/ProgramacionMaquina.jpg'
import Instalaciones3 from '../assets/images/servicios/ProgramacionVF.jpg'

const Instalaciones = () => {
    return (
        <>
            <main className=''>
                <section>
                    <div style={{ backgroundColor: '#2c3e50', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='tituloServicios text-center'>Obras, montajes e instalaciones eléctrica</h2>
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
                                        Instalaciones eléctricas de fuerza motriz
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse show" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Diseñamos y ejecutamos instalaciones eléctricas para equipos industriales, garantizando un suministro confiable y seguro para motores, bombas y maquinaria pesada.
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
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Instrumentación de procesos, conexión a equipo y a tablero
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                                    <div className="accordion-body">
                                        <p>
                                            Realizamos la instalación y calibración de sensores, transmisores y sistemas de control para garantizar la medición precisa de variables industriales y su correcta integración con los tableros eléctricos.
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
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Acometidas y puesta en servicio de maquinaria de línea de producción
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Ejecutamos la conexión de maquinaria industrial a la red eléctrica, asegurando la correcta alimentación, configuración y pruebas de funcionamiento antes de la puesta en operación.
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
                                        data-bs-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour"
                                    >
                                        Programación y configuración de equipos industriales
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Configuramos y programamos controladores lógicos programables (PLC), variadores de frecuencia y otros dispositivos electrónicos para optimizar la automatización y eficiencia de los procesos productivos.
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
                                        Optimización y eficiencia energética
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Analizamos y mejoramos el rendimiento de los sistemas eléctricos para reducir costos y aumentar la eficiencia. Implementamos soluciones como corrección del factor de potencia, optimización del consumo energético y uso de tecnologías de automatización para minimizar desperdicios y maximizar el rendimiento.
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
                                        Relevamiento, análisis y diagnostico de sistemas
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Inspeccionamos y evaluamos el estado de los sistemas eléctricos e industriales, identificando posibles fallas y proponiendo mejoras para optimizar su rendimiento y seguridad.
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
                                        Puesta en marcha
                                    </button>
                                </h2>
                                <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Supervisamos y ejecutamos el proceso de encendido y prueba de los sistemas eléctricos e industriales, asegurando su correcto funcionamiento y ajustando parámetros según las necesidades del cliente.
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
                                        Planos eléctricos
                                    </button>
                                </h2>
                                <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        <p>
                                            Elaboramos planos eléctricos sobre un tablero eléctrico ya confeccionado, asegurando un diseño claro y preciso de la distribución y conexiones eléctricas dentro de una instalación.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#616161', minHeight: '300px' }}>
                        <h3 className='text-center' style={{ fontSize: '30px', color: '#fff' }}>Relevamiento, análisis y ejecución</h3>
                    </div>
                </section>

                <section className='galeria'>
                    <div className="imagen-container">
                        <img src={Instalaciones1} alt="Bandejas portacables" />
                        <div className="overlay">
                            <p>Trazado y tendido de bandejas</p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Instalaciones2} alt="Programación de PLC en industria" />
                        <div className="overlay">
                            <p>Programación de PLC sobre maquinaria existente</p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Instalaciones3} alt="Variadores de frecuencia" />
                        <div className="overlay">
                            <p>Seteo y modificación de parámetros en Variadores de frecuencia</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Instalaciones;