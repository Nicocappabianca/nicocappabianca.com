import React, { FC, useRef, useState } from 'react';
import { Intro, Social } from '@/components';
import { motion, Transition } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import Swipercore, { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

Swipercore.use([Navigation, Mousewheel, Keyboard, Pagination]);

type HomeContainerProps = {
  translates: any;
};

const HomeContainer: FC<HomeContainerProps> = ({ translates }) => {
  const nextButton = useRef(null);
  const [showArrow, setShowArrow] = useState<boolean>(true);

  const arrowTransition: Transition = {
    yoyo: Infinity,
    duration: 0.5
  };

  return (
    <section className="home">
      {showArrow && (
        <motion.img
          animate={{ y: 10 }}
          transition={arrowTransition}
          className="home__arrow-down"
          src="/icons/arrow.svg"
          alt="Arrow down"
          ref={nextButton}
          role="button"
        />
      )}
      <Social />
      <Swiper
        speed={500}
        direction="vertical"
        mousewheel={true}
        onSlideChange={() => setShowArrow(false)}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
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
            height: 100vh;
            overflow: hidden;

            :global(.swiper-pagination) {
              right: 10px;
              position: absolute;
              top: 45vh;

              @media (--large) {
                right: 20px;
              }
            }

            :global(.swiper-pagination-bullet) {
              width: 0.3rem;
              height: 0.3rem;

              @media (--large) {
                width: 0.5rem;
                height: 0.5rem;
              }
            }

            :global(.swiper-pagination-bullet-active) {
              background: #e1e1dd;
            }

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
