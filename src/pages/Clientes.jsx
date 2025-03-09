import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LogosCLientes from '../json/LogosClientes.json'

const Clientes = () => {
    return (
        <>
            <main className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {LogosCLientes.map((result, index) => (
                        <div key={index} className="col logosClientes">
                            <LazyLoadImage src={result.img} className="col card-img-top" alt={result.title} />
                        </div>
                    ))
                    }
                </div>
            </main>
        </>
    );
}

export default Clientes;