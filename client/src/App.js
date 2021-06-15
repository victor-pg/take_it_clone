import React, { useEffect, useState } from 'react';
import Routes from './Routes';
import './App.scss';

import { I18nProvider, LOCALES } from './i18n';

function App() {
  const [locale, setLocale] = useState(LOCALES.RO)
  useEffect(() => {
    const currentLanguage = JSON.parse(localStorage.getItem('language'));
    if (currentLanguage) {
      setLocale(currentLanguage);
    }
    else return;
  }, [])

  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <Routes />
      </div>
    </I18nProvider>
  );
}

export default App;
