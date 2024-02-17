import React from 'react';

const Contacto = () => {
    return (
        <>
            <main className='container pag'>
                <article className='form'>
                    <div className="fondoForm">
                        <div className="row">
                            <div className="col" style={{ minWidth: '300px' }}>
                                <div>
                                    <h3 className="text-white">Contáctenos</h3>
                                    <p className="text-white">¿Como le podemos ayudar?</p>
                                </div>
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9628.02876167981!2d-64.14512187454255!3d-31.441055402663952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd464c1cb11f%3A0x7be951ace254581f!2sIdelek%20S.A.S%20-%20Electr%C3%B3nica%20y%20electricidad%20industrial!5e0!3m2!1ses!2sar!4v1708106535024!5m2!1ses!2sar"
                                        style={{ height: '100%', width: '100%' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title='Ubicación Idelek'
                                    />
                                </div>
                                <div className="links" id="bordering">
                                    <p><a className='' href='https://maps.app.goo.gl/qtHc1mjJZHagBLH39'><i style={{ padding: '6px' }} className="bi bi-geo-alt-fill" />Alonso de Reinoso 3449 - Córdoba capital, Córdoba, Argentina.</a></p>
                                    <p><a className='' href='mailto:info@idelek.com.ar'><i style={{ padding: '6px' }} className="bi bi-envelope-at-fill" />info@idelek.com.ar</a></p>
                                    <p><a className='' href='tel:+5493515165848'><i style={{ padding: '6px' }} className="bi bi-telephone-fill" />351-5165848</a></p>
                                </div>
                            </div>
                            <div className="col">
                                <form className="msg-form" method='post' action='mail.php' encType='multipart/form-data'>
                                    <div className="form-group">
                                        <label htmlFor="name" className="h6">Empresa</label>
                                        <div className="input-group border rounded">
                                            <div className="input-group-addon px-2 pt-1">
                                                <i className="bi bi-building"></i>
                                            </div>
                                            <input type="text" name='nombreEmpresa' className="form-control border-0" placeholder='Nombre de la empresa' required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name" className="h6">Nombre</label>
                                        <div className="input-group border rounded">
                                            <div className="input-group-addon px-2 pt-1">
                                                <i className="bi bi-person-fill"></i>
                                            </div>
                                            <input type="text" name='name' className="form-control border-0" placeholder='Su nombre' required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" className="h6">Email</label>
                                        <div className="input-group border rounded">
                                            <div className="input-group-addon px-2 pt-1">
                                                <i className="bi bi-envelope-fill"></i>
                                            </div>
                                            <input type="email" name='email' className="form-control border-0" placeholder='ejemplo@email.com' required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col" style={{ minWidth: '200px' }}>
                                            <div className="form-group">
                                                <label htmlFor="" className="h6">Telefono</label>
                                                <div className="input-group border rounded">
                                                    <div className="input-group-addon px-2 pt-1">
                                                        <i className="bi bi-telephone-fill"></i>
                                                    </div>
                                                    <input type="tel" name="phone" className="form-control border-0" placeholder='Número celular' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col" style={{ minWidth: '200px' }}>
                                            <div className="form-group">
                                                <label htmlFor="" className="h6">Ciudad</label>
                                                <div className="input-group border rounded">
                                                    <div className="input-group-addon px-2 pt-1">
                                                        <i className="bi bi-pin-map-fill"></i>
                                                    </div>
                                                    <input type="location" name='location' className="form-control border-0" placeholder='Localidad' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="msg" className="h6">Mensaje</label>
                                        <textarea
                                            name="message"
                                            id="msgus"
                                            cols={10}
                                            rows={5}
                                            className="form-control bg-light"
                                            placeholder="En que lo podemos ayudar..."
                                            defaultValue={""}
                                            required />
                                    </div>
                                    {/* <div className="">
                                        <label htmlFor="exampleFormControlFile1" className="h6">Adjunte el archivo que desee</label>
                                        <div className="input-group border rounded">
                                            <div className="input-group-addon px-2 pt-1">
                                                <i className="bi bi-folder-fill"></i>
                                            </div>
                                            <input type="file" name="archivo" />
                                        </div>
                                    </div> */}
                                    <div className="form-group d-flex justify-content-center align-items">
                                        {/* <button type="submit" className="btn form-button" defaultValue="">Enviar consulta</button> */}
                                        <input type="submit" className="btn form-button" defaultValue="" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Contacto;
