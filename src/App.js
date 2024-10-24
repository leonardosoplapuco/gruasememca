import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Services from './pages/Services/Services';
import Machines from './pages/Machines/Machines';
import Projects from './pages/Projects/Projects';
import Us from './pages/Us/Us';
import Blog from './pages/Blog/Blog';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={HomePage}/>
                    <Route path="/servicios" Component={Services}/>
                    <Route path="/maquinaria" Component={Machines}/>
                    <Route path="/proyectos" Component={Projects}/>
                    <Route path="/nosotros" Component={Us}/>
                    <Route path="/blog" Component={Blog}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
