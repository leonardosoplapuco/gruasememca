import { Helmet } from 'react-helmet-async';

import './Blog.css';

// import Header from '../../Components/Header/Header';

function Blog() {
    return (
        <>
            <Helmet>
                <title>Blog | Grúas Ememca SAC</title>
                <meta name="description" content="Descripción de la página de servicios." />
                <link rel="canonical" href="https://www.gruasememca.com/blog" />

                <meta property="og:title" content="Servicios - Nombre de tu Empresa" />
                <meta property="og:description" content="Descripción de los servicios que ofrecemos." />
                <meta property="og:image" content="URL-de-imagen-de-servicios.jpg" />
                <meta property="og:url" content="https://www.gruasememca.com/blog" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Servicios - Nombre de tu Empresa" />
                <meta name="twitter:description" content="Descripción de los servicios que ofrecemos." />
                <meta name="twitter:image" content="URL-de-imagen-de-servicios.jpg" />
            </Helmet>

            {/* <Header/> */}

            <main>
                <p>Blog</p>
            </main>
        </>
    );
}

export default Blog;
