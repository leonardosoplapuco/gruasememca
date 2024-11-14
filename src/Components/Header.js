import React from 'react';
import { useTranslation } from 'react-i18next';

import DarkButton from './DarkButton';
import LanguageSwitcher from './Languages';

import SearchBar from './SearchBar';

function Header(){
    const { t } = useTranslation('header');

    return (
        <header>
            <div className='header'>
                <div className='header-top-container'>
                    <div className='header-top'>
                        <a href={t('logo.0.href')} className='logo'>
                            <h2 className='font-anton'>Grúas <b className='font-anton'>Ememca</b></h2>
                        </a>

                        <DarkButton/>

                        <LanguageSwitcher/>

                        <ul className='header-top-contact-links'>
                            {t('headerTopContactLinks', { returnObjects: true }).map((headerTopContactLink) => (
                                <li key={headerTopContactLink.id}>
                                    <a href={headerTopContactLink.href} className='button-link button-link-2'>
                                        <span className="material-symbols-outlined">{headerTopContactLink.icon}</span>
                                        <p className='button-link-text'>{headerTopContactLink.text}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>
                        <nav className='menu-container'>
                            <ul className='menu'>
                                {t('menuLinks', { returnObjects: true }).map((menuLink) => (
                                    <li key={menuLink.id}>
                                        {menuLink.id === 2 || menuLink.id === 5 ? (
                                            <button className={`menu-link menu-link-${menuLink.id}`}>
                                                <span className="material-symbols-outlined icon-representation">{menuLink.icon}</span>
                                                <h2>{menuLink.text}</h2>
                                                <span className="material-symbols-outlined icon-down">keyboard_arrow_down</span>
                                            </button>
                                        ) : (
                                            <a href={menuLink.href} className={`menu-link menu-link-${menuLink.id}`}>
                                                <span className="material-symbols-outlined icon-representation">{menuLink.icon}</span>
                                                <h2>{menuLink.text}</h2>
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <SearchBar/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
