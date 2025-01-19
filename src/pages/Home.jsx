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
import Parallax from "../components/Parallax";

const Home = () => {
    return (
        <>
            <main className='pag container-fluid p-0'>
                <section className='position-relative'>
                    <article>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval={3000}>
                                    <LazyLoadImage src={PLC} className="d-block w-100" alt="PLC" />
                                </div>
                                <div className="carousel-item" data-bs-interval={3000}>
                                    <LazyLoadImage src={TableroGrande} className="d-block w-100" alt="Medición tablero" />
                                </div>
                                <div className="carousel-item" data-bs-interval={3000}>
                                    <LazyLoadImage src={TableroChico} className="d-block w-100" alt="Tablero térmicas" />
                                </div>
                            </div>
                        </div>

                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <LazyLoadImage style={{ height: '80%', width: '80%' }} fetchpriority='low' src={LogoIdk} className='img-fluid d-block mx-auto' alt='Logo Idelek' />
                        </div>
                    </article>
                </section>
                <section className='position-relative'>
                    <div>
                        <Parallax />
                    </div>
                    <div className='textoTitulo'>
                        <h2 className='tituloQs text-uppercase'>Quienes somos</h2>
                        <div className='textoHome'>
                            <p>Somos una empresa de prestación de servicios con <strong>más de 30 años de experiencia</strong> en el gremio de electricidad y electrónica industrial. Una evolución permanente en la confección de anteproyectos y <strong>proyectos de ingeniería</strong>, el diseño y armado de tableros eléctricos, ejecución de obras y montajes de nuevas instalaciones y mantenimiento de las existentes.</p>
                            <p>Contamos con la capacidad y la eficiencia para desempeñar todas las tareas en dichos rubros, es por ello que brindamos servicios a terminales <strong> automotrices</strong> del país, a grandes <strong>empresas alimenticias</strong> de gran renombre y a un gran número de <strong>PYMES regionales</strong>.</p>
                            <p>Cada cliente es único, como lo es el proyecto que requiere, por lo tanto, es nuestro principal objetivo satisfacer todas las necesidades de nuestros clientes <strong>en calidad, precio y tiempos adecuados</strong>.</p>
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <h2 className='tituloHome text-uppercase'>Servicios</h2>
                    <hr className='linea'></hr>
                    <div className='row'>
                        <div className="card col">
                            <div className="card-details">
                                <p className="text-title">Ingeniería y proyectos</p>
                                <p className="text-body">Diseño, implementación y dirección de redes de baja tensión, sistemas de control y automatización.</p>
                            </div>
                            <Link className='card-button' to='/ingenieria' >Ver más</Link>
                        </div>
                        <div className="card col">
                            <div className="card-details">
                                <p className="text-title">Tableros eléctricos</p>
                                <p className="text-body">Construcción de TGBT (Tablero General de Baja Tensión), corrector de Coseno de Phi "φ", de distribución, de control de potencia, y más.</p>
                            </div>
                            <Link className='card-button' to='/tableros' >Ver más</Link>
                        </div>
                        <div className="card col">
                            <div className="card-details">
                                <p className="text-title">Mantenimiento industrial</p>
                                <p className="text-body">Control, intervención y modificación sobre maquinas y/o instalaciones ya existentes.</p>
                            </div>
                            <Link className='card-button' to='/mantenimiento' >Ver más</Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="card col">
                            <div className="card-details">
                                <p className="text-title">Instalaciones</p>
                                <p className="text-body">Relevamiento, análisis y ejecución sobre el sector donde se desea implementar soluciones eléctricas y electrónicas.</p>
                            </div>
                            <Link className='card-button' to='/instalaciones' >Ver más</Link>
                        </div>
                        <div className="card col">
                            <div className="card-details">
                                <p className="text-title">Termografía y mediciones</p>
                                <p className="text-body">Estudio termográfico sobre instalaciones, mediciones de redes, puesta tierra y disyuntores diferenciales.</p>
                            </div>
                            <Link className='card-button' to='/termografia' >Ver más</Link>
                        </div>
                        <div className="card col">
                            <div className="card-details">
                                <p className="text-title">Capacitación eléctrica industrial</p>
                                <p className="text-body">Brindamos clases referidos a cuidados, recomendaciones y normas a cumplir en el ámbito eléctrico industrial.</p>
                            </div>
                            <Link className='card-button' to='/capacitacion' >Ver más</Link>
                        </div>
                    </div>
                </section>
                <section className='container'>
                    <div>
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
                                    {/* <LazyLoadImage src={result.img} alt={result.title} /> */}
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