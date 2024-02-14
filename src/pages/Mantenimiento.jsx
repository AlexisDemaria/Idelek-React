import React from 'react';
import Medicion from '../assets/images/servicios/medicion.png'
import Mantenimiento1 from '../assets/images/servicios/mantenimiento1.png'
import Cableado from '../assets/images/servicios/cableado.png'

const Mantenimiento = () => {
    return (
        <>
            <main className='container'>
                <section>
                    <div>
                        <h2 className='text-center' style={{ margin: '10px' }}>Mantenimiento eléctrico - electrónico</h2>
                    </div>
                    <div className=''>
                        <p style={{ fontSize: '20px' }}>Realizamos todo tipo de mantenimiento de electricidad y electrónica, montajes eléctricos, reparaciones, rehabilitaciones, reformas e instalaciones eléctricas, tanto industriales como comerciales, sea cual sea el tamaño de su empresa y la complejidad de los sistemas eléctricos.</p>
                        <p style={{ fontSize: '20px' }}>Desarrollamos todas las fases de un buen mantenimiento industrial avanzado. Mantenimientos Predictivos, Correctivos y Preventivos para garantizar el buen funcionamiento de las instalaciones y maquinaria.</p>
                    </div>
                </section>
                <section className='row'>
                    <div className="cardServicios col">
                        <div className="card-content">
                            <img src={Mantenimiento1} alt="Cable quemado" />
                            <h4>Predictivo</h4>
                            <p>La duración de algunos equipos y sistemas eléctricos y electrónicos es predecible y su obsolescencia permite determinar un plan de reposición, debido al normal desgaste o deterioro de sus componentes</p>
                        </div>
                    </div>
                    <div className="cardServicios col">
                        <div className="card-content">
                            <img src={Medicion} alt="Medición con multímetro" />
                            <h4>Correctivo</h4>
                            <p>Corregimos, reparamos y subsanamos todo tipo de averías en las instalaciones eléctricas que no requieren de la parada de producción, pero son convenientes para evitar averías mayores</p>
                        </div>
                    </div>
                    <div className="cardServicios col">
                        <div className="card-content">
                            <img src={Cableado} alt="Cambio cableado" />
                            <h4>Preventivo</h4>
                            <p>Sustituimos el sistema eléctrico reemplazándolo mientras tanto por otro similar mientras se revisa el original, cuando la tarea puede realizarse fuera de sus instalaciones</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Mantenimiento;
