import React from 'react';
import Instalaciones1 from '../assets/images/servicios/montaje-bandejas.webp'
import Instalaciones3 from '../assets/images/servicios/instalaciones.webp'
import Tijera from '../assets/images/servicios/tijera.webp'

const Instalaciones = () => {
    return (
        <>
            <main className='container pag'>
                <section>
                    <div>
                        <h2 className='text-center tituloServicios' >Obras, montajes e instalaciones eléctricas</h2>
                    </div>
                    <div className='row'>
                        <ul className="col list-group list-group-flush" style={{ minWidth: '250px', margin: '10px' }}>
                            <li className="list-group-item">Instalaciones eléctricas de fuerza motriz</li>
                            <li className="list-group-item">Instrumentación de procesos, conexión a equipo y a tablero</li>
                            <li className="list-group-item">Acometidas y puesta en servicio de maquinaria de línea de producción</li>
                            <li className="list-group-item">Programación y configuración de equipos industriales</li>
                        </ul>
                        <ul className='col list-group list-group-flush' style={{ minWidth: '250px', margin: '10px' }}>
                            <li className="list-group-item">Instalaciones neumáticas</li>
                            <li className="list-group-item">Relevamiento, análisis y diagnostico de sistemas</li>
                            <li className="list-group-item">Puesta en marcha</li>
                            <li className="list-group-item">Alumbrado publico interno y/o externo</li>
                        </ul>
                    </div>
                </section>
                <div>
                    <h2 className='text-center tituloServicios' >Relevamiento, análisis y ejecución</h2>
                </div>
                <section className='row'>
                    <div className="cardServicios col">
                        <img src={Instalaciones1} alt="Bandejas portacables" style={{ opacity: '1' }} />
                    </div>
                    <div className="cardServicios col">
                        <img src={Tijera} alt="Maquinaria" style={{ opacity: '1' }} />
                    </div>
                    <div className="cardServicios col">
                        <img src={Instalaciones3} alt="Maquina neumática" style={{ opacity: '1' }} />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Instalaciones;
