import React, { FC } from 'react';
import Head from 'next/head';
import { AppData } from '@/lib/constants';

const AppHead: FC = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>{AppData.title}</title>

    {/* Tags */}
    <link rel="dns-prefetch" href={AppData.siteUrl} />
    <link rel="preconnect" href={AppData.siteUrl} />

    {/* Favicon */}
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>"
    />
  </Head>
);

export default AppHead;
