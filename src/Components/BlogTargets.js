import React from 'react';
import { useTranslation } from 'react-i18next';

function BlogTargets() {
    const { t } = useTranslation('blogtargets');

    return (
        <div className='block-container'>
            <section className='block-content'>
                <div className='block-title-container'>
                    <h3>{t('title')}</h3>
                </div>

                <ul className="blog-targets">
                    {t("list", { returnObjects: true }).map((item) => (
                        <li key={item.id}>
                            <a href={item.href || "#"} className="hover-target">
                                {item.imgSrc && (
                                    <img src={item.imgSrc} alt={item.imgAlt || "Imagen"} />
                                )}
                                <div className="d-flex-column">
                                    {item.content?.[0]?.title && <p className='text-title'>{item.content[0].title}</p>}
                                    {item.content?.[0]?.text && <p className='text'>{item.content[0].text}</p>}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default BlogTargets;
