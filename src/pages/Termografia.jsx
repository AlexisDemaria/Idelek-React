import React from 'react';
import Termografia1 from '../assets/images/servicios/camara-termografica.webp'
import Telurimentro from '../assets/images/servicios/telurimetro.webp'
import IntDif from '../assets/images/servicios/comprobador-int-dif.webp'

const Termografia = () => {
    return (
        <>
            <main className=''>
                <section>
                    <div style={{ backgroundColor: '#2c3e50', minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h2 className='tituloServicios text-center'>Termografía y mediciones eléctricas</h2>
                    </div>
                </section>
                <section className='container'>
                    <div style={{ fontSize: '20px', margin:'7vh' }}>
                        <p>A traves de los estudios termográficos se evita costosas averías, riesgo de incendio y se detectan fallos eléctricos, sin parar la actividad. Se detectan en el análisis y de forma predictiva, anomalías imperceptibles a simple vista, pero que sí pueden apreciarse mediante la <strong>cámara termográfica</strong> que utilizamos. Lo que permite realizar correcciones antes de que se produzcan costosos fallos en el sistema, accidentes, paradas en la actividad, y demás consecuencias indeseadas.</p>
                        <p>Por otro lado, realizamos mediciones de puesta tierra y comprobaciones en disyuntores diferenciales. A traves de un <strong>telurímetro digital</strong> se realizan mediciones de la resistencia de puesta a tierra y para medir la resistividad del terreno.</p>
                        <p>Con el <strong>comprobador de diferenciales</strong> obtenemos el flujo de la corriente y el tiempo en el que se ha provocado el corte.</p>
                    </div>
                </section>
                <section className='galeria'>
                    <div className="imagen-container">
                        <img src={Termografia1} alt="Cámara termográfica" />
                        <div className="overlay">
                            <p>Con la cámara visualizamos la existencia o no, de un borne flojo en la instalación, lo que puede provocar incendios.</p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={Telurimentro} alt="Telurimetro" />
                        <div className="overlay">
                            <p>El telurimetro nos brinda información sobre el estado de las puesta a tierra de las instalaciones.</p>
                        </div>
                    </div>
                    <div className="imagen-container">
                        <img src={IntDif} alt="Comprobador de diferenciales" />
                        <div className="overlay">
                            <p>Con el medidor o tester de interruptores diferenciales, se mide el tiempo de corte de los mismos.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Termografia;