import Head from 'next/head';
import { ReactNode } from 'react';

import Header from '@/components/Header';

export type PageLayoutProps = {
  page: string
  children: ReactNode
}

export default function PageLayout({ 
  page = '',
  children
}: PageLayoutProps) {
  const baseTitle = 'Let\'s learn our Pokemon';
  const title = (page) ? `${baseTitle} - ${page}` : baseTitle;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated for Catori" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
}