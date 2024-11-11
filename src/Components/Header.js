import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Components/Languages'

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

                        <button type='button' className='button-icon dark-button margin-left'>
                            <span className="material-symbols-outlined">bedtime</span>
                            <span className="material-symbols-outlined">light_mode</span>
                        </button>

                        <LanguageSwitcher/>

                        <ul className='header-top-contact-links'>
                            {t('headerTopContactLinks', { returnObjects: true }).map((headerTopContactLink) => (
                                <li key={headerTopContactLink.id}>
                                    <a href={headerTopContactLink.href} className=''>
                                        <span className="material-symbols-outlined">{headerTopContactLink.icon}</span>
                                        <p className=''>{headerTopContactLink.text}</p>
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
                                        <a href={menuLink.href} className=''>
                                            <span className="material-symbols-outlined">{menuLink.icon}</span>
                                            <h2 className=''>{menuLink.text}</h2>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
