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
            </div>
        </header>
    );
};

export default Header;
