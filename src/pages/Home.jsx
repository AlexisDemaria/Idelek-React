import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PLC from '../assets/images/plc-1200.webp';
import LogosCLientes from '../json/LogosClientes.json'
import LogoIdk from '../assets/images/logoIdk.webp';
import TableroGrande from '../assets/images/tableros-electricos-instalacion.webp';
import TableroChico from '../assets/images/tablero-chico.webp';
import Ingenieria from '../assets/images/proyectos_electricos.jpg'
import Tablero from '../assets/images/tablero-bph.jpg'
import Mantenimiento from '../assets/images/electri-1611612488.webp'
import Instalaciones from '../assets/images/instalaciones.webp'
import Termografia from '../assets/images/termografia.webp'
import Capacitacion from '../assets/images/capacitacion.jpeg'

const Home = () => {
    return (
        <>
            <main className='container-fluid p-0'>
                <section className='position-relative'>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval={3000}>
                                <img src={PLC} className="d-block w-100" alt="PLC" />
                            </div>
                            <div className="carousel-item" data-bs-interval={3000}>
                                <img src={TableroGrande} className="d-block w-100" alt="Medición tablero" />
                            </div>
                            <div className="carousel-item" data-bs-interval={3000}>
                                <img src={TableroChico} className="d-block w-100" alt="Tablero térmicas" />
                            </div>
                        </div>
                    </div>
                    <div className='logoTexto' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <LazyLoadImage style={{ height: '80%', width: '80%' }} fetchpriority='low' src={LogoIdk} className='img-fluid d-block mx-auto' alt='Logo Idelek' />
                        <div>
                            <hr className='linea'></hr>
                            <p className='text-center' style={{ fontSize: '18px', fontWeight: 'bold', color: '#212529' }}>Podemos ayudarle en todos los problemas electrónicos y eléctricos de baja tensión que tenga su empresa, mire los servicios que somos capaces de ofrecer!</p>
                            <div className='align-items-center d-flex justify-content-center'>
                                <a className='botonQuienesSomos' href='#servicios'>Conocer más!</a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='' style={{ backgroundColor: '#2e3c49', minHeight: '500px' }}>
                    <div className='container'>
                        <div className='' style={{ paddingTop: '30px' }}>
                            <h2 className='tituloQuienesSomos text-uppercase'>Quienes somos</h2>
                            <hr className='lineaQuienesSomos'></hr>
                        </div>
                        <div className='textoQuienesSomos'>
                            <p>Somos una empresa de prestación de servicios con <strong>más de 30 años de experiencia</strong> en el gremio de electricidad y electrónica industrial. Una evolución permanente en la confección de anteproyectos y <strong>proyectos de ingeniería</strong>, el diseño y armado de tableros eléctricos, ejecución de obras y montajes de nuevas instalaciones y mantenimiento de las existentes.</p>
                            <p>Contamos con la capacidad y la eficiencia para desempeñar todas las tareas en dichos rubros, es por ello que brindamos servicios a terminales <strong> automotrices</strong> del país, a grandes <strong>empresas alimenticias</strong> de gran renombre y a un gran número de <strong>PYMES regionales</strong>.</p>
                            <p>Cada cliente es único, como lo es el proyecto que requiere, por lo tanto, es nuestro principal objetivo satisfacer todas las necesidades de nuestros clientes <strong>en calidad, precio y tiempos adecuados</strong>.</p>
                        </div>
                        <div className='align-items-center d-flex justify-content-center'>
                            <Link className='botonQuienesSomos' to='/contacto'>Contáctanos</Link>
                        </div>
                    </div>
                </section>

                <section className='container' id='servicios'>
                    <div style={{ paddingTop: '7vh' }}>
                        <h2 className='tituloHome text-uppercase'>Servicios</h2>
                        <hr className='linea'></hr>
                    </div>
                    <div className='row'>
                        <div className="col" style={{ minWidth: '230px' }}><i style={{ fontSize: '10vh', color: '#6788a3', padding: '20px' }} className="bi bi-lightbulb d-flex justify-content-center"></i>
                            <p className='text-center' style={{ fontSize: '18px' }}>Comentenos su idea, inconveniente o inquietud sobre instalaciones y / o máquinas nuevas o existentes</p>
                        </div>
                        <div className="col" style={{ minWidth: '230px' }}><i style={{ fontSize: '10vh', color: '#6788a3', padding: '20px' }} className="bi bi-journal-check  d-flex justify-content-center"></i>
                            <p className='text-center' style={{ fontSize: '18px' }}>Le realizaremos una propuesta sobre el problema mencionado, con la cotización correspondiente</p>
                        </div>
                        <div className="col" style={{ minWidth: '230px' }}><i style={{ fontSize: '10vh', color: '#6788a3', padding: '20px' }} className="bi bi-wrench-adjustable d-flex justify-content-center"></i>
                            <p className='text-center' style={{ fontSize: '18px' }}>Realizamos el trabajo con herramientas y personal de calidad, dejando el inconveniente solucionado</p>
                        </div>
                    </div>
                </section>

                <section className="galeria" style={{ marginTop: "10vh" }}>
                    <Link to="/ingenieria" className="imagen-container">
                        <img src={Ingenieria} alt="Ingenieria" />
                        <div className="overlay">
                            <h3>Ingeniería y proyectos</h3>
                            <p>Diseño, implementación y dirección de redes de baja tensión, sistemas de control y automatización.</p>
                        </div>
                    </Link>

                    <Link to="/tableros" className="imagen-container">
                        <img src={Tablero} alt="Tablero" />
                        <div className="overlay">
                            <h3>Tableros eléctricos</h3>
                            <p>Construcción de TGBT (Tablero General de Baja Tensión), corrector de Coseno de Phi "φ", de distribución, de control de potencia, y más.</p>
                        </div>
                    </Link>

                    <Link to="/mantenimiento" className="imagen-container">
                        <img src={Mantenimiento} alt="Mantenimiento" />
                        <div className="overlay">
                            <h3>Mantenimiento industrial</h3>
                            <p>Control, intervención y modificación sobre maquinas y/o instalaciones ya existentes.</p>
                        </div>
                    </Link>

                    <Link to="/instalaciones" className="imagen-container">
                        <img src={Instalaciones} alt="Instalaciones" />
                        <div className="overlay">
                            <h3>Instalaciones</h3>
                            <p>Relevamiento, análisis y ejecución sobre el sector donde se desea implementar soluciones eléctricas y electrónicas.</p>
                        </div>
                    </Link>

                    <Link to="/termografia" className="imagen-container">
                        <img src={Termografia} alt="Termografía" />
                        <div className="overlay">
                            <h3>Termografía y mediciones</h3>
                            <p>Estudio termográfico sobre instalaciones, mediciones de redes, puesta tierra y disyuntores diferenciales.</p>
                        </div>
                    </Link>

                    <Link to="/capacitacion" className="imagen-container">
                        <img src={Capacitacion} alt="Capacitación" />
                        <div className="overlay">
                            <h3>Capacitación eléctrica industrial</h3>
                            <p>Brindamos capacitaciones referidas a cuidados, recomendaciones y normas a cumplir en el ámbito eléctrico industrial.</p>
                        </div>
                    </Link>
                </section>

                <section style={{ backgroundColor: '#616161', minHeight: '300px' }}>
                    <div className='align-items-center d-flex justify-content-center'>
                        <p className='text-center' style={{ fontSize: '30px', paddingTop: '40px', color: '#fff' }}>Contactenos via WhatsApp!</p>
                    </div>
                    <div className='align-items-center d-flex justify-content-center'>
                        <p className='botonWhatsApp'><a className='botonWhatsApp' href="https://api.whatsapp.com/send?phone=5493515165848" target="_blank" rel="noreferrer"><i style={{ padding: '6px', fontSize: '22px' }} className="bi bi-whatsapp"></i>Ir a WhatsApp</a></p>
                    </div>
                </section>

                <section className='container'>
                    <div style={{ paddingTop: '7vh' }}>
                        <h2 className='tituloHome text-uppercase'>Clientes</h2>
                        <hr className='linea'></hr>
                    </div>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                "@0.00": {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                "@0.75": {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                "@1.00": {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                "@1.50": {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            {LogosCLientes.map((result, index) => (
                                <SwiperSlide key={index}>
                                    <img src={result.img} alt={result.title}></img>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;