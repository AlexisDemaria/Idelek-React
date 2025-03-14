import React from 'react';
import Plano from '../assets/images/servicios/plano.webp';
import TopograficoTablero from '../assets/images/servicios/TopograficoTablero.jpg';
import TableroBPH from '../assets/images/tableros/Tablero BPH.jpg'
import TableroPotencia from '../assets/images/tableros/tableroPotencia.jpg'
import TableroDistribucion from '../assets/images/tableros/tableroDistribucion.jpg'
import TableroControl from '../assets/images/tableros/tableroControl.jpg'
import TableroCosenoPhi from '../assets/images/tableros/tableroCosenoPhi.jpeg'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Tableros = () => {
    return (
        <>
            <main className=''>
                <section>
                    <div style={{ backgroundColor: '#2c3e50', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='text-center tituloServicios'>Armado de tableros eléctricos</h2>
                    </div>
                </section>
                <section className='container' style={{ padding: '3em' }}>
                    <article>
                        <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                            <div className='col' style={{ padding: '10px' }}>
                                <h4 className='fw-bold'>Planificación</h4>
                                <p style={{ fontSize: '20px' }}>
                                    Primeramente, para determinar la disposición de los componentes en el tablero, se realiza un plano topográfico.
                                </p>
                                <p style={{ fontSize: '20px' }}>Este plano topográfico es un dibujo a escala de la instalación eléctrica, en el que se representan los elementos de la instalación y su ubicación.</p>
                            </div>
                            <div className='col-6' style={{ minWidth: '300px' }}>
                                <img className='rounded shadow img-fluid' src={TopograficoTablero} alt='Imagen topografico eléctrico' />
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                            <div className='col-6' style={{ minWidth: '300px' }}>
                                <img className='rounded shadow img-fluid' src={Plano} alt='Imagen plano eléctrico' />
                            </div>
                            <div className='col' style={{ padding: '10px' }}>
                                <h3 className='fw-bold' >Diseño</h3>
                                <p style={{ fontSize: '20px' }}>
                                    Para la confección de los planos, se detalla la identificación de los componentes y la numeración de los cables, con sus correspondientes características.
                                </p>
                                <p style={{ fontSize: '20px' }}>
                                    Lo que permite una rápida y eficiente identificación de los mismos, facilitando la tarea de mantenimiento y reparación.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                            <div className='col' style={{ padding: '10px' }}>
                                <h3 className='fw-bold' >Construcción</h3>
                                <p style={{ fontSize: '20px' }}>
                                    La construcción de los tableros se realiza en nuestro taller, con materiales de acorde al presupuesto y bajo normas de seguridad vigentes.
                                </p>
                                <p style={{ fontSize: '20px' }}>
                                    Una vez terminado, se lo monta en el espacio señalado, se realiza la puesta en marcha y pruebas de funcionamiento.
                                </p>
                            </div>
                            <div className='col-6' style={{ minWidth: '300px' }}>
                                <img className='rounded shadow img-fluid' src={TableroBPH} alt='Imagen tablero eléctrico' />
                            </div>
                        </div>
                    </article>
                </section>

                <section>
                    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#616161', minHeight: '300px' }}>
                        <h3 className='text-center' style={{ fontSize: '30px', color: '#fff' }}>Planificamos, diseñamos y construimos el tablero que su instalación o máquina necesite!</h3>
                    </div>
                </section>

                <section className="bg-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{ padding: '2em' }}>
                                <h3 className="fw-bold">Tableros de potencia y comando</h3>
                                <div className="d-flexalign-items-center">

                                    <div className="d-flex align-items-center">
                                        <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i>
                                        <p style={{ margin: '0' }}>Arranque de motores para equipos de bombeo en baja tensión</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i>
                                    <p style={{ margin: '0' }}>Tableros especiales para protecciones de equipos industriales</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i>
                                    <p style={{ margin: '0' }}>Tableros para protección de instalaciones contra sobre tensiones y rayos</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} >
                                    <a href={TableroPotencia}>
                                        <img alt="Tablero de potencia" src={TableroPotencia} className="img-fluid imagenTableros" />
                                    </a>
                                </LightGallery>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center flex-column" style={{ padding: '2em' }}>
                                <h3 className="fw-bold">Tableros de distribución</h3>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i><p style={{ margin: '0' }}>Tableros de distribución de líneas eléctricas para grandes consumidores</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i><p style={{ margin: '0' }}>Tableros con transformadores de aislación</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} >
                                    <a href={TableroDistribucion}>
                                        <img src={TableroDistribucion} className="img-fluid imagenTableros" alt="Tablero de distribución" />
                                    </a>
                                </LightGallery>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{ padding: '2em' }}>
                                <h3 className="fw-bold">Tableros de automatización y control</h3>
                                <div className='d-flex align-items-center'>
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i><p style={{ margin: '0' }}>Aperturas eléctricas de válvulas y compuertas</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i><p style={{ margin: '0' }}>Tableros de automatización para máquinas</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i><p style={{ margin: '0' }}>Tableros y sistemas de lazos cerrados</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i><p style={{ margin: '0' }}>Regulación de caudal y presión automáticos para sistemas de bombeo</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} >
                                    <a href={TableroControl}>
                                        <img src={TableroControl} className="img-fluid imagenTableros" alt="Tablero de control" />
                                    </a>
                                </LightGallery>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2 d-flex justify-content-center align-items-center flex-column" style={{ padding: '2em' }}>
                                <h3 className="fw-bold">Tableros para corrección de Factor de Potencia</h3>
                                <div className='d-flex align-items-center'>
                                    <i style={{ color: '#6788a3', fontSize: '25px' }} className="bi bi-check2-circle me-2"></i>
                                    <p style={{ margin: '0' }}>Banco de capacitores en baja tensión de 20 – 600 KVAr</p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]} >
                                    <a href={TableroCosenoPhi}>
                                        <img src={TableroCosenoPhi} className="img-fluid imagenTableros" alt="Tablero de Coseno Phi" />
                                    </a>
                                </ LightGallery>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
        </>
    );
}

export default Tableros;