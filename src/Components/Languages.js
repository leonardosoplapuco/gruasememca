// // import i18next from 'i18next';
// // import { useNavigate } from 'react-router-dom';

// // function LanguageSwitcher() {
// //   const navigate = useNavigate();

// //   const changeLanguage = (lng) => {
// //     i18next.changeLanguage(lng).then(() => {
// //       localStorage.setItem('language', lng);
// //       // Redirige solo la ruta base para cambiar el idioma
// //       navigate(`/${lng}`, { replace: true });
// //     }).catch(error => {
// //       console.error("Error changing language:", error);
// //     });
// //   };

// //   return (
// //     <div>
// //       <button onClick={() => changeLanguage('es')}>Español</button>
// //       <button onClick={() => changeLanguage('en')}>English</button>
// //     </div>
// //   );
// // }

// // export default LanguageSwitcher;

// import i18next from 'i18next';
// import { useNavigate, useLocation } from 'react-router-dom';

// function LanguageSwitcher() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const changeLanguage = (lng) => {
//     i18next.changeLanguage(lng).then(() => {
//       localStorage.setItem('language', lng);

//       // Obtiene la ruta actual y reemplaza el prefijo de idioma
//       const newPath = location.pathname.replace(/^\/(es|en)/, `/${lng}`);
//       navigate(newPath, { replace: true });
//     }).catch(error => {
//       console.error("Error changing language:", error);
//     });
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('es')}>Español</button>
//       <button onClick={() => changeLanguage('en')}>English</button>
//     </div>
//   );
// }

// export default LanguageSwitcher;

import i18next from 'i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  // Mapeo de rutas en español a inglés y viceversa
  const routeMap = {
    '/es': '/en',
    '/es/servicios': '/en/services',
    '/en': '/es',
    '/en/services': '/es/servicios'
  };

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng).then(() => {
      localStorage.setItem('language', lng);

      // Buscar la ruta correspondiente en el idioma seleccionado
      const currentPath = location.pathname;
      const newPath = routeMap[currentPath] || `/${lng}`;

      navigate(newPath, { replace: true });
    }).catch(error => {
      console.error("Error changing language:", error);
    });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
