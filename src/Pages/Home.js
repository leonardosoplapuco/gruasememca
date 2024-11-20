import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

import Header from '../Components/Header';
import Hero from '../Components/Hero';
import ChatBot from '../Components/ChatBot'

const Home = () => {
    const { t } = useTranslation('home');

    return(
        <>
            <Helmet>
                <title>{t('head.0.title')}</title>
                <link rel="canonical" href={t('head.0.cannonical')}></link>
                <meta name="description" content={t('head.0.description')} />

                <meta property="og:title" content={t('head.0.ogTitle')} />
                <meta property="og:description" content={t('head.0.ogDescription')} />
                <meta property="og:image" content={t('head.0.ogImage')} />
                <meta property="og:url" content={t('head.0.ogUrl')} />

                <meta name="twitter:card" content={t('head.0.twitterCard')} />
                <meta name="twitter:title" content={t('head.0.twitterTitle')} />
                <meta name="twitter:description" content={t('head.0.twitterDescription')} />
                <meta name="twitter:image" content={t('head.0.twitterImage')} />
            </Helmet>

            <Header/>

            <main>
                <Hero/>
                <ChatBot/>

                <div className="block-container">
                    <section className="block-content d-flex-column gap-20">
                        <div className="home-companies">
                            <ul>
                                {t('homeCompanies', { returnObjects: true })[0]?.companies.map((company) => (
                                    <li key={company.id}>
                                        <img src={company.imgSrc} alt={company.imgAlt}></img>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a href={t('homeCompanies.1.href')} className="margin-left button-text-link button-text-link-1">
                            <p className="button-link-text">{t('homeCompanies.1.text')}</p>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </a>
                    </section>
                </div>

                <div className="block-container">
                    <section className="block-content">
                        <div className="block-title-container">
                            <h3 className="block-title">{t('homeServices.0.title')}</h3>
                            <p className="text">{t('homeServices.0.textIntro')}</p>
                        </div>

                        <div className="index-services d-grid-2-1 gap-20">
                            <div className="index-services-target index-services-target-1">
                                <ul className="faq">
                                    <li className="faq-target faq-target-1">
                                        <div className="faq-target-top">
                                            <p className="faq-target-title">Título</p>
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </div>

                                        <div className="faq-target-content d-flex-column">
                                            <p className="text">hajsdljasñdajslñdj</p>
                                            <p className="text">hajsdljassss ñdajslñdj</p>
                                            <p className="text">hajsdljasñdajslñdj</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="index-services-target index-services-target-2"></div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    );
};

export default Home;