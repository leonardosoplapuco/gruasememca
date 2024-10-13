import React from 'react';
import './Header.css';

const Header = () => {
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
                            </ul>
                        </nav>

                        <a className='link link-2 margin-left'>
                            <h2 className='link-text'>Contáctanos</h2>
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom-content'>
                        <nav className='header-bottom-locations-container'>
                            <button type='button' className='link link-1 header-bottom-locations-button'>
                                <span class="material-symbols-outlined">near_me</span>
                                <p className='link-text'>Ubícanos</p>
                                <span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <ul className='header-bottom-locations d-flex-column gap-10'>
                                <li>
                                    <a href="" className='link link-1 d-flex-center-left'>
                                        <span class="material-symbols-outlined">location_on</span>
                                        <p className='link-text'>Av. Ate, Ate</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='link link-1 d-flex-center-left'>
                                        <span class="material-symbols-outlined">location_on</span>
                                        <p className='link-text'>Antigua panamericana sur, Lurín</p>
                                    </a>
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
