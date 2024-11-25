import React from 'react';
import { useTranslation } from 'react-i18next';

// import DarkButton from './DarkButton';
// import LanguageSwitcher from './Languages';

function Header(){
    const { t } = useTranslation('header');

    return (
        <header>
            <div className='header'>
                <a href={t('logo.0.href')} className='header-logo'>
                    <p>Grúas <span>Ememca</span></p>
                </a>

                <nav className='menu-container'>
                    <ul className="menu">
                        <li>
                            <button type='button' className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">handshake</span>
                                <h2 className=''>{t('menuLinks.0.text')}</h2>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <div className='sub-header-container'>
                                <ul className='sub-header'>
                                    <li>
                                        <a href={t('menuLinks.0.subHeader.0.href')} className=''>
                                            <h2 className=''>{t('menuLinks.0.subHeader.0.text')}</h2>
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={t('menuLinks.0.subHeader.1.href')} className=''>
                                            <h2 className=''>{t('menuLinks.0.subHeader.1.text')}</h2>
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={t('menuLinks.0.subHeader.2.href')} className=''>
                                            <h2 className=''>{t('menuLinks.0.subHeader.2.text')}</h2>
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={t('menuLinks.0.subHeader.3.href')} className=''>
                                            <h2 className=''>{t('menuLinks.0.subHeader.3.text')}</h2>
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href={t('menuLinks.1.href')} className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">handshake</span>
                                <h2 className=''>{t('menuLinks.1.text')}</h2>
                            </a>
                        </li>
                        <li>
                            <button type='button' className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">handshake</span>
                                <h2 className=''>{t('menuLinks.2.text')}</h2>
                                <span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>
                        </li>
                        <li>
                            <a href={t('menuLinks.3.href')}className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">handshake</span>
                                <h2 className=''>{t('menuLinks.3.text')}</h2>
                            </a>
                        </li>
                        <li>
                            <a href={t('menuLinks.4.href')}className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">handshake</span>
                                <h2 className=''>{t('menuLinks.4.text')}</h2>
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul>
                    <li>
                        <a href={t('headerTopContactLinks.0.href')} className='button-link button-link-1'>
                            <span className="material-symbols-outlined">phone_in_talk</span>
                            <p className='button-link-text'>{t('headerTopContactLinks.0.text')}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;