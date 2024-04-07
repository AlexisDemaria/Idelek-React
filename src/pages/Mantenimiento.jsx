import React from 'react';
import Medicion from '../assets/images/servicios/medicion.png'
import Mantenimiento1 from '../assets/images/servicios/mantenimiento1.png'
import Cableado from '../assets/images/servicios/cableado.png'
import Tijera from '../assets/images/servicios/tijera.jpg'
import Hidro from '../assets/images/servicios/hidrohelevador.jpg'

const Mantenimiento = () => {
    return (
        <>
            <main className='container pag'>
                <section>
                    <article>
                        <div>
                            <h2 className='text-center tituloServicios' >Mantenimiento eléctrico - electrónico</h2>
                        </div>
                        <div className=''>
                            <p style={{ fontSize: '20px' }}>Realizamos todo tipo de mantenimiento de electricidad y electrónica, montajes eléctricos, reparaciones, rehabilitaciones, reformas e instalaciones eléctricas, tanto industriales como comerciales, sea cual sea el tamaño de su empresa y la complejidad de los sistemas eléctricos.</p>
                            <p style={{ fontSize: '20px' }}>Desarrollamos todas las fases de un buen mantenimiento industrial avanzado. Mantenimientos Predictivos, Correctivos y Preventivos para garantizar el buen funcionamiento de las instalaciones y maquinaria.</p>
                        </div>
                    </article>
                    <article className='row' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div className="cardServicios col">
                            <div className="card-content">
                                <img src={Mantenimiento1} alt="Elemento quemado" />
                                <h4>Predictivo</h4>
                                <p>La duración de algunos equipos y sistemas eléctricos y electrónicos es predecible y su obsolescencia permite determinar un plan de reposición, debido al normal desgaste o deterioro de sus componentes</p>
                            </div>
                        </div>
                        <div className="cardServicios col">
                            <div className="card-content">
                                <img src={Medicion} alt="Medición con multímetro" />
                                <h4>Correctivo</h4>
                                <p>Corregimos, reparamos y subsanamos todo tipo de averías en las instalaciones eléctricas que no requieren de la parada de producción, pero son convenientes para evitar averías mayores y disminuir riesgos</p>
                            </div>
                        </div>
                        <div className="cardServicios col">
                            <div className="card-content">
                                <img src={Cableado} alt="Reemplazo cableado" />
                                <h4>Preventivo</h4>
                                <p>Se revisa, controla y supervisa la instalación, sin la necesidad de estacionar el total de la producción o parar la maquinaria, posteriormente, se realiza la intervención necesaria para un correcto funcionamiento</p>
                            </div>
                        </div>
                    </article>
                </section>
                <section>
                    <article>
                        <div>
                            <h2 className='text-center tituloServicios' >Alumbrado e iluminación externa e interna</h2>
                        </div>
                        <div className=''>
                            <p style={{ fontSize: '20px' }}>En el ámbito del alumbrado e iluminación disponemos de todos los medios necesarios para dar un servicio global a cualquier tipo de necesidad. Disponemos de recursos propios para acometer de manera integral, rápida y eficaz este servicio.</p>
                            <p style={{ fontSize: '20px' }}>Tenemos maquinaria de elevación propia y un equipo técnico altamente cualificado para instalar y mantener cualquier tipo de instalación.</p>
                        </div>
                    </article>
                    <article style={{marginTop:'5vh'}}>
                        <div className='row' style={{ height: '100%' }}>
                            <div className="col" >
                                <div className="row" >
                                    <div className="col">
                                        <h4>Iluminación interior</h4>
                                        <p style={{ fontSize: '18px', minWidth: '250px' }}>Somos auténticos expertos en aportar soluciones eficientes, funcionales y decorativas, adaptando la iluminación al medio que corresponda. Cumpliendo los estándares legales en iluminación cubrimos todo tipo de demanda en la industria, en comercio, en instituciones y monumentos, etcetera.</p>
                                    </div>
                                    <div className='cardServicios col' >
                                        <img src={Tijera} alt="" style={{ height: 'max-content', width: '100%', minWidth: '300px', opacity: '1' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row" >
                                    <div className="col">
                                        <h4>Iluminación exterior</h4>
                                        <p style={{ fontSize: '18px', minWidth: '250px' }}>Tenemos todo tipo de soluciones para un alumbrado eficiente. Estudiamos, asesoramos, instalamos y mantenemos cualquier tipo de iluminación exterior; viales, periféricas, etcetera. Aportamos soluciones para hacer los sistemas más sostenibles, más rentables y mejor iluminadas.</p>
                                    </div>
                                    <div className="cardServicios col">
                                        <img src={Hidro} alt="" style={{ height: 'max-content', width: '100%', minWidth: '300px', opacity: '1' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}

export default Mantenimiento;
