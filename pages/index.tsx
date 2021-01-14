import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { HomeContainer } from '@/containers';

import path from 'path';
import fs from 'fs';
import _ from 'lodash';

type HomeProps = {
  translates: {
    for: string;
    content: any;
  };
};

const Home: NextPage<HomeProps> = ({ translates }) => {
  const homeTranslates = _.find(translates, (t) => t.for === 'home');

  return <HomeContainer translates={homeTranslates.content} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  const localesDir = path.join(process.cwd(), `public/i18n/${locale}`);

  const filenames = ['home'];

  const translates = filenames.map((filename) => {
    const filePath = path.join(localesDir, `${filename}.json`);
    const fileContents = fs.readFileSync(filePath).toString();

    return { for: filename, content: JSON.parse(fileContents) };
  });

  return {
    props: {
      locale,
      translates
    },
    revalidate: 1
  };
};

export default Home;
