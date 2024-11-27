import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const { t } = useTranslation('header');

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100){
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={isActive ? 'active' : ''}>
            <div className='header'>
                <a href={t('logo.0.href')} className='header-logo'>
                    <p>Grúas <span>Ememca</span></p>
                </a>

                <nav className='menu-container'>
                    <ul className="menu">
                        <li>
                            <button type='button' className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.0.icon')}</span>
                                <h2 className=''>{t('menuLinks.0.text')}</h2>
                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            <div className='sub-header-container sub-header-container-1'>
                                <div className='sub-header d-flex-column gap-10'>
                                    <p className='sub-header-title'>{t('menuLinks.0.subHeader.0.title')}</p>

                                    <div className="sub-header-content gap-20">
                                        <div className="d-flex-column gap-10">
                                            <p className='text'>{t('menuLinks.0.subHeader.0.text')}</p>

                                            <a href={t('menuLinks.0.subHeader.0.linkHref')} className='link-text link-text-1 margin-right'>
                                                <p className="button-link-text">{t('menuLinks.0.subHeader.0.link')}</p>
                                            </a>
                                        </div>

                                        <div className='sub-header-content-list'>
                                            <ul>
                                                <li>
                                                    <a href={t('menuLinks.0.subHeader.1.links.0.src')} className='d-flex gap-10'>
                                                        <div className='sub-header-img'>
                                                            <img src={t('menuLinks.0.subHeader.1.links.0.imgSrc')} alt={t('menuLinks.0.subHeader.1.links.0.imgAlt')}></img>
                                                        </div>
                                                        <div className='d-flex-column'>
                                                            <h3>{t('menuLinks.0.subHeader.1.links.0.text')}</h3>
                                                            <p className="text">{t('menuLinks.0.subHeader.1.links.0.description')}</p>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href={t('menuLinks.0.subHeader.1.links.1.src')} className='d-flex gap-10'>
                                                        <div className='sub-header-img'>
                                                            <img src={t('menuLinks.0.subHeader.1.links.1.imgSrc')} alt={t('menuLinks.0.subHeader.1.links.1.imgAlt')}></img>
                                                        </div>
                                                        <div className='d-flex-column'>
                                                            <h3>{t('menuLinks.0.subHeader.1.links.1.text')}</h3>
                                                            <p className="text">{t('menuLinks.0.subHeader.1.links.1.description')}</p>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href={t('menuLinks.0.subHeader.1.links.2.src')} className='d-flex gap-10'>
                                                        <div className='sub-header-img'>
                                                            <img src={t('menuLinks.0.subHeader.1.links.2.imgSrc')} alt={t('menuLinks.0.subHeader.1.links.2.imgAlt')}></img>
                                                        </div>
                                                        <div className='d-flex-column'>
                                                            <h3>{t('menuLinks.0.subHeader.1.links.2.text')}</h3>
                                                            <p className="text">{t('menuLinks.0.subHeader.1.links.2.description')}</p>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href={t('menuLinks.0.subHeader.1.links.3.src')} className='d-flex gap-10'>
                                                        <div className='sub-header-img'>
                                                            <img src={t('menuLinks.0.subHeader.1.links.3.imgSrc')} alt={t('menuLinks.0.subHeader.1.links.3.imgAlt')}></img>
                                                        </div>
                                                        <div className='d-flex-column'>
                                                            <h3>{t('menuLinks.0.subHeader.1.links.3.text')}</h3>
                                                            <p className="text">{t('menuLinks.0.subHeader.1.links.3.description')}</p>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href={t('menuLinks.1.href')} className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.1.icon')}</span>
                                <h2 className=''>{t('menuLinks.1.text')}</h2>
                            </a>
                        </li>
                        <li>
                            <button type='button' className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.2.icon')}</span>
                                <h2 className=''>{t('menuLinks.2.text')}</h2>
                                <span class="material-symbols-outlined">keyboard_arrow_down</span>
                            </button>

                            {/* <div className='sub-header-container sub-header-container-2'>
                                <div className='sub-header d-flex-column gap-20'>
                                    <p className='sub-header-title'>{t('menuLinks.0.subHeader.0.title')}</p>

                                    <div className="sub-header-content">
                                        <div className="d-flex-column gap-10">
                                            <p className='text'>{t('menuLinks.0.subHeader.0.text')}</p>

                                            <a href="" className='link-text link-text-1 margin-right'>
                                                <p className="button-link-text">{t('menuLinks.0.subHeader.0.link')}</p>
                                            </a>
                                        </div>

                                        <div className='sub-header-content-list'>
                                            <ul>
                                                <li>
                                                    <a href="" className=''>
                                                        <div className='sub-header-img'>
                                                            <img src="/assets/images/icons/grua.png"></img>
                                                        </div>
                                                        <h3>{t('menuLinks.0.subHeader.1.links.0.text')}</h3>
                                                        <p className="text">{t('menuLinks.0.subHeader.1.links.0.description')}</p>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="" className=''>
                                                        <div className='sub-header-img'>
                                                            <img src="/assets/images/icons/grua.png"></img>
                                                        </div>
                                                        <h3>{t('menuLinks.0.subHeader.1.links.1.text')}</h3>
                                                        <p className="text">{t('menuLinks.0.subHeader.1.links.0.description')}</p>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="" className=''>
                                                        <div className='sub-header-img'>
                                                            <img src="/assets/images/icons/grua.png"></img>
                                                        </div>
                                                        <h3>{t('menuLinks.0.subHeader.1.links.2.text')}</h3>
                                                        <p className="text">{t('menuLinks.0.subHeader.1.links.0.description')}</p>
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="" className=''>
                                                        <div className='sub-header-img'>
                                                            <img src="/assets/images/icons/grua.png"></img>
                                                        </div>
                                                        <h3>{t('menuLinks.0.subHeader.1.links.3.text')}</h3>
                                                        <p className="text">{t('menuLinks.0.subHeader.1.links.0.description')}</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </li>
                        <li>
                            <a href={t('menuLinks.3.href')}className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.3.icon')}</span>
                                <h2 className=''>{t('menuLinks.3.text')}</h2>
                            </a>
                        </li>
                        <li>
                            <a href={t('menuLinks.4.href')}className='menu-link menu-link-1'>
                                <span className="material-symbols-outlined menu-link-icon">{t('menuLinks.4.icon')}</span>
                                <h2 className=''>{t('menuLinks.4.text')}</h2>
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul>
                    <li>
                        <a href={t('headerTopContactLinks.0.href')} className='button-link button-link-1 call-button'>
                            <span className="material-symbols-outlined">phone_in_talk</span>
                            <p className='button-link-text'>{t('headerTopContactLinks.0.text')}</p>
                        </a>
                    </li>
                </ul>

                <button className='menu-icon'>
                    <span className="material-symbols-outlined hamburguer">menu</span>
                    <span className="material-symbols-outlined close">close</span>
                </button>
            </div>
        </header>
    );
}

export default Header;