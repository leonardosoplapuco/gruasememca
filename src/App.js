import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Usar Routes en lugar de Switch
import { useTranslation } from 'react-i18next';
import i18n from './i18n';  // Archivo de configuración de i18next
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  const { i18n } = useTranslation();

  // Este useEffect se ejecuta cada vez que el idioma cambia
  useEffect(() => {
    const language = i18n.language;
    document.documentElement.lang = language; // Establece el atributo lang del <html>
  }, [i18n.language]);

  useEffect(() => {
    const path = window.location.pathname;
    const language = path.split('/')[1]; // Obtiene el idioma de la ruta

    if (language === 'en' || language === 'es') {
      i18n.changeLanguage(language);  // Cambia el idioma según la ruta
    }
  }, [i18n]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/en" element={<HomePage />} />
        <Route path="/es" element={<HomePage />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
};

export default App;
