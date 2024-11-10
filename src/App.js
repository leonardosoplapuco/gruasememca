// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import Header from './Components/Header';
// import LanguageSwitcher from './Components/Languages';
// import './i18n';

// import Home from './Pages/Home'

// function App(){
//     return (
//         <Router>
//             <LanguageSwitcher />
//             <Routes>
//                 <Route path="/" element={<Navigate replace to="/es"/>} />

//                 <Route path="/es" element={<Home/>}/>
//                 <Route path="/en" element={<Home/>}/>
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './Components/Languages';
import i18next from 'i18next';
import './i18n';

import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Verificar la ruta actual y establecer el idioma
    const currentPath = location.pathname;
    if (currentPath.startsWith('/en')) {
      i18next.changeLanguage('en');
    } else if (currentPath.startsWith('/es')) {
      i18next.changeLanguage('es');
    }
  }, [location]);

  return (
    <>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Navigate replace to="/es"/>} />

        <Route path="/es" element={<Home/>} />
        <Route path="/en" element={<Home/>} />

        <Route path="/es/servicios" element={<Services/>} />
        <Route path="/en/services" element={<Services/>} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
