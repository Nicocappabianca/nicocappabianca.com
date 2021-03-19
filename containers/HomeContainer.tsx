import React, { FC } from 'react';
import { Hero, Social } from '@/components';

type HomeContainerProps = {
  translates: any;
};

const HomeContainer: FC<HomeContainerProps> = ({ translates }) => {
  return (
    <section className="home">
      <Hero translates={translates} />
      <Social />

      <style jsx>
        {`
          .home {
            padding-top: 60px;

            @media (--large) {
              padding-top: 100px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HomeContainer;
