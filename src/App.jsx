import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Ingenieria from './pages/Ingenieria'
import Tableros from './pages/Tableros'
import Obras from './pages/Obras'
import Mantenimiento from './pages/Mantenimiento'
import Clientes from './pages/Clientes';
import Contacto from './pages/Contacto'
import Footer from './components/Footer';
import '../src/css/App.css'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/ingenieria' element={<Ingenieria />} />
                    <Route path='/tableros-electricos' element={<Tableros />} />
                    <Route path='/obras-instalaciones' element={<Obras />} />
                    <Route path='/mantenimiento' element={<Mantenimiento />} />
                    <Route path='/clientes' element={<Clientes />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
