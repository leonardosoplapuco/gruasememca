import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';

import Page from './pages/Services/alquiler-de-gruas-telescopicas/alquiler-de-gruas-telescopicas';

import Machines from './pages/Machines/Machines';
import Projects from './pages/Projects/Projects';
import Us from './pages/Us/Us';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article/Article';

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" Component={HomePage} />
                        <Route path="/servicios" Component={Services} />

                        <Route path="/servicios/alquiler-de-gruas-telescopicas" Component={Page} />

                        <Route path="/maquinaria" Component={Machines} />
                        <Route path="/proyectos" Component={Projects} />
                        <Route path="/nosotros" Component={Us} />
                        <Route path="/blog" Component={Blog} />
                        <Route path="/blog/:slug" Component={Article} />
                    </Routes>
                </BrowserRouter>
            </div>
        </HelmetProvider>
    );
}

export default App;
