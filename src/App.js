import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import Us from './pages/Us/Us';
import Services from './pages/Services/Services';
import Machines from './pages/Machines/Machines';
import Projects from './pages/Projects/Projects';

function App() {
    return (
        <div className="App">
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" Component={HomePage}/>
                        <Route path="/nosotros" Component={Us}/>
                        <Route path="/servicios" Component={Services}/>
                        <Route path="/maquinaria" Component={Machines}/>
                        <Route path="/proyectos" Component={Projects}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
