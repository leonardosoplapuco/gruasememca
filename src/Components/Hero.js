import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const { t } = useTranslation('hero');
    return (
        <section className='hero-container'>
            <div className='hero'>
                <div className='hero-card hero-card-1 d-flex-column gap-10'>
                    <h1>{t('h1.0.textOne')} <b>{t('h1.0.textTwo')}</b></h1>

                    <ul className='list-simple margin-bottom-20'>
                        {t('list', { returnObjects: true }).map((item) => (
                            <li key={item.id}>
                                <span className="material-symbols-outlined list-icon-check">check</span>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>

                    <ul className='d-flex gap-10'>
                        <li>
                            <a href={t('links.0.href')} className='button-link button-link-2'>
                                <span className="material-symbols-outlined">diversity_3</span>
                                <p className='button-link-text'>{t('links.0.text')}</p>
                            </a>
                        </li>
                        <li>
                            <a href={t('links.1.href')} className='button-link button-link-1'>
                                <span className="material-symbols-outlined">phone_in_talk</span>
                                <p className='button-link-text'>{t('links.1.text')}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='hero-card hero-card-2'>
                    <img src='https://www.gruasememca.com/media/img/gallery-2.webp' alt={t('cardTwo.0.alt')} className='img-simple'></img>
                    <p className='text'>{t('cardTwo.0.text')}</p>
                </div>
            </div>
        </section>
    );
}

export default Header;
