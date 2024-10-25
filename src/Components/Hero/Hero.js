import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [activeCard, setActiveCard] = useState(1);

    const handleCardButton1Click = () => {
        setActiveCard(1);
    };

    const handleCardButton2Click = () => {
        setActiveCard(2);
    };

    return (
        <div className='hero-container'>
            <section className='hero'>
                <div className='hero-target hero-target-1'>
                    <p className='route d-flex-center-left gap-5'>Lima, Perú <span></span></p>
                    <h1>Alquiler de <b>grúas telescópicas</b></h1>
                    <ul className='list-simple d-flex-column margin-bottom-10'>
                        <li>
                            <span className="material-symbols-outlined">check</span>
                            <p className='text'>Con más de 15 años de experiencia en el sector en servicios de alquiler de grúas, izajes y eliminación de tierra.</p>
                        </li>
                        <li>
                            <span className="material-symbols-outlined">check</span>
                            <p className='text'>Nuestro compromiso con la calidad y la seguridad nos distingue, ofreciendo soluciones personalizadas que se adaptan a las necesidades de cada proyecto.</p>
                        </li>
                    </ul>

                    <div className='hero-target-links gap-10'>
                        <a href="/nosotros" className='link link-1'>
                            <p className='link-text'>Sobre nosotros</p>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a href="tel:+51 954132098" className='link link-2 call-button'>
                            <span className="material-symbols-outlined">phone_in_talk</span>
                            <p className='link-text'>Llamar ahora</p>
                        </a>
                    </div>
                </div>

                <div className='hero-target hero-target-2'>
                    <nav className='hero-cards-container'>
                        <ul className={`hero-cards ${activeCard === 2 ? 'active' : ''}`}>
                            <div className='hero-card hero-card-1'>
                                <div className='hero-card-content d-flex-column gap-10'>
                                    <p className='card-title'>Izaje estructura metálica - REPSOL</p>
                                    <p className='text hero-card-content-large-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
                                    <p className='text hero-card-content-short-text'>Lorem Ipsum is simply dummy text of the printing industry's...</p>

                                    <a href="/" className='simple-link simple-link-1 margin-left'>
                                        <p className='simple-link-text text'>Ver más</p>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </a>
                                </div>
                                <div className=''>
                                    <img src="https://www.gruasememca.vercel.app/public/assets/images/Components/Hero/gruas-ememca-repsol-2024.webp" alt='REPSOL | Grúas Ememca SAC'></img>
                                </div>
                            </div>

                            <div className='hero-card hero-card-2'>
                                <div className='hero-card-content d-flex-column gap-10'>
                                    <p className='card-title'>Izaje estructura metálica - REPSOL</p>
                                    <p className='text hero-card-content-large-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
                                    <p className='text hero-card-content-short-text'>Lorem Ipsum is simply dummy text of the printing industry's...</p>

                                    <a href="/" className='simple-link simple-link-1 margin-left'>
                                        <p className='simple-link-text text'>Ver más</p>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </a>
                                </div>
                                <div className=''>
                                    <img src="https://www.gruasememca.com/media/img/gallery-5.webp" alt='REPSOL | Grúas Ememca SAC'></img>
                                </div>
                            </div>
                        </ul>
                    </nav>

                    <ul className='hero-cards-buttons'>
                        <li>
                            <button type='button' className={`hero-card-button hero-card-button-1 ${activeCard === 1 ? 'active' : ''}`} onClick={handleCardButton1Click}>
                                <span>1</span>
                            </button>
                        </li>
                        <li>
                            <button type='button' className={`hero-card-button hero-card-button-2 ${activeCard === 2 ? 'active' : ''}`} onClick={handleCardButton2Click}>
                                <span>2</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Hero;
