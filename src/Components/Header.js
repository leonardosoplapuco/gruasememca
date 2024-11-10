import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation('header'); // Carga el JSON específico

  return (
    <header>
      <h1>{t('title')}</h1>
    </header>
  );
}

export default Header;
