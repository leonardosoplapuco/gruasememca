import i18next from 'i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LanguageSwitcher(){
    const navigate = useNavigate();
    const location = useLocation();

    const routeMap = {
        '/es': '/en',
        '/es/servicios/': '/en/services/',
        '/en': '/es',
        '/en/services/': '/es/servicios/',

        '/es': '/en',
        '/es/maquinaria/': '/en/machinery/',
        '/en': '/es',
        '/en/machinery/': '/es/maquinaria/',

        '/es': '/en',
        '/es/nosotros/': '/en/about-us/',
        '/en': '/es',
        '/en/about-us/': '/es/nosotros/',
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
            <li>
                <button type='button' className='es' onClick={() => changeLanguage('es')}>
                    <img src="/assets/images/Components/Header/espanol-icono.png"></img>
                </button>
            </li>
            <li>
                <button type='button' className='en' onClick={() => changeLanguage('en')}>
                    <img src="/assets/images/Components/Header/ingles-icono.png"></img>
                </button>
            </li>
        </ul>
    );
}

export default LanguageSwitcher;