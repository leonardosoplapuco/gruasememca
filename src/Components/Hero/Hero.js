import React from 'react';
import './Hero.css';

const Hero = () => {
    return(
        <div className='hero-container'>
            <section className='hero'>
                <div className='hero-target hero-target-1'>
                    <p className='route d-flex-center-left gap-5'>Lima, Perú <span></span></p>
                    <h1>Alquiler de <b>grúas telescópicas</b></h1>
                    <div className='d-flex-column margin-bottom-10'>
                        <p className='text'>Con más de 15 años de experiencia en el sector en servicios de alquiler de grúas, izajes y eliminación de tierra.</p>
                        <p className='text'>Nuestro compromiso con la calidad y la seguridad nos distingue, ofreciendo soluciones personalizadas que se adaptan a las necesidades de cada proyecto.</p>
                    </div>

                    <div className='hero-target-links gap-10'>
                        <a href="/nosotros" className='link link-1'>
                            <p className='link-text'>Sobre nosotros</p>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                        <a href="" className='link link-2 call-button'>
                            <span className="material-symbols-outlined">phone_in_talk</span>
                            <p className='link-text'>Llamar ahora</p>
                        </a>
                    </div>
                </div>

                <div className='hero-target hero-target-2'>
                    <nav className='hero-cards-container'>
                        <ul className='hero-cards'>
                            <div className='hero-card hero-card-1'>
                                <div className='hero-card-content d-flex-column gap-10'>
                                    <p className='card-title'>Izaje estructura metálica - REPSOL</p>
                                    <p className='text hero-card-content-large-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
                                    <p className='text hero-card-content-short-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>

                                    <a href="" className='simple-link simple-link-1 margin-right'>
                                        <p className='simple-link-text'>Ver más</p>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </a>
                                </div>
                                <div className=''>
                                    <img src="https://www.gruasememca.com/media/img/gallery-5.webp" alt='REPSOL | Grúas Ememca SAC'></img>
                                </div>
                            </div>

                            <a href='' className='hero-card hero-card-2'>
                                <div className='hero-card-content d-flex-column gap-10'>
                                    <p className='card-title'>Título 2</p>
                                    <p className='text hero-card-content-large-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
                                    <p className='text hero-card-content-short-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                                </div>
                                <div className=''>
                                    <img src="https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                                </div>
                            </a>
                        </ul>
                    </nav>

                    <ul className='hero-cards-buttons'>
                        <li>
                            <button className='hero-card-button hero-card-button-1 active'>
                                <span>1</span>
                            </button>
                        </li>
                        <li>
                            <button className='hero-card-button hero-card-button-2'>
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
