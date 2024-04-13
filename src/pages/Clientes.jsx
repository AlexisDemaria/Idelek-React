import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LogosCLientes from '../json/LogosClientes.json'
import Loading from '../utils/Loading';

const Clientes = () => {
    return (
        <>
            <main className='container pag'>
                <h2 className='text-center' style={{margin:'2%'}}>Empresas que han decidido implementar nuestras soluciones</h2>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {LogosCLientes.map((result, index) => (
                        <div key={index} className="col logosClientes">
                            <LazyLoadImage src={result.img} className="col card-img-top" alt={result.title} placeholder={<Loading/>} />
                        </div>
                    ))
                    }
                </div>
            </main>
        </>
    );
}

export default Clientes;
