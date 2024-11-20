import React from 'react';
import { useTranslation } from 'react-i18next';

import DarkButton from './DarkButton';
import LanguageSwitcher from './Languages';

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

                        <LanguageSwitcher/>

                        <span className='text'>|</span>

                        <DarkButton/>

                        <span className='text header-span-2'>|</span>

                        <a href={t('headerTopContactLinks.0.href')} className='button-text-link button-text-link-1' >
                            <p className='button-link-text'>{t('headerTopContactLinks.0.text')}</p>
                        </a>

                        <a href='+51 998877665' className='button-link button-link-1 button-call'>
                            <span className="material-symbols-outlined">phone_in_talk</span>
                            <p className='button-link-text'>{t('headerTopContactLinks.1.text')}</p>

                            <span className='button-link-label'>{t('headerTopContactLinks.1.label')}</span>
                        </a>
                    </div>
                </div>

                <div className='header-bottom-container'>
                    <div className='header-bottom'>
                        <a href='+51 998877665' className='button-link button-link-1 button-call'>
                            <span className="material-symbols-outlined">phone_in_talk</span>
                            <p className='button-link-text'>{t('headerTopContactLinks.1.text')}</p>

                            <span className='button-link-label'>{t('headerTopContactLinks.1.label')}</span>
                        </a>
                        
                        <nav className='menu-container'>
                            <ul className='menu'>
                                {t('menuLinks', { returnObjects: true }).map((menuLink) => (
                                    <li key={menuLink.id}>
                                        {menuLink.id === 2 || menuLink.id === 5 ? (
                                            <div className={`menu-link-container menu-link-container-${menuLink.id}`}>
                                                <button className={`menu-link menu-link-${menuLink.id}`}>
                                                    <span className="material-symbols-outlined icon-representation">{menuLink.icon}</span>
                                                    <h2>{menuLink.text}</h2>
                                                    <span className="material-symbols-outlined icon-down">keyboard_arrow_down</span>
                                                </button>

                                                {menuLink.subHeader && (
                                                    <ul className='sub-header'>
                                                        {menuLink.subHeader.map((subItem) => (
                                                            <li key={subItem.id}>
                                                                <a href={subItem.href} className=''>
                                                                    {/* <span className="material-symbols-outlined">{subItem.icon}</span> */}
                                                                    <h3 className=''>{subItem.text}</h3>

                                                                    <span className="material-symbols-outlined margin-left chevron-right">chevron_right</span>
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
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

                        <button type='button' className='menu-icon margin-left'>
                            <p className='text'>Menu</p>
                            
                            <div>
                                <span className="material-symbols-outlined hamburguer">menu</span>
                                <span className="material-symbols-outlined menu-close">close</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
