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
                    <section className="block-content d-flex-column gap-20">
                        <div className="block-title-container">
                            <h3 className="block-title">{t('homeServices.0.title')}</h3>
                            <p className="text">{t('homeServices.0.textIntro')}</p>
                        </div>

                        <div className="index-services d-grid-2-1 gap-20">
                            <div className="index-services-target index-services-target-1">
                                <ul className="faq">
                                    {t("homeServicesFaq", { returnObjects: true }).map((faq) => (
                                        <li key={faq.id} className={`faq-target faq-target-${faq.id}`}>
                                            <div className="faq-target-top">
                                                <p className="faq-target-title">{faq.title}</p>
                                                <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                            </div>
                                            <div className="faq-target-content d-flex-column">
                                                {faq.content.map((item) => (
                                                    <div>
                                                        <span className="material-symbols-outlined">check</span>
                                                        <p key={item.id} className="text">{item.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="index-services-target index-services-target-2 d-flex-column gap-20">
                                <video src="https://www.gruasememca.com/media/videos/video-1.webm" className="video-simple" controls></video>

                                <ul className='list-simple margin-bottom-20'>
                                    {t('homeServicesTagTwo', { returnObjects: true }).map((item) => (
                                        <li key={item.id}>
                                            <span className="material-symbols-outlined list-icon-check">check</span>
                                            <p>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="block-container">
                    <section className="block-content">
                        <ul className="home-beneficts">
                            {t('homeBeneficts', { returnObjects: true }).map((item) => (
                                <li key={item.id}>
                                    <img src={item.img}></img>
                                    <p className="text-title">{item.title}</p>
                                    <p className="text">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="block-container">
                    <section className="block-content">
                        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </section>
                </div>
            </main>

        </>
    );
};

export default Home;