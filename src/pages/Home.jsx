import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import LogosCLientes from '../json/LogosClientes.json'
import LogoIdk from '../assets/images/logoIdk.png';
import PLC from '../assets/images/plc-1200.png';
import TableroGrande from '../assets/images/tableros-electricos-instalacion.png';
import TableroChico from '../assets/images/tablero-chico.png';


const Home = () => {
    return (
        <>
            <main className='home container-fluid p-0'>
                <section className='position-relative'>
                    <article>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div style={{ maxHeight: '600px', opacity: '0.4' }} className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval={3000}>
                                    <img src={PLC} className="d-block w-100" alt="Imagen 1" />
                                </div>
                                <div className="carousel-item" data-bs-interval={3000}>
                                    <img src={TableroChico} className="d-block w-100" alt="Imagen 2" />
                                </div>
                                <div className="carousel-item" data-bs-interval={3000}>
                                    <img src={TableroGrande} className="d-block w-100" alt="Imagen 3" />
                                </div>
                            </div>
                        </div>
                        <div style={{ maxHeight: '600px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            <img src={LogoIdk} className='img-fluid d-block mx-auto' alt='Logo Idelek' />
                        </div>
                    </article>
                </section>
                <section className='container-fluid p-0'>
                    <article className='position-relative'>
                        <div className="parallax">
                        </div>
                        <div className='textoTitulo' >
                            <h2 className='tituloQs text-uppercase'>Quienes somos</h2>
                            <div className='textoHome' >
                                <p>
                                    Somos una empresa de prestación de servicios con una experiencia de más de 30 años en el gremio de electricidad y electrónica industrial. Una evolución permanente en la confección de anteproyectos y proyectos de ingeniería, el diseño y armado de tableros eléctricos, ejecución de obras y montajes de nuevas instalaciones, y mantenimiento de las existentes.
                                </p>
                                <p>
                                    Contamos con la capacidad y la eficiencia para desempeñar todas las tareas en dichos rubros, es por ello que brindamos servicios a terminales automotrices del país, a grandes empresas alimenticias de gran renombre y a un gran número de PYMES regionales.
                                </p>
                                <p>
                                    Cada cliente es único, como lo es el proyecto que requiere, por lo tanto, es nuestro principal objetivo satisfacer todas las necesidades de nuestros clientes, en calidad, precio y tiempos adecuados.
                                </p>
                            </div>
                        </div>
                    </article>
                    <article className='container'>
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
                                    <p className="text-title">Instalaciones</p>
                                    <p className="text-body">Relevamiento, análisis y ejecución sobre el sector donde se desea implementar soluciones eléctricas y electrónicas.</p>
                                </div>
                                <Link className='card-button' to='/instalaciones' >Ver más</Link>
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
                                    <p className="text-title">Termografía y mediciones</p>
                                    <p className="text-body">Estudio termográfico sobre instalaciones, mediciones de redes, puesta tierra y disyuntores diferenciales.</p>
                                </div>
                                <Link className='card-button' to='/termografia' >Ver más</Link>
                            </div>
                            <div className="card col">
                                <div className="card-details">
                                    <p className="text-title">Alumbrado público</p>
                                    <p className="text-body">Montaje de iluminaria y cambio de artefactos ya sea en obra nueva como en instalaciones existentes.</p>
                                </div>
                                <Link className='card-button' to='/alumbrado' >Ver más</Link>
                            </div>
                        </div>
                    </article>
                    <article className='container'>
                        <div>
                            <h2 className='tituloHome text-uppercase'>Clientes</h2>
                            <hr className='linea'></hr>
                        </div>
                        <div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
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
                                        <img src={result.img} alt={result.title} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Home;
