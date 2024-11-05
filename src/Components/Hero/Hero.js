import { useTranslation } from 'react-i18next';

import './Hero.css';

const Hero = () => {

    /**/

    const { t } = useTranslation();

    /**/

    return(
        <div className='hero-container'>
            <div className='hero'>
                <div className='hero-card hero-card-1'>
                    <p>Lima, Perú <span className='peru-layer'></span></p>
                    <h1>{t('Hero.h1.h1-1')} <b>{t('Hero.h1.h1-2')}</b></h1>

                    <ul className='list-simple'>
                        <li>
                            <p className='text'>leoleoeoeoeoeo</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Hero;
