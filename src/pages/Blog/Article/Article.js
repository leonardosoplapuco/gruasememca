import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Article() {
    const { slug } = useParams();
    
    // Datos de ejemplo; idealmente, estos datos se obtendrían desde una API o base de datos.
    const articleData = {
        title: "Título del artículo",
        description: "Descripción del artículo para SEO",
        image: "https://www.ejemplo.com/imagen-del-articulo.jpg",
    };

    return (
        <>
            <Helmet>
                <title>{articleData.title}</title>
                <meta name="description" content={articleData.description} />
                <link rel="canonical" href={`https://www.ejemplo.com/blog/${slug}`} />

                {/* Open Graph para redes sociales */}
                <meta property="og:title" content={articleData.title} />
                <meta property="og:description" content={articleData.description} />
                <meta property="og:image" content={articleData.image} />
                <meta property="og:url" content={`https://www.ejemplo.com/blog/${slug}`} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={articleData.title} />
                <meta name="twitter:description" content={articleData.description} />
                <meta name="twitter:image" content={articleData.image} />
            </Helmet>

            <main>
                <div>
                    <h1>{articleData.title}</h1>
                    <p>Contenido del artículo...</p>
                </div>
            </main>
        </>
    );
}

export default Article;
