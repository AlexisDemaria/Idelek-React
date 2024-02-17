import React from 'react';
import Materiales from '../assets/images/servicios/materiales-electricos.png'
import Pliegos from '../assets/images/servicios/pliegos.png'
import Relevamiento from '../assets/images/servicios/relevamiento-obra.png'

const Ingenieria = () => {
    return (
        <>
            <main className='container pag'>
                <section>
                    <div>
                        <h2 className='text-center tituloServicios'>Servicios de ingeniería eléctrica y electrónica</h2>
                    </div>
                    <div className='row'>
                        <ul className="col list-group list-group-flush" style={{ minWidth: '250px', margin: '10px' }}>
                            <li className="list-group-item">Diseño e implementación de proyectos eléctricos</li>
                            <li className="list-group-item">Dirección de proyectos eléctricos en general</li>
                            <li className="list-group-item">Supervisión en terreno de sub-contratistas</li>
                            <li className="list-group-item">Diseño de circuito eléctrico</li>
                        </ul>
                        <ul className='col list-group list-group-flush' style={{ minWidth: '250px', margin: '10px' }}>
                            <li className="list-group-item">Diseño de sistemas de control y automatización industrial</li>
                            <li className="list-group-item">Determinación de la potencia instalada</li>
                            <li className="list-group-item">Listados de materiales</li>
                            <li className="list-group-item">Diseño de redes de baja tensión</li>
                        </ul>
                    </div>
                </section>
                <div>
                    <h2 className='text-center' style={{ margin: '10px' }}>Generación y ejecución de proyectos</h2>
                </div>
                <section className='row'>
                    <div className="cardServicios col">
                        <img src={Materiales} alt="Materiales eléctricos" />
                        <div className="card-content">
                            <p>Estimación de costos, mano de obra y materiales</p>
                        </div>
                    </div>
                    <div className="cardServicios col">
                        <img src={Pliegos} alt="Pliegos de especificaciones" />
                        <div className="card-content">
                            <p>Confección de pliegos de especificaciones técnicas, generales y particulares. Planos generales y detalles a los fines de cotización</p>
                        </div>
                    </div>
                    <div className="cardServicios col">
                        <img src={Relevamiento} alt="Inspección instalación" />
                        <div className="card-content">
                            <p>Exposición de obras a proveedores; seguimiento, inspección y recepción de obras</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Ingenieria;
