import './HomePage.css';

import Hero from '../../Components/Hero/Hero';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function HomePage() {
    return (
        <>
            <Header/>
        
            <main>

                <Hero/>

                <div className='block-container home-page-1'>
                    <video src="https://gruasememca.com/media/videos/video-1.webm" autoPlay loop muted></video>

                    <section className='block-content d-flex-column gap-20'>
                        <div className='d-grid-2-2-1 gap-20'>
                            <div className='d-flex-column gap-10'>
                                <p className='title color-white'><b className='color-red'>+15 años</b> trabajando con calidad y seguridad trabajando con calidad y seguridad trabajando con calidad y seguridad.</p>
                                <p className='text color-white'>leosoplapuco | diseño y desarrollo web leosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo webleosoplapuco | diseño y desarrollo web</p>
                            </div>

                            <video src="https://gruasememca.com/media/videos/video-1.webm" className='video-simple' controls></video>
                        </div>

                        <div className='d-flex d-flex-wrap gap-20'>
                            <div className='card-item card-item-3-2-1 d-flex-column gap-5 padding-20 border-radius-10'>
                                <span className="material-symbols-outlined card-icon">verified_user</span>
                                <p className='card-title'>Garantía y seguridad</p>
                                <p className='text'>Nuestras grúas pasan revisiones técnicas constantemente revisiones técnicas constantemente.</p>
                            </div>

                            <div className='card-item card-item-3-2-1 d-flex-column gap-5 padding-20 border-radius-10'>
                                <span className="material-symbols-outlined card-icon">engineering</span>
                                <p className='card-title'>Operadores capacitados</p>
                                <p className='text'>Nuestras grúas pasan revisiones técnicas constantemente revisiones técnicas constantemente.</p>
                            </div>

                            <div className='card-item card-item-3-2-1 d-flex-column gap-5 padding-20 border-radius-10'>
                                <span className="material-symbols-outlined card-icon">new_releases</span>
                                <p className='card-title'>Grúas certificadas</p>
                                <p className='text'>Nuestras grúas pasan revisiones técnicas constantemente revisiones técnicas constantemente.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default HomePage;
