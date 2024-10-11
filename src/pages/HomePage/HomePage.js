import './HomePage.css';

import Hero from '../../Components/Hero/Hero';
import Header from '../../Components/Header/Header';

function HomePage() {
    return (
        <>
            <main>
                <Header/>
                <Hero/>

                <div className='block-container bg-white-1'>
                    <section className='block-content'>
                        <nav className='homepage-block-container-1'>
                            <ul>
                                <li>
                                    <button type='button'>
                                        <p>Servicios</p>
                                    </button>
                                </li>
                                <li>
                                    <button type='button'>
                                        <p>Últimas novedades</p>
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        
                    </section>
                </div>
            </main>
        </>
    );
}

export default HomePage;
