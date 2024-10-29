import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isLocationsActive, setIsLocationsActive] = useState(false);
    const [isTranslateActive, setIsTranslateActive] = useState(false);
    const [isThemesActive, setIsThemesActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isSubMenuActive, setIsSubMenuActive] = useState(false);

    const handleMenuLinkClick = () => {
        setIsActive(!isActive);
    };

    const handleSubMenuClick = () => {
        setIsSubMenuActive(!isSubMenuActive);
    };

    const handleSubHeaderReturnClick = () => {
        setIsSubMenuActive(false);
    };

    const toggleLocations = () => {
        setIsLocationsActive(!isLocationsActive);
        setIsTranslateActive(false);
        setIsThemesActive(false);
    };

    const toggleTranslate = () => {
        setIsTranslateActive(!isTranslateActive);
        setIsLocationsActive(false);
        setIsThemesActive(false);
    };

    const toggleThemes = () => {
        setIsThemesActive(!isThemesActive);
        setIsLocationsActive(false);
        setIsTranslateActive(false);
    };

    const enableLightMode = () => {
        setIsDarkMode(false);
        localStorage.setItem('theme', 'light');
    };

    const enableDarkMode = () => {
        setIsDarkMode(true);
        localStorage.setItem('theme', 'dark');
    };

    const menuActive = () => {
        setIsMenuActive(!isMenuActive);
        if (isMenuActive) {
            setIsSubMenuActive(false);
        }
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <header>
            <div className='header'>
                <div className='header-top-container'>
                    <div className='header-top-content'>
                        <a href='/' className='header-top-logo'>
                            <h2>Grúas <b>Ememca</b></h2>
                        </a>

                        <nav className={`header-menu-container ${isMenuActive ? 'active' : ''}`}>
                            <ul className='header-menu'>
                                <li>
                                    <a href='/' className='menu-link menu-link-1'>
                                        <span className="material-symbols-outlined menu-link-repre-icon">home</span>
                                        <h2>Inicio</h2>
                                    </a>
                                </li>
                                <li>
                                    <button type='button' className={`menu-link menu-link-2 ${isActive ? 'active' : ''}`} onClick={() => { handleSubMenuClick(); handleMenuLinkClick();}}>
                                        <span className="material-symbols-outlined menu-link-repre-icon">handshake</span>
                                        <h2>Servicios</h2>
                                        <span className="material-symbols-outlined menu-link-arrow">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-3'>
                                        <span className="material-symbols-outlined menu-link-repre-icon">auto_towing</span>
                                        <h2>Maquinaria</h2>
                                        <span className="material-symbols-outlined menu-link-arrow">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-4'>
                                        <span className="material-symbols-outlined menu-link-repre-icon">work</span>
                                        <h2>Proyectos</h2>
                                        <span className="material-symbols-outlined menu-link-arrow">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='menu-link menu-link-5'>
                                        <span className="material-symbols-outlined menu-link-repre-icon">diversity_3</span>
                                        <h2>Nosotros</h2>
                                        <span className="material-symbols-outlined menu-link-arrow">keyboard_arrow_down</span>
                                    </button>
                                </li>
                                <li>
                                    <a href='/blog' className='menu-link menu-link-6'>
                                        <span className="material-symbols-outlined menu-link-repre-icon">newspaper</span>
                                        <h2>Blog</h2>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <a className='link link-2 margin-left header-top-contact'>
                            <h2 className='link-text'>Contáctanos</h2>
                            <span className="material-symbols-outlined">mail</span>
                        </a>

                        <button type='button' className={`menu-icon margin-left ${isMenuActive ? 'active' : ''}`} onClick={menuActive}>
                            <span className="material-symbols-outlined menu-icon-open">menu</span>
                            <span className="material-symbols-outlined menu-icon-close">close</span>
                        </button>
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
                                    <button type='button' className='link link-3 d-flex-center-left width-100 active'>
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
                                    <button type='button' onClick={enableLightMode} className='link link-3 d-flex-center-left width-100'>
                                        <span className='material-symbols-outlined'>light_mode</span>
                                        <p className='link-text'>Claro</p>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' onClick={enableDarkMode} className='link link-3 d-flex-center-left width-100'>
                                        <span className='material-symbols-outlined'>dark_mode</span>
                                        <p className='link-text'>Oscuro</p>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className={`sub-header-container ${isSubMenuActive ? 'active' : ''}`}>
                <div className='sub-header-content'>
                    <div className='sub-header-target sub-header-target-2 active'>
                        <div className='sub-header-target-column sub-header-target-column-1'>
                            <div className='d-flex-justify-between gap-10'>
                                <p className='sub-header-target-title'>Servicios</p>

                                <button type='button' className='sub-header-target-return' onClick={handleSubHeaderReturnClick}>
                                    <span className="material-symbols-outlined menu-icon-return">chevron_left</span>
                                </button>
                            </div>

                            <img src="https://gruasememca.vercel.app/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" className='img-simple' alt="Grúas Ememca SAC | Servicios"></img>

                            <div className='d-flex-column'>
                                <ul className='list-simple d-flex-column'>
                                    <li>
                                        <span className="material-symbols-outlined">check</span>
                                        <p className='text'>Flota de grúas telescopicas con capacidad de carga de hasta 220 toneladas.</p>
                                    </li>
                                    <li>
                                        <span className="material-symbols-outlined">check</span>
                                        <p className='text'>Camiones grúa con hasta 120 toneladas de capacidad máxima.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='sub-header-target-column sub-header-target-column-2'>
                            <ul className='sub-header-target-column-list'>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/alquiler-de-gruas-telescopicas-icono.png" alt="icono de grua"></img>
                                        <div className='d-flex-column'>
                                            <h4>Alquiler de grúas telescópicas</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/alquiler-de-camiones-grua-icono.png" alt="icono de camion grua"></img>
                                        <div className='d-flex-column'>
                                            <h4>Alquiler de camiones grúa</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/izaje-de-contenedores-icono.png" alt="icono de contenedor"></img>
                                        <div className='d-flex-column'>
                                            <h4>Izaje de contenedores</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/izaje-de-maquinaria-icono.png" alt="icono de excavadora"></img>
                                        <div className='d-flex-column'>
                                            <h4>Izaje de maquinaria</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/izaje-de-tanques-icono.png" alt="icono de tanque"></img>
                                        <div className='d-flex-column'>
                                            <h4>Izaje de tanques</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/izaje-de-postes-icono.png" alt="icono de excavadora"></img>
                                        <div className='d-flex-column'>
                                            <h4>Izaje de postes</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href='' className='sub-header-target-column-list-link'>
                                        <img src="https://gruasememca.vercel.app/assets/images/Components/Header/eliminacion-de-tierra-icono.png" alt="icono de excavadora"></img>
                                        <div className='d-flex-column'>
                                            <h4>Eliminación de tierra</h4>
                                            <p className='text'>gruas ememca leonardo favio soplapuco soplopuco</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='sub-header-bottom'>
                            <p>www.gruasememca.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
