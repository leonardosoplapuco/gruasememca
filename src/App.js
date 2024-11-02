import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import i18n from './i18next';

import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';

import Machines from './pages/Machines/Machines';
import Projects from './pages/Projects/Projects';
import Us from './pages/Us/Us';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article/Article';

import Contact from './pages/Contact/Contact';

function App(){
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    i18n.changeLanguage(savedLanguage);

    return (
        <HelmetProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" Component={HomePage} />

                        <Route path="/servicios" Component={Services} />
                        <Route path="/services" Component={Services} />
                        
                        <Route path="/maquinaria" Component={Machines} />
                        <Route path="/machinery" Component={Machines} />

                        <Route path="/proyectos" Component={Projects} />
                        <Route path="/projects" Component={Projects} />

                        <Route path="/nosotros" Component={Us} />
                        <Route path="/about-us" Component={Us} />

                        <Route path="/blog" Component={Blog} />
                        <Route path="/blog/:slug" Component={Article} />

                        <Route path="/contacto" Component={Contact} />
                        <Route path="/contact" Component={Contact} />
                    </Routes>
                </BrowserRouter>
            </div>
        </HelmetProvider>
    );
}

export default App;
