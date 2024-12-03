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
                    {t("list", { returnObjects: true }).map((tag) => (
                        <li key={tag.id}>
                            <a href={tag.href || "#"} className="hover-target">
                                {tag.imgSrc && (
                                    <img src={tag.imgSrc} alt={tag.imgAlt || "Imagen"} />
                                )}
                                <div className="d-flex-column">
                                    {tag.content?.[0]?.title && <p className='text-title'>{tag.content[0].title}</p>}
                                    {tag.content?.[0]?.text && <p className='text'>{tag.content[0].text}</p>}
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
