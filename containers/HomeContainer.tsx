import React, { FC, useRef } from 'react';
import { Intro, Social } from '@/components';
import { motion, Transition } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swipercore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';

Swipercore.use([Navigation]);

type HomeContainerProps = {
  translates: any;
};

const HomeContainer: FC<HomeContainerProps> = ({ translates }) => {
  const nextButton = useRef(null);

  const arrowTransition: Transition = {
    yoyo: Infinity,
    duration: 0.5
  };

  return (
    <section className="home">
      <motion.img
        animate={{ y: 10 }}
        transition={arrowTransition}
        className="home__arrow-down"
        src="/icons/arrow.svg"
        alt="Arrow down"
        ref={nextButton}
        role="button"
      />
      <Social />
      <Swiper
        direction="vertical"
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = nextButton.current;
        }}>
        <SwiperSlide>
          <Intro translates={translates} />
        </SwiperSlide>
      </Swiper>

      <style jsx>
        {`
          .home {
            height: calc(100vh - 50px);
            overflow: hidden;

            :global(.swiper-button-disabled) {
              display: none;
            }

            :global(&__arrow-down) {
              cursor: pointer;
              z-index: 2;
              position: absolute;
              bottom: 15px;
              left: 0px;
              right: 0px;
              margin: 0 auto;
              width: 30px;

              @media (--large) {
                bottom: 50px;
              }
            }
          }
        `}
      </style>
    </section>
  );
};

export default HomeContainer;
