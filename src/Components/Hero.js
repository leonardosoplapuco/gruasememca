import React from 'react';
import { useTranslation } from 'react-i18next';

function Header(){
    const { t } = useTranslation('hero');
    return (
        <section className='hero-container'>
            <div className='hero'>
                <div className='hero-card hero-card-1'>
                    <h1>Alquiler de <b>grúas telescópicas</b></h1>
                </div>
                <div className='hero-card hero-card-2'></div>
            </div>
        </section>
    );
}

export default Header;
