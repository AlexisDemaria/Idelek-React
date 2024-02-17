import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/css/App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTopButton from './utils/ScrollToTopButton'
import Home from './pages/Home';
import Ingenieria from './pages/Ingenieria'
import Tableros from './pages/Tableros'
import Instalaciones from './pages/Instalaciones'
import Mantenimiento from './pages/Mantenimiento'
import Termografia from './pages/Termografia'
import Capacitacion from './pages/Capacitacion'
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/ingenieria' element={<Ingenieria />} />
                            <Route path='/tableros' element={<Tableros />} />
                            <Route path='/instalaciones' element={<Instalaciones />} />
                            <Route path='/mantenimiento' element={<Mantenimiento />} />
                            <Route path='/termografia' element={<Termografia />} />
                            <Route path='/capacitacion' element={<Capacitacion />} />
                            <Route path='/clientes' element={<Clientes />} />
                            <Route path='/contacto' element={<Contacto />} />
                        </Routes>
                <Footer />
                <ScrollToTopButton />
            </BrowserRouter>
        </>
    );
}

export default App;