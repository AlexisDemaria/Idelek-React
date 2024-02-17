import React from 'react';
import LogosCLientes from '../json/LogosClientes.json'

const Clientes = () => {
    return (
        <>
            <main className='container pag'>
                <h1 className='text-center' style={{margin:'2%'}}>Empresas que han decidido implementar nuestras soluciones</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {LogosCLientes.map((result, index) => (
                        <div key={index} className="col logosClientes">
                            <img src={result.img} className="col card-img-top" alt='{}' />
                        </div>
                    ))
                    }
                </div>
            </main>
        </>
    );
}

export default Clientes;
