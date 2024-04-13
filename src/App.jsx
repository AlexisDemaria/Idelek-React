import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import '../src/css/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToTopButton from './utils/ScrollToTopButton'
import ScrollToTop from './utils/ScrollToTop';
import Loading from './utils/Loading';

const Home = React.lazy(() => import('./pages/Home'))
const Ingenieria = React.lazy(() => import('./pages/Ingenieria'))
const Tableros = React.lazy(() => import('./pages/Tableros'))
const Instalaciones = React.lazy(() => import('./pages/Instalaciones'))
const Mantenimiento = React.lazy(() => import('./pages/Mantenimiento'))
const Termografia = React.lazy(() => import('./pages/Termografia'))
const Capacitacion = React.lazy(() => import('./pages/Capacitacion'))
const Clientes = React.lazy(() => import('./pages/Clientes'))
const Contacto = React.lazy(() => import('./pages/Contacto'))
const Error404 = React.lazy(() => import('./pages/Error404'))

const App = () => {
    return (
        <>
            <React.Suspense fallback={<Loading/>}>
                <BrowserRouter>
                    <NavBar />
                    <ScrollToTop />
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
                        <Route path='*' element={<Error404/>} />
                    </Routes>
                    <Footer />
                    <ScrollToTopButton />
                </BrowserRouter>
            </React.Suspense>
        </>
    );
}

export default App;