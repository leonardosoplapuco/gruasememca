// // import React, { useState } from 'react';
// // import './Header.css';

// // const Header = () => {
// //     const [isActive, setIsActive] = useState(false);

// //     const locationsButton = () => {
// //         setIsActive(!isActive);
// //     };

// //     return (
// //         <header>
// //             <div className='header'>
// //                 <div className='header-top-container'>
// //                     <div className='header-top-content'>
// //                         <a href='/' className='header-top-logo'>
// //                             <h2>Grúas <b>Ememca</b></h2>
// //                         </a>

// //                         <nav className='header-menu-container'>
// //                             <ul className='header-menu'>
// //                                 <li>
// //                                     <a href='/' className='menu-link menu-link-1'>
// //                                         <h2>Inicio</h2>
// //                                     </a>
// //                                 </li>
// //                                 <li>
// //                                     <button type='button' className='menu-link menu-link-2'>
// //                                         <h2>Servicios</h2>
// //                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                                     </button>
// //                                 </li>
// //                                 <li>
// //                                     <button type='button' className='menu-link menu-link-3'>
// //                                         <h2>Maquinaria</h2>
// //                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                                     </button>
// //                                 </li>
// //                                 <li>
// //                                     <button type='button' className='menu-link menu-link-4'>
// //                                         <h2>Proyectos</h2>
// //                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                                     </button>
// //                                 </li>
// //                                 <li>
// //                                     <button type='button' className='menu-link menu-link-5'>
// //                                         <h2>Nosotros</h2>
// //                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                                     </button>
// //                                 </li>
// //                                 <li>
// //                                     <a href='/blog' className='menu-link menu-link-6'>
// //                                         <h2>Blog</h2>
// //                                     </a>
// //                                 </li>
// //                             </ul>
// //                         </nav>

// //                         <a className='link link-2 margin-left header-top-contact'>
// //                             <h2 className='link-text'>Contáctanos</h2>
// //                             <span className="material-symbols-outlined">mail</span>
// //                         </a>
// //                     </div>
// //                 </div>

// //                 <div className='header-bottom-container'>
// //                     <div className='header-bottom-content d-flex'>
// //                         <nav className='header-bottom-locations-container'>
// //                             <button type='button' onClick={locationsButton} title='Ubícanos' className={`link link-3 header-bottom-locations-button ${isActive ? 'active' : ''}`}>
// //                                 <span className="material-symbols-outlined">near_me</span>
// //                                 <p className='link-text'>Ubícanos</p>
// //                                 <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                             </button>

// //                             <ul className={`header-bottom-locations d-flex-column gap-5 ${isActive ? 'active' : ''}`}>
// //                                 <li>
// //                                     <a href="https://maps.app.goo.gl/XmmXfiNq4ZeCVLpa6" className='link link-3 d-flex-center-left' target='_blank'>
// //                                         <span className="material-symbols-outlined">location_on</span>
// //                                         <p className='link-text'>Av. Ate, Ate</p>
// //                                         <span class="material-symbols-outlined">arrow_forward</span>
// //                                     </a>
// //                                 </li>
// //                                 <li>
// //                                     <a href="https://maps.app.goo.gl/LrmKdffdM1k3GWHg7" className='link link-3 d-flex-center-left' target='_blank'>
// //                                         <span className="material-symbols-outlined">location_on</span>
// //                                         <p className='link-text'>Antigua panamericana sur, Lurín</p>
// //                                         <span class="material-symbols-outlined">arrow_forward</span>
// //                                     </a>
// //                                 </li>
// //                             </ul>
// //                         </nav>

// //                         <form className='header-search-bar-container'>
// //                             <input placeholder='Buscar en gruasememca.com' className='header-search-bar'></input>
// //                             <span className="material-symbols-outlined">search</span>
// //                         </form>

// //                         <nav className='header-bottom-translate-container'>
// //                             <button type='button' title='Idioma' className='link link-3 header-bottom-translate-button'>
// //                                 <span className="material-symbols-outlined">g_translate</span>
// //                                 <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                             </button>

// //                             <ul className='header-bottom-translates d-flex-column gap-5'>
// //                                 <li>
// //                                     <button type='button' className='link link-3 d-flex-center-left width-100' target='_blank'>
// //                                         <span className='peru-layer'></span>
// //                                         <p className='link-text'>ES</p>
// //                                     </button>
// //                                 </li>
// //                                 <li>
// //                                     <button type='button' className='link link-3 d-flex-center-left width-100' target='_blank'>
// //                                         <span className='eeuu-layer'>
// //                                             <span className='eeuu-blue'></span>

// //                                             <span className='eeuu-line eeuu-line-1'></span>
// //                                             <span className='eeuu-line eeuu-line-2'></span>
// //                                             <span className='eeuu-line eeuu-line-3'></span>
// //                                             <span className='eeuu-line eeuu-line-4'></span>
// //                                         </span>
// //                                         <p className='link-text'>EN</p>
// //                                     </button>
// //                                 </li>
// //                             </ul>
// //                         </nav>

// //                         <nav className='header-bottom-themes-container'>
// //                             <button type='button' title='Tema' className='link link-3 header-bottom-themes-button'>
// //                                 <span className="material-symbols-outlined">contrast</span>
// //                                 <span className="material-symbols-outlined">keyboard_arrow_down</span>
// //                             </button>

// //                             <ul className='header-bottom-themes d-flex-column gap-5'>
// //                                 <li>
// //                                     <button type='button' className='link link-3 d-flex-center-left width-100' target='_blank'>
// //                                         <span className='material-symbols-outlined'>light_mode</span>
// //                                         <p className='link-text'>Claro</p>
// //                                     </button>
// //                                 </li>
// //                                 <li>
// //                                     <button type='button' className='link link-3 d-flex-center-left width-100' target='_blank'>
// //                                         <span className='material-symbols-outlined'>dark_mode</span>
// //                                         <p className='link-text'>Oscuro</p>
// //                                     </button>
// //                                 </li>
// //                             </ul>
// //                         </nav>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className='sub-header-container'>
// //                 <nav className='sub-header-content'>
// //                     <ul className='sub-header-2'>
// //                         asdasd
// //                     </ul>
// //                 </nav>
// //             </div>
// //         </header>
// //     );
// // };

// // export default Header;

// import React, { useState } from 'react';
// import './Header.css';

// const Header = () => {
//     // Estados para controlar las clases 'active'
//     const [isLocationsActive, setIsLocationsActive] = useState(false);
//     const [isTranslateActive, setIsTranslateActive] = useState(false);
//     const [isThemesActive, setIsThemesActive] = useState(false);

//     // Funciones para alternar la clase 'active' para cada botón y menú
//     const toggleLocations = () => {
//         setIsLocationsActive(!isLocationsActive);
//     };

//     const toggleTranslate = () => {
//         setIsTranslateActive(!isTranslateActive);
//     };

//     const toggleThemes = () => {
//         setIsThemesActive(!isThemesActive);
//     };

//     return (
//         <header>
//             <div className='header'>
//                 <div className='header-top-container'>
//                     <div className='header-top-content'>
//                         <a href='/' className='header-top-logo'>
//                             <h2>Grúas <b>Ememca</b></h2>
//                         </a>

//                         <nav className='header-menu-container'>
//                             <ul className='header-menu'>
//                                 <li>
//                                     <a href='/' className='menu-link menu-link-1'>
//                                         <h2>Inicio</h2>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <button type='button' className='menu-link menu-link-2'>
//                                         <h2>Servicios</h2>
//                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button type='button' className='menu-link menu-link-3'>
//                                         <h2>Maquinaria</h2>
//                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button type='button' className='menu-link menu-link-4'>
//                                         <h2>Proyectos</h2>
//                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button type='button' className='menu-link menu-link-5'>
//                                         <h2>Nosotros</h2>
//                                         <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <a href='/blog' className='menu-link menu-link-6'>
//                                         <h2>Blog</h2>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </nav>

//                         <a className='link link-2 margin-left header-top-contact'>
//                             <h2 className='link-text'>Contáctanos</h2>
//                             <span className="material-symbols-outlined">mail</span>
//                         </a>
//                     </div>
//                 </div>

//                 <div className='header-bottom-container'>
//                     <div className='header-bottom-content d-flex'>
//                         <nav className='header-bottom-locations-container'>
//                             <button
//                                 type='button'
//                                 onClick={toggleLocations}
//                                 title='Ubícanos'
//                                 className={`link link-3 header-bottom-locations-button ${isLocationsActive ? 'active' : ''}`}
//                             >
//                                 <span className="material-symbols-outlined">near_me</span>
//                                 <p className='link-text'>Ubícanos</p>
//                                 <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                             </button>

//                             <ul className={`header-bottom-locations d-flex-column gap-5 ${isLocationsActive ? 'active' : ''}`}>
//                                 <li>
//                                     <a href="https://maps.app.goo.gl/XmmXfiNq4ZeCVLpa6" className='link link-3 d-flex-center-left' target='_blank'>
//                                         <span className="material-symbols-outlined">location_on</span>
//                                         <p className='link-text'>Av. Ate, Ate</p>
//                                         <span class="material-symbols-outlined">arrow_forward</span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="https://maps.app.goo.gl/LrmKdffdM1k3GWHg7" className='link link-3 d-flex-center-left' target='_blank'>
//                                         <span className="material-symbols-outlined">location_on</span>
//                                         <p className='link-text'>Antigua panamericana sur, Lurín</p>
//                                         <span class="material-symbols-outlined">arrow_forward</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </nav>

//                         <form className='header-search-bar-container'>
//                             <input placeholder='Buscar en gruasememca.com' className='header-search-bar'></input>
//                             <span className="material-symbols-outlined">search</span>
//                         </form>

//                         {/* Menú de idiomas */}
//                         <nav className='header-bottom-translate-container'>
//                             <button
//                                 type='button'
//                                 onClick={toggleTranslate}
//                                 title='Idioma'
//                                 className={`link link-3 header-bottom-translate-button ${isTranslateActive ? 'active' : ''}`}
//                             >
//                                 <span className="material-symbols-outlined">g_translate</span>
//                                 <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                             </button>

//                             <ul className={`header-bottom-translates d-flex-column gap-5 ${isTranslateActive ? 'active' : ''}`}>
//                                 <li>
//                                     <button type='button' className='link link-3 d-flex-center-left width-100'>
//                                         <span className='peru-layer'></span>
//                                         <p className='link-text'>ES</p>
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button type='button' className='link link-3 d-flex-center-left width-100'>
//                                         <span className='eeuu-layer'>
//                                             <span className='eeuu-blue'></span>
//                                             <span className='eeuu-line eeuu-line-1'></span>
//                                             <span className='eeuu-line eeuu-line-2'></span>
//                                             <span className='eeuu-line eeuu-line-3'></span>
//                                             <span className='eeuu-line eeuu-line-4'></span>
//                                         </span>
//                                         <p className='link-text'>EN</p>
//                                     </button>
//                                 </li>
//                             </ul>
//                         </nav>

//                         {/* Menú de temas */}
//                         <nav className='header-bottom-themes-container'>
//                             <button
//                                 type='button'
//                                 onClick={toggleThemes}
//                                 title='Tema'
//                                 className={`link link-3 header-bottom-themes-button ${isThemesActive ? 'active' : ''}`}
//                             >
//                                 <span className="material-symbols-outlined">contrast</span>
//                                 <span className="material-symbols-outlined">keyboard_arrow_down</span>
//                             </button>

//                             <ul className={`header-bottom-themes d-flex-column gap-5 ${isThemesActive ? 'active' : ''}`}>
//                                 <li>
//                                     <button type='button' className='link link-3 d-flex-center-left width-100'>
//                                         <span className='material-symbols-outlined'>light_mode</span>
//                                         <p className='link-text'>Claro</p>
//                                     </button>
//                                 </li>
//                                 <li>
//                                     <button type='button' className='link link-3 d-flex-center-left width-100'>
//                                         <span className='material-symbols-outlined'>dark_mode</span>
//                                         <p className='link-text'>Oscuro</p>
//                                     </button>
//                                 </li>
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>
//             </div>

//             <div className='sub-header-container'>
//                 <nav className='sub-header-content'>
//                     <ul className='sub-header-2'>
//                         asdasd
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;

import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    // Estados para controlar las clases 'active'
    const [isLocationsActive, setIsLocationsActive] = useState(false);
    const [isTranslateActive, setIsTranslateActive] = useState(false);
    const [isThemesActive, setIsThemesActive] = useState(false);

    // Función para alternar la clase 'active' en Ubícanos y desactivar los otros dos
    const toggleLocations = () => {
        setIsLocationsActive(!isLocationsActive);
        setIsTranslateActive(false);
        setIsThemesActive(false);
    };

    // Función para alternar la clase 'active' en Idioma y desactivar los otros dos
    const toggleTranslate = () => {
        setIsTranslateActive(!isTranslateActive);
        setIsLocationsActive(false);
        setIsThemesActive(false);
    };

    // Función para alternar la clase 'active' en Tema y desactivar los otros dos
    const toggleThemes = () => {
        setIsThemesActive(!isThemesActive);
        setIsLocationsActive(false);
        setIsTranslateActive(false);
    };

    return (
        <header>
            <div className='header'>
                <div className='header-top-container'>
                    <div className='header-top-content'>
                        <a href='/' className='header-top-logo'>
                            <h2>Grúas <b>Ememca</b></h2>
                        </a>

                        <nav className='header-menu-container'>
                            <ul className='header-menu'>
                                <li>
                                    <a href='/' className='menu-link menu-link-1'>
                                        <h2>Inicio</h2>
                                    </a>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-2'>
                                        <h2>Servicios</h2>
                                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-3'>
                                        <h2>Maquinaria</h2>
                                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-4'>
                                        <h2>Proyectos</h2>
                                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-5'>
                                        <h2>Nosotros</h2>
                                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <a href='/blog' className='menu-link menu-link-6'>
                                        <h2>Blog</h2>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <a className='link link-2 margin-left header-top-contact'>
                            <h2 className='link-text'>Contáctanos</h2>
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom-content d-flex'>
                        <nav className='header-bottom-locations-container'>
                            <button type='button' onClick={toggleLocations} title='Ubícanos' className={`link link-3 header-bottom-locations-button ${isLocationsActive ? 'active' : ''}`}>
                                <span className="material-symbols-outlined">near_me</span>
                                <p className='link-text'>Ubícanos</p>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <ul className={`header-bottom-locations d-flex-column gap-5 ${isLocationsActive ? 'active' : ''}`}>
                                <li>
                                    <a href="https://maps.app.goo.gl/XmmXfiNq4ZeCVLpa6" className='link link-3 d-flex-center-left' target='_blank'>
                                        <span className="material-symbols-outlined">location_on</span>
                                        <p className='link-text'>Av. Ate, Ate</p>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://maps.app.goo.gl/LrmKdffdM1k3GWHg7" className='link link-3 d-flex-center-left' target='_blank'>
                                        <span className="material-symbols-outlined">location_on</span>
                                        <p className='link-text'>Antigua panamericana sur, Lurín</p>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <form className='header-search-bar-container'>
                            <input placeholder='Buscar en gruasememca.com' className='header-search-bar'></input>
                            <span className="material-symbols-outlined">search</span>
                        </form>

                        <nav className='header-bottom-translate-container'>
                            <button type='button' onClick={toggleTranslate} title='Idioma' className={`link link-3 header-bottom-translate-button ${isTranslateActive ? 'active' : ''}`}>
                                <span className="material-symbols-outlined">g_translate</span>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <ul className={`header-bottom-translates d-flex-column gap-5 ${isTranslateActive ? 'active' : ''}`}>
                                <li>
                                    <button type='button' className='link link-3 d-flex-center-left width-100'>
                                        <span className='peru-layer'></span>
                                        <p className='link-text'>ES</p>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='link link-3 d-flex-center-left width-100'>
                                        <span className='eeuu-layer'>
                                            <span className='eeuu-blue'></span>
                                            <span className='eeuu-line eeuu-line-1'></span>
                                            <span className='eeuu-line eeuu-line-2'></span>
                                            <span className='eeuu-line eeuu-line-3'></span>
                                            <span className='eeuu-line eeuu-line-4'></span>
                                        </span>
                                        <p className='link-text'>EN</p>
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <nav className='header-bottom-themes-container'>
                            <button type='button' onClick={toggleThemes} title='Tema' className={`link link-3 header-bottom-themes-button ${isThemesActive ? 'active' : ''}`}>
                                <span className="material-symbols-outlined">contrast</span>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <ul className={`header-bottom-themes d-flex-column gap-5 ${isThemesActive ? 'active' : ''}`}>
                                <li>
                                    <button type='button' className='link link-3 d-flex-center-left width-100'>
                                        <span className='material-symbols-outlined'>light_mode</span>
                                        <p className='link-text'>Claro</p>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='link link-3 d-flex-center-left width-100'>
                                        <span className='material-symbols-outlined'>dark_mode</span>
                                        <p className='link-text'>Oscuro</p>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='sub-header-container'>
                <nav className='sub-header-content'>
                    <ul className='sub-header-2'>
                        asdasd
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
