import { Helmet } from 'react-helmet-async';

import { useTranslation } from 'react-i18next';

import './Us.css';

import Header from '../../Components/Header/Header';

function Us(){

    const { t } = useTranslation();

    return (
        <>

            <Helmet>
                <title>{t('Nosotros.Head.title')}</title>
                <meta name="description" content={t('Nosotros.Head.meta-description')} />
                <link rel="canonical" href={t('Nosotros.Head.link-canonical')} />

                <meta property="og:title" content={t('Nosotros.Head.meta-og-title')} />
                <meta property="og:description" content={t('Nosotros.Head.meta-og-description')} />
                <meta property="og:image" content={t('Nosotros.Head.meta-og-image')} />
                <meta property="og:url" content={t('Nosotros.Head.meta-og-url')} />

                <meta name="twitter:card" content={t('Nosotros.Head.meta-twitter-card')} />
                <meta name="twitter:title" content={t('Nosotros.Head.meta-twitter-title')} />
                <meta name="twitter:description" content={t('Nosotros.Head.meta-twitter-description')} />
                <meta name="twitter:image" content={t('Nosotros.Head.meta-twitter-image')} />
            </Helmet>

            <Header/>

            <main>
                <p>Hello</p>
            </main>

        </>
    );
}

export default Us;
