import React from 'react';
import Medicion from '../assets/images/servicios/medicion.webp'
import FotoMantenimiento from '../assets/images/servicios/mantenimiento1.webp'
import Cableado from '../assets/images/servicios/cableado.webp'
import Tijera from '../assets/images/servicios/tijera.webp'
import Hidro from '../assets/images/servicios/hidrohelevador.webp'

const Mantenimiento = () => {
    return (
        <>
            <main>
                <section>
                    <div style={{ backgroundColor: '#2c3e50', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='text-center tituloServicios'>Mantenimiento eléctrico y electrónico</h2>
                    </div>
                </section>
                <section style={{ margin: '7vh' }}>
                    <div className='container'>
                        <p style={{ fontSize: '20px' }}>Realizamos todo tipo de mantenimiento de electricidad y electrónica, montajes eléctricos, reparaciones, rehabilitaciones, reformas e instalaciones eléctricas, tanto industriales como comerciales, sea cual sea el tamaño de su empresa y la complejidad de los sistemas eléctricos.
                        </p>
                        <p style={{ fontSize: '20px' }}>Desarrollamos todas las fases de un buen mantenimiento industrial avanzado. Mantenimientos predictivos, correctivos y preventivos para garantizar el buen funcionamiento de las instalaciones y maquinaria.
                        </p>
                    </div>
                </section>
                <section className='galeria'>
                    <div className="imagen-container">
                        <img src={FotoMantenimiento} alt="Elemento quemado" />
                        <div className="overlay">
                            <h3>Predictivo</h3>
                            <p>La duración de algunos equipos y sistemas eléctricos y electrónicos es predecible y su obsolescencia permite determinar un plan de reposición, debido al normal desgaste o deterioro de sus componentes.
                            </p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Medicion} alt="Pliegos de especificaciones" />
                        <div className="overlay">
                            <h3>Correctivo</h3>
                            <p>Corregimos, reparamos y subsanamos todo tipo de averías en las instalaciones eléctricas que no requieren de la parada de producción, pero son convenientes para evitar averías mayores y disminuir riesgos.
                            </p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Cableado} alt="Inspección instalación" />
                        <div className="overlay">
                            <h3>Preventivo</h3>
                            <p>Se revisa, controla y supervisa la instalación, sin la necesidad de estacionar el total de la producción o parar la maquinaria, posteriormente, se realiza la intervención necesaria para un correcto funcionamiento.
                            </p>
                        </div>
                    </div>
                </section>


                <section>
                    <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#616161', minHeight: '300px' }}>
                        <h3 className='text-center' style={{ fontSize: '30px', color: '#fff' }}>Alumbrado e iluminación externa e interna</h3>
                    </div>
                </section>

                <section className='' style={{ margin: '7vh' }}>
                    <div className='container'>
                        <p style={{ fontSize: '20px' }}>En el ámbito del alumbrado e iluminación disponemos de todos los medios necesarios para dar un servicio global a cualquier tipo de necesidad. Disponemos de recursos propios para acometer de manera integral, rápida y eficaz este servicio.</p>
                        <p style={{ fontSize: '20px' }}>Tenemos maquinaria de elevación propia y un equipo técnico altamente cualificado para instalar y mantener cualquier tipo de instalación.</p>
                    </div>
                </section>

                <section className='container'>
                    <article>
                        <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                            <div className='col' style={{ padding: '10px' }}>
                                <h4 className='fw-bold'>Iluminación interior</h4>
                                <p style={{ fontSize: '20px' }}>
                                    Somos auténticos expertos en aportar soluciones eficientes, funcionales y decorativas, adaptando la iluminación al medio que corresponda.
                                </p>
                                <p style={{ fontSize: '20px' }}>Cumpliendo los estándares legales en iluminación cubrimos todo tipo de demanda en la industria, en comercio, en instituciones y monumentos, etcetera.</p>
                            </div>
                            <div className='col-6' style={{ minWidth: '300px' }}>
                                <img className='rounded shadow img-fluid' src={Tijera} alt='Plataforma de elevación' />
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className='row' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2em' }}>
                            <div className='col-6' style={{ minWidth: '300px' }}>
                                <img className='rounded shadow img-fluid' src={Hidro} alt='Hidroelevador' />
                            </div>
                            <div className='col' style={{ padding: '10px' }}>
                                <h3 className='fw-bold' >Iluminación exterior</h3>
                                <p style={{ fontSize: '20px' }}>
                                    Tenemos todo tipo de soluciones para un alumbrado eficiente. Estudiamos, asesoramos, instalamos y mantenemos cualquier tipo de iluminación exterior; viales, periféricas, etcetera.
                                </p>
                                <p style={{ fontSize: '20px' }}>
                                    Aportamos soluciones para hacer los sistemas más sostenibles, más rentables y mejor iluminadas.
                                </p>
                            </div>
                        </div>
                    </article>
                </section>

            </main >
        </>
    );
}

export default Mantenimiento;