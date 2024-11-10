import { useTranslation } from 'react-i18next';

import Header from '../Components/Header';
import Hero from '../Components/Hero';

function Services(){
    const { t } = useTranslation('services'); // Carga el JSON específico

    return(
        <>

            <Header/>

            <main>
                <p>{t('title')}</p>

                <Hero/>
            </main>

        </>
    );
};

export default Services;
