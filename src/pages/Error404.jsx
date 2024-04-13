import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
    return (
        <>
            <main className='container pag'>
                <p className='text-center' style={{ fontWeight: 'bold', fontSize: '14.3vh' }}>Error 404</p>
                <h1 className='text-center tituloServicios'>La página solicitada no está en el servidor</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Link className='btn form-button' to='/' >Vuelve al inicio</Link>
                </div>
            </main>
        </>
    )
}
