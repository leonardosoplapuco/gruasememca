import React from 'react';

import HeroVideo from './heroVideo'

function Hero({title, titleSpan}){
    return (
        <>

            <HeroVideo/>
        
            <section className='hero-container'>
                <div className='hero'>
                    <h1>{title}<span>{titleSpan}</span></h1>
                </div>
            </section>

        </>
    );
}

export default Hero;
