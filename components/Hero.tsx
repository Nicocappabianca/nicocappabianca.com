import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';

type HeroProps = {
  translates: any;
};

const Hero: FC<HeroProps> = ({ translates }) => {
  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      x: -200
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5
      }
    },
    exit: {
      opacity: 0
    }
  };

  const titleVariants: Variants = {
    initial: {
      opacity: 0,
      x: 200
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5
      }
    },
    exit: {
      opacity: 0
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <motion.img
          className="me_image"
          src="/images/me.jpg"
          alt={translates.title}
          variants={imageVariants}
          initial="initial"
          animate="visible"
          exit="exit"
        />
        <motion.div
          className="title"
          variants={titleVariants}
          initial="initial"
          animate="visible"
          exit="exit">
          <h1>{translates.title}</h1>
          <h2>{translates.subtitle}</h2>
        </motion.div>
      </div>

      <style jsx>
        {`
          .hero {
            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              @media (--large) {
                flex-direction: row;
              }
            }

            :global(.me_image) {
              width: 200px;
              height: 200px;
              border-radius: 50%;
              object-fit: cover;
              border: 2px solid var(--light-blue);

              @media (--large) {
                width: 250px;
                height: 250px;
                margin-right: 25px;
              }
            }

            :global(.title) {
              margin-top: 20px;

              @media (--large) {
                margin-left: 25px;
                margin-top: 0px;
              }

              h1 {
                text-align: center;
                font-size: 28px;
                font-family: var(--roboto-condensed-bold);

                @media (--large) {
                  font-size: 56px;
                  text-align: left;
                }
              }

              h2 {
                text-align: center;
                font-size: 24px;
                padding-top: 15px;
                position: relative;

                @media (--large) {
                  font-size: 32px;
                  padding-top: 20px;
                  text-align: left;
                }

                &:before {
                  content: '';
                  position: absolute;
                  background-color: var(--light-blue);
                  width: 80px;
                  height: 3px;
                  border-radius: 4px;
                  top: 7px;
                  left: 0px;
                  right: 0px;
                  margin: 0 auto;

                  @media (--large) {
                    width: 120px;
                    height: 4px;
                    border-radius: 10px;
                    top: 3px;
                    left: 0px;
                    margin: 0px;
                  }
                }
              }
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
