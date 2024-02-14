import React from 'react';
import Termografia1 from '../assets/images/servicios/camara-termografica.png'
import Telurimentro from '../assets/images/servicios/telurimetro.png'
import IntDif from '../assets/images/servicios/comprobador-int-dif.png'

const Termografia = () => {
    return (
        <>
            <main className='container'>
                <section>
                    <div>
                        <h2 className='text-center' style={{ margin: '10px' }}>
                            Termografía y mediciones eléctricas
                        </h2>
                    </div>
                    <div>
                        <p style={{ fontSize: '20px' }}>A traves de los estudios termográficos se evita costosas averías, riesgo de incendio y se detectan fallos eléctricos, sin parar la actividad. Se detectan en el análisis y de forma predictiva, anomalías imperceptibles a simple vista, pero que sí pueden apreciarse mediante la tecnología termográfica que utilizamos. Lo que permite realizar correcciones antes de que se produzcan costosos fallos en el sistema, accidentes, paradas en la actividad, y demás consecuencias indeseadas.</p>
                        <p style={{ fontSize: '20px' }}>Por otro lado, realizamos mediciones de puesta tierra y comprobaciones en disyuntores diferenciales. A traves de un telurómetro digital se realizan mediciones de la resistencia de puesta a tierra y para medir la resistividad del terreno.</p>
                        <p style={{ fontSize: '20px' }}>Con el comprobador de diferenciales obtenemos el flujo de la corriente y el tiempo en el que se ha provocado el corte.</p>
                    </div>
                </section>
                <section className='row'>
                    <div className="cardServicios col">
                        <img src={Termografia1} alt="Bandejas portacables" style={{ opacity: '1' }} />
                    </div>
                    <div className="cardServicios col">
                        <img src={Telurimentro} alt="Maquinaria" style={{ opacity: '1' }} />
                    </div>
                    <div className="cardServicios col">
                        <img src={IntDif} alt="Maquina neumática" style={{ opacity: '1' }} />
                    </div>
                </section>
            </main>
        </>
    );
}

export default Termografia;
