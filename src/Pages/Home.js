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
                                <li>
                                    <img className="" src="/assets/images/clientes/ab-technology.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/alpa.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/binda.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/lepsa.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/proyec.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/sigelec.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/zinsa.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/sigelec.webp"></img>
                                </li>
                                <li>
                                    <img className="" src="/assets/images/clientes/zinsa.webp"></img>
                                </li>
                            </ul>
                        </div>

                        <a href="" className="margin-left button-text-link button-text-link-1">
                            <p className="button-link-text">Ver más</p>
                            <span className="material-symbols-outlined">chevron_right</span>
                        </a>
                    </section>
                </div>

                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
                <p>asadasdasdasdasdas</p>
            </main>

        </>
    );
};

export default Home;