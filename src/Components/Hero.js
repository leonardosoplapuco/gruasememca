import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation('hero'); // Carga el JSON específico

  return (
    <div>
      <p>{t('title')}</p>
    </div>
  );
}

export default Header;
