import React from 'react';
import Tablero1 from '../assets/images/servicios/tablero.jpg'
import Tablero2 from '../assets/images/servicios/tablero.jpg'

const Tableros = () => {
    return (
        <>
            <main className='container'>
                <section>
                    <div>
                        <h2 className='text-center' style={{ margin: '10px' }}>Diseño y construcción de tableros eléctricos</h2>
                    </div>
                    <div className='row' style={{ margin: '10px' }}>
                        <ul className="col list-group list-group-flush" >
                            <li className="list-group-item">La parte más importante de un proyecto de instalaciones eléctricas son los Tableros Eléctricos, ya que su función principal es ser el sitio de maniobra y protección de toda la instalación, de las partes mecánicas y principalmente de sus usuarios, es por ello que su correcto diseño es de vital importancia. Todos los Tableros Eléctricos deben formar parte de una instalación eléctrica segura y duradera</li>
                            <li className="list-group-item">Los tableros diseñados se basan en los esquemas eléctricos o diagramas unifilares o de conexión, topográficos, planillas de cargas, y un listado de materiales como elementos principales y no definitivos</li>
                            <li className="list-group-item">Para la confección los esquemas o diagramas usamos un software específico, y particularmente los físicos o topográficos, dibujados a escala cada uno de los elementos que lo componen, pudiendo determinar de esta manera el tamaño del gabinete y el espacio que ocupará en el sitio de obra</li>
                        </ul>
                        <div className='col-3' style={{minHeight: '500px', minWidth: '300px'}}>
                            <img className='img-fluid' src={Tablero1} alt=''   />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col">
                            {/* <img src={Tablero2} alt='' style={{ height: 'max-content', maxWidth: '100%' }} /> */}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default Tableros;
