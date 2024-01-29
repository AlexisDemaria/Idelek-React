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
                        <div class="parallax">
                        </div>
                        <div className='textoTitulo' >
                            <h2 className='tituloQs'>QUIENES SOMOS</h2>
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
                        <h2 className='titulosHome'>SERVICIOS</h2>
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
                                    <p className="text-title">Armado de tableros</p>
                                    <p className="text-body">Construcción a solicitud del cliente de TGBT (Tablero General de Baja Tensión), de distribución, de control de potencia, etcétera.</p>
                                </div>
                                <Link className='card-button' to='/tableros-electricos' >Ver más</Link>
                            </div>
                            <div className="card col">
                                <div className="card-details">
                                    <p className="text-title">Obras e instalaciones</p>
                                    <p className="text-body">Relevamiento, análisis y ejecución sobre el sector donde se desea implementar soluciones eléctricas y electrónicas.</p>
                                </div>
                                <Link className='card-button' to='/obras-instalaciones' >Ver más</Link>
                            </div>
                            <div className="card col">
                                <div className="card-details">
                                    <p className="text-title">Mantenimiento</p>
                                    <p className="text-body">Control, intervención y modificación sobre maquinas y/o instalaciones ya existentes, para que funcionen a gusto del cliente o de manera adecuada.</p>
                                </div>
                                <Link className='card-button' to='/mantenimiento' >Ver más</Link>
                            </div>
                        </div>
                    </article>

                    <article className='container'>
                        <h2 className='titulosHome'>CLIENTES</h2>
                        <hr className='linea'></hr>
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
                                        <img src={result.img} alt='' />
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
