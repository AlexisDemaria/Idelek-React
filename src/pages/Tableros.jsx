import React from 'react';
import Plano from '../assets/images/servicios/plano.webp';

const Tableros = () => {
    return (
        <>
            <main className='container pag'>
                <div>
                    <h2 className='text-center tituloServicios'>Diseño y construcción de tableros eléctricos</h2>
                </div>
                <section className='row ' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ul className="col list-group list-group-flush" style={{ minWidth: '330px' }} >
                        <li className="list-group-item">La parte más importante de un proyecto de instalaciones eléctricas son los tableros eléctricos, ya que su función principal es ser el sitio de maniobra y protección de toda la instalación, de las partes mecánicas y principalmente de sus usuarios, es por ello que su correcto diseño es de vital importancia. Todos los tableros eléctricos deben formar parte de una instalación eléctrica segura y duradera.</li>
                        <li className="list-group-item">Los tableros diseñados se basan en los esquemas eléctricos o diagramas unifilares o de conexión, topográficos, planillas de cargas y un listado de materiales como elementos principales y no definitivos.</li>
                        <li className="list-group-item">Para la confección los esquemas o diagramas usamos un software específico, y particularmente los físicos o topográficos, dibujados a escala cada uno de los elementos que lo componen, pudiendo determinar de esta manera el tamaño del gabinete y el espacio que ocupará en el sitio de obra.</li>
                    </ul>
                    <div className='col-4' style={{ minWidth: '300px' }}>
                        <img className='img-fluid' src={Plano} alt='Imagen plano eléctrico' />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className='tituloServicios'>Tableros de potencia y comando</h3>
                        <div style={{ marginLeft: '3vh' }}>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Arranque de motores para equipos de bombeo en baja tensión</p>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Tableros especiales para protecciones de equipos industriales</p>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Tableros para protección de instalaciones contra sobre tensiones y rayos</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='tituloServicios'>Tableros de distribución</h3>
                        <div style={{ marginLeft: '3vh' }}>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Tableros de distribución de líneas eléctricas para grandes consumidores</p>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Tableros con trasformadores de aislación</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='tituloServicios'>Tableros de automatización y control</h3>
                        <div style={{ marginLeft: '3vh' }}>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Aperturas eléctricas de válvulas y compuestas</p>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Tableros de automatización para maquinas</p>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Tableros y sistemas lazos cerrados</p>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Regulación de caudal y presión automáticos para sistemas de bombeo</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='tituloServicios'>Tableros para corrección del Coseno de Phi</h3>
                        <div style={{ marginLeft: '3vh' }}>
                            <p style={{ fontSize: '18px' }}><i className="bi bi-check2-circle" style={{ color: '#6788a3', padding: '6px', fontSize: '24px' }}></i>Banco de capacitores en baja tensión de 20 – 600 KVAr</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Tableros;
