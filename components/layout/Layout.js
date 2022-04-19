import React from 'react';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import useLocale from 'hooks/useLocale';
import Head from 'next/head';

export default function Layout({ title, children, header = true, footer = true }) {
  const { dir } = useLocale();

  return (
    <>
      <Head>
        <title>{title && ` - ${title}`}</title>
      </Head>

      {header && <Header />}
      <main>{children}</main>
      {footer && <Footer />}
      <div id="__modals" dir={dir} />
    </>
  );
}
