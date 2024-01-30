import React, { Suspense } from 'react';
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
import ScrollToTopButton from './utils/ScrollToTopButton'
import Loading from './utils/Loading';
import '../src/css/App.css'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/ingenieria' element={<Ingenieria />} />
                            <Route path='/tableros-electricos' element={<Tableros />} />
                            <Route path='/obras-instalaciones' element={<Obras />} />
                            <Route path='/mantenimiento' element={<Mantenimiento />} />
                            <Route path='/clientes' element={<Clientes />} />
                            <Route path='/contacto' element={<Contacto />} />
                        </Routes>
                </Suspense>
                <Footer />
                <ScrollToTopButton />
            </BrowserRouter>
        </>
    );
}

export default App;


// import React, { Suspense } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';
// import ScrollToTopButton from './utils/ScrollToTopButton'
// import Loading from './utils/Loading';
// import '../src/css/App.css'

// const Home = React.lazy(() => import('./pages/Home'));
// const Ingenieria = React.lazy(() => import('./pages/Ingenieria'));
// const Tableros = React.lazy(() => import('./pages/Tableros'));
// const Obras = React.lazy(() => import('./pages/Obras'));
// const Mantenimiento = React.lazy(() => import('./pages/Mantenimiento'));
// const Clientes = React.lazy(() => import('./pages/Clientes'));
// const Contacto = React.lazy(() => import('./pages/Contacto'));

// const App = () => {
//     return (
//         <>
//             <BrowserRouter>
//                 <NavBar />
//                 <Suspense fallback={<Loading />}>
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/ingenieria' element={<Ingenieria />} />
//                         <Route path='/tableros-electricos' element={<Tableros />} />
//                         <Route path='/obras-instalaciones' element={<Obras />} />
//                         <Route path='/mantenimiento' element={<Mantenimiento />} />
//                         <Route path='/clientes' element={<Clientes />} />
//                         <Route path='/contacto' element={<Contacto />} />
//                     </Routes>
//                 </Suspense>
//                 <Footer />
//                 <ScrollToTopButton />
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;
