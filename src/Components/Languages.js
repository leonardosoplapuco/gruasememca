import i18next from 'i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LanguageSwitcher() {
    const navigate = useNavigate();
    const location = useLocation();

    const routeMap = {
        '/es': '/en',
        '/es/servicios/': '/en/services/',
        '/es/maquinaria/': '/en/machinery/',
        '/es/nosotros/': '/en/about-us/',
        '/en': '/es',
        '/en/services/': '/es/servicios/',
        '/en/machinery/': '/es/maquinaria/',
        '/en/about-us/': '/es/nosotros/'
    };

    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng).then(() => {
            localStorage.setItem('language', lng);

            const currentPath = location.pathname;
            const newPath = routeMap[currentPath] || currentPath.replace(/^\/(en|es)/, `/${lng}`);

            document.documentElement.lang = lng;

            navigate(newPath, { replace: true });
        }).catch(error => {
            console.error("Error changing language:", error);
        });
    };

    return (
        <ul className='language-buttons'>
            {i18next.language === 'es' ? (
                <li>
                    <button type='button' className='en' onClick={() => changeLanguage('en')}>
                        {/* <img src="/assets/images/Components/Header/ingles-icono.png" alt='bandera-estados-unidos-icono' /> */}
                        EN
                    </button>
                </li>
            ) : (
                <li>
                    <button type='button' className='es' onClick={() => changeLanguage('es')}>
                        {/* <img src="/assets/images/Components/Header/espanol-icono.png" alt='bandera-espana-icono' /> */}
                        ES
                    </button>
                </li>
            )}
        </ul>
    );
}

export default LanguageSwitcher;
