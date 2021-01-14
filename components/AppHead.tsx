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
  </Head>
);

export default AppHead;
