import 'styles/variables.css';
import 'styles/bootstrap-grid.css';
import 'styles/index.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';

import React from 'react';

import useLocale from 'hooks/useLocale';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

const Intl = ({ children }) => {
  const { locale, messages } = useLocale();

  const Wrapper = ({ children }) => <span className={locale}>{children}</span>;

  return (
    <IntlProvider locale={locale} messages={messages[locale]} textComponent={Wrapper}>
      {children}
    </IntlProvider>
  );
};

export default function App({ Component, pageProps }) {
  const { basePath } = useRouter();
  const { dir } = useLocale();

  return (
    <Intl>
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        <link rel="manifest" href={`${basePath}/site.webmanifest`} />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#2f2f2f" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container" dir={dir}>
        <Component {...pageProps} />
      </div>
    </Intl>
  );
}
