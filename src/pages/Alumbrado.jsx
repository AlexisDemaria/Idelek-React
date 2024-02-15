import React from 'react';
import Tijera from '../assets/images/servicios/tijera.jpg'
import Hidro from '../assets/images/servicios/hidrohelevador.jpg'

const Alumbrado = () => {
    return (
        <>
            <main className='container'>
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
                    <article>
                        <div className='row' style={{ height: '100%' }}>
                            <div className="col" style={{ marginTop: '20px' }}>
                                <div className="row" style={{ minWidth: '400px' }}>
                                    <div className="col" >
                                        <h4>Iluminación interior</h4>
                                        <p style={{ fontSize: '18px' }}>Somos auténticos expertos en aportar soluciones eficientes, funcionales y decorativas, adaptando la iluminación al medio que corresponda. Cumpliendo los estándares legales en iluminación cubrimos todo tipo de demanda en la industria, en comercio, en instituciones y monumentos, etcetera.</p>
                                    </div>
                                    <div className='cardServicios col' >
                                        <img src={Tijera} alt="" style={{ height: 'max-content', width: '100%', minWidth: '350px', opacity:'1' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col" style={{ marginTop: '20px' }}>
                                <div className="row" style={{ minWidth: '400px' }}>
                                    <div className="col" >
                                        <h4>Iluminación exterior</h4>
                                        <p style={{ fontSize: '18px' }}>Tenemos todo tipo de soluciones para un alumbrado eficiente. Estudiamos, asesoramos, instalamos y mantenemos cualquier tipo de iluminación exterior; viales, periféricas, etcetera. Aportamos soluciones para hacer los sistemas más sostenibles, más rentables y mejor iluminadas.</p>
                                    </div>
                                    <div className="cardServicios col">
                                        <img src={Hidro} alt="" style={{ height: 'max-content', width: '100%', minWidth: '350px', opacity:'1' }} />
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

export default Alumbrado;
