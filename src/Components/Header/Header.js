import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import '../../i18next';

import './Header.css';

const Header = () => {

    /**/

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
    };

    /**/

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === 'true';
    });

    const handleToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', isDarkMode);
    }, [isDarkMode]);

    /**/

    const [activeMenu, setActiveMenu] = useState(null);

    const handleMenuClick = (menuId) => {
        setActiveMenu((prevActiveMenu) => (prevActiveMenu === menuId ? null : menuId));
    };

    /**/

    const [activeButton, setActiveButton] = useState(null);

    const toggleLocations = () => {
        setActiveButton(prev => (prev === 'locations' ? null : 'locations'));
    };

    const toggleTranslate = () => {
        setActiveButton(prev => (prev === 'translate' ? null : 'translate'));
    };

    /**/

    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(prev => !prev);
    };

    /**/

    const handleCloseSubHeader = () => {
        setActiveMenu(null);
    };

    /**/

    return(
        <>
            <header>
                <div className='header-top-container'>
                    <div className='header-top'>
                        
                        <a href='/' className='header-logo t-100ms'>
                            <h2>GRÚAS <b>EMEMCA</b></h2>
                        </a>

                        <nav className={`menu-container ${isMenuActive ? 'active' : ''}`}>
                            <ul className='menu'>
                                {t('Menu', { returnObjects: true }).map((menuLink) => (
                                    <li key={menuLink.id}>
                                        {menuLink.id === 2 || menuLink.id === 3 || menuLink.id === 4 ? (
                                            <button type='button' className={`menu-link menu-link-${menuLink.id} ${activeMenu === menuLink.id ? 'active' : ''}`} onClick={() => handleMenuClick(menuLink.id)}>
                                                <span className="material-symbols-outlined menu-link-icon-representation">{menuLink.icon}</span>
                                                <h2>{menuLink.text}</h2>
                                                <span className="material-symbols-outlined menu-link-chevron-right">chevron_right</span>
                                            </button>
                                        ) : (
                                            <a href={menuLink.url} className={`menu-link menu-link-${menuLink.id}`}>
                                                <span className="material-symbols-outlined menu-link-icon-representation">{menuLink.icon}</span>
                                                <h2>{menuLink.text}</h2>
                                                <span className="material-symbols-outlined menu-link-chevron-right">arrow_forward</span>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav className='header-top-links margin-left'>
                            <ul className='d-flex gap-10'>
                                {t('HederContactLinks', { returnObjects: true }).map((headerContact) => (
                                    <li key={headerContact.id}>
                                        {headerContact.id === 1 ? (
                                            <a href={headerContact.url} className="link link-1">
                                                <span className="material-symbols-outlined">mail</span>
                                                <p className='link-text'>{headerContact.text}</p>
                                            </a>
                                        ) : (
                                            <a href={headerContact.url} className="link link-2 call-button">
                                                <span className="material-symbols-outlined">phone_in_talk</span>
                                                <p className='link-text'>{headerContact.text}</p>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <button type='button'className={`menu-icon link-icon ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
                            <span className="material-symbols-outlined close">close</span>
                            <span className="material-symbols-outlined hamburguer">menu</span>
                        </button>

                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>

                        <nav className='header-bottom-button-selection header-bottom-button-selection-1'>
                            <button type='button' className={`locations-button ${activeButton === 'locations' ? 'active' : ''}`} onClick={toggleLocations}>
                                <span className="material-symbols-outlined">near_me</span>
                                <p className='link-text'>{t('HeaderButtons.0.text')}</p>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <ul className={`locations ${activeButton === 'locations' ? 'active' : ''}`}>
                                <li>
                                    <a href='https://maps.app.goo.gl/NhVfWfXb9WFTAEeF8' target='_blank'>
                                        <span className="material-symbols-outlined">location_on</span>
                                        <p className='link-text'>Av. Ate 190, Ate</p>
                                        <span className="material-symbols-outlined margin-left">chevron_right</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://maps.app.goo.gl/kz5vcdwk8hBsHvRQ6' target='_blank'>
                                        <span className="material-symbols-outlined">location_on</span>
                                        <p className='link-text'>Antigua Panamericana Sur 927, Lurín</p>
                                        <span className="material-symbols-outlined margin-left">chevron_right</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <form className='search-bar-container'>
                            <input type='text' placeholder={t('HeaderButtons.1.text')} className='search-bar'></input>
                            <span className="material-symbols-outlined">search</span>
                        </form>
                        
                        <nav className='header-bottom-button-selection header-bottom-button-selection-2'>
                            <button type='button' className={`translate-button ${activeButton === 'translate' ? 'active' : ''}`} onClick={toggleTranslate}>
                                <span className="material-symbols-outlined">translate</span>
                                <p className='link-text'>{t('HeaderButtons.2.text')}</p>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                            
                            <ul className={`languages ${activeButton === 'translate' ? 'active' : ''}`}>
                                <li>
                                    <button type='button' onClick={() => changeLanguage('es')}>
                                        <img src="/assets/images/Components/Header/espanol-icono.png"></img>
                                        <p className='link-text'>Español</p>
                                    </button>
                                </li>
                                <li>
                                    <button type='button' onClick={() => changeLanguage('en')}>
                                        <img src="/assets/images/Components/Header/ingles-icono.png"></img>
                                        <p className='link-text'>English</p>
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <button type='button' className={`dark-button ${isDarkMode ? 'active' : ''}`} onClick={handleToggle}>
                            <span className="material-symbols-outlined moon">bedtime</span>
                            <span className="material-symbols-outlined light">light_mode</span>
                        </button>

                    </div>
                </div>
            </header>

            <div className={`sub-header-container sub-header-container-1 ${activeMenu === 2 ? 'active' : ''}`}>
                <section className='sub-header sub-header-1 d-grid gap-10'>
                    <div className='d-flex-justify-between'>
                        <h3 className='title font-family-anton'>{t('SubHeader.0.title')}</h3>

                        <button type='button' className='button button-simple close-sub-header-container' onClick={handleCloseSubHeader}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>

                    <div className='sub-header-1-target'>
                        <div className='d-flex-column gap-10'>
                            <img src={t('SubHeader.0.blockOne.0.img-src')} className='img-simple'></img>

                            <ul className='list-simple'>
                                <li>
                                    <span className="material-symbols-outlined">check</span>
                                    <p className='text'>{t('SubHeader.0.blockOne.0.list.0.text')}</p>
                                </li>
                                <li>
                                    <span className="material-symbols-outlined">check</span>
                                    <p className='text'>{t('SubHeader.0.blockOne.0.list.1.text')}</p>
                                </li>
                            </ul>
                        </div>

                        <div className='sub-header-1-target-target-2 width-100'>
                            <ul className='d-flex gap-10 d-flex-wrap'>
                                {t('SubHeader.0.blockTwo', { returnObjects: true }).map((SubHeaderOne) => (
                                    <li key={SubHeaderOne.id}>
                                        <a href={SubHeaderOne.url} className='d-flex-column gap-5'>
                                            <img src={SubHeaderOne.iconSrc}></img>
                                            <h4 className='card-title'>{SubHeaderOne.title}</h4>
                                            <p className='text'>{SubHeaderOne.text}</p>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className='margin-auto sub-header-container-bottom-text'>www.gruasememca.com</p>
                </section>
            </div>

            <div className={`sub-header-container sub-header-container-2 ${activeMenu === 3 ? 'active' : ''}`}>
                <section className='sub-header sub-header-2 d-grid gap-10'>
                    <div className='d-flex-justify-between'>
                        <h3 className='title font-family-anton'>{t('SubHeader.1.title')}</h3>

                        <button type='button' className='button button-simple close-sub-header-container' onClick={handleCloseSubHeader}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>

                    <div className='sub-header-2-target d-grid gap-20'>
                        <p className='text'>{t('SubHeader.1.text')}</p>

                        <div className='sub-header-machinery'>
                            <ul className='d-flex d-flex-wrap gap-10'>
                                {t('SubHeader.1.machinery', { returnObjects: true }).map((subHeaderMachinery) => (
                                    <li key={subHeaderMachinery.id} className='card-item-6-2'>
                                        <div className='d-flex-column gap-10'>
                                            <img src={subHeaderMachinery.imgSrc} alt={subHeaderMachinery.imgAlt}></img>

                                            <div className='d-flex-column'>
                                                <p className='card-title'>{subHeaderMachinery.name}</p>
                                                <p className='text'>{subHeaderMachinery.text}</p>

                                                <a href={subHeaderMachinery.url} className='margin-left simple-link simple-link-1'>
                                                    <p className='simple-link-text'>Saber más</p>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <p className='margin-auto sub-header-container-bottom-text'>www.gruasememca.com</p>
                </section>
            </div>

            <div className={`sub-header-container sub-header-container-3 ${activeMenu === 4 ? 'active' : ''}`}>
                <section className='sub-header sub-header-3 d-grid gap-10'>
                    <div className='d-flex-justify-between'>
                        <h3 className='title font-family-anton'>{t('SubHeader.2.title')}</h3>

                        <button type='button' className='button button-simple close-sub-header-container' onClick={handleCloseSubHeader}>
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                    </div>

                    <ul className='d-flex gap-10 d-flex-wrap'>
                        {t('SubHeader.2.projects', { returnObjects: true }).map((subHeaderProjects) => (
                            <li key={subHeaderProjects.id} className='card-item-4-2'>
                                <a href={subHeaderProjects.url} className='d-grid-auto-1'>
                                    <div className='d-flex-column gap-5'>
                                        <p className='text category'>{subHeaderProjects.category}</p>
                                        <p className='card-title'>{subHeaderProjects.title}</p>
                                        <p className='text'>{subHeaderProjects.text}</p>
                                    </div>
                                    <img src={subHeaderProjects.imgSrc}></img>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className='margin-auto sub-header-container-bottom-text'>www.gruasememca.com</p>
                </section>
            </div>

            <div className='sub-header-layer'></div>
        </>
    );
}

export default Header;
