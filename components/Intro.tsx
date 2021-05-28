import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import Typical from 'react-typical';

type IntroProps = {
  translates: any;
};

const Intro: FC<IntroProps> = ({ translates }) => {
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
    <section className="intro">
      <div className="intro__container">
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
          <h2>
            <Typical steps={translates.subtitles} loop={Infinity} wrapper="span" />
          </h2>
        </motion.div>
      </div>

      <style jsx>
        {`
          .intro {
            height: 100vh;

            &__container {
              height: 100%;
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
                font-family: 'roboto';

                @media (--large) {
                  font-size: 56px;
                  text-align: left;
                }
              }

              h2 {
                text-align: center;
                font-size: 20px;
                font-family: 'ubuntu-mono';
                font-weight: 400;
                padding-top: 5px;
                position: relative;

                @media (--large) {
                  font-size: 28px;
                  padding-top: 20px;
                  text-align: left;
                }

                &:before {
                  @media (--large) {
                    content: '';
                    position: absolute;
                    background-color: var(--white);
                    opacity: 0.5;
                    height: 1px;
                    width: 120px;
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

export default Intro;
