import React from 'react';
import Termografia1 from '../assets/images/servicios/camara-termografica.webp'
import Telurimentro from '../assets/images/servicios/telurimetro.webp'
import IntDif from '../assets/images/servicios/comprobador-int-dif.webp'

const Termografia = () => {
    return (
        <>
            <main className='container pag'>
                <section>
                    <div>
                        <h2 className='text-center tituloServicios'>
                            Termografía y mediciones eléctricas
                        </h2>
                    </div>
                    <div style={{ fontSize: '20px' }}>
                        <p>A traves de los estudios termográficos se evita costosas averías, riesgo de incendio y se detectan fallos eléctricos, sin parar la actividad. Se detectan en el análisis y de forma predictiva, anomalías imperceptibles a simple vista, pero que sí pueden apreciarse mediante la <strong>cámara termográfica</strong> que utilizamos. Lo que permite realizar correcciones antes de que se produzcan costosos fallos en el sistema, accidentes, paradas en la actividad, y demás consecuencias indeseadas.</p>
                        <p>Por otro lado, realizamos mediciones de puesta tierra y comprobaciones en disyuntores diferenciales. A traves de un <strong>telurímetro digital</strong> se realizan mediciones de la resistencia de puesta a tierra y para medir la resistividad del terreno.</p>
                        <p>Con el <strong>comprobador de diferenciales</strong> obtenemos el flujo de la corriente y el tiempo en el que se ha provocado el corte.</p>
                    </div>
                </section>
                <section className='row'>
                    <div className="cardServicios col">
                        <img src={Termografia1} alt="Cámara termográfica" style={{ opacity: '1' }} />
                    </div>
                    <div className="cardServicios col">
                        <img src={Telurimentro} alt="Telurómetro" style={{ opacity: '1' }} />
                    </div>
                    <div className="cardServicios col">
                        <img src={IntDif} alt="Comprobador de diferenciales" style={{ opacity: '1' }} />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Termografia;