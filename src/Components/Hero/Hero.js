import { useTranslation } from 'react-i18next';

import './Hero.css';

const Hero = () => {

    /**/

    const { t } = useTranslation();

    /**/

    return(
        <div className='hero-container'>
            <div className='hero'>
                <h1>{t('Hero.h1.h1-1')} <b>{t('Hero.h1.h1-2')}</b></h1>
            </div>
        </div>
    )
};

export default Hero;
