import React, { FC } from 'react';
import SVG from 'react-inlinesvg';
import { motion } from 'framer-motion';

const Social: FC = () => {
  return (
    <div className="social">
      <motion.a
        whileTap={{ scale: 0.9 }}
        className="social__link"
        href="https://www.linkedin.com/in/nicolascappabianca/"
        target="_blank"
        rel="noopener noreferrer">
        <SVG src="/icons/social/linkedin.svg" />
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.9 }}
        className="social__link"
        href="https://github.com/Nicocappabianca"
        target="_blank"
        rel="noopener noreferrer">
        <SVG src="/icons/social/github.svg" />
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.9 }}
        className="social__link"
        href="https://t.me/nicolas_cappabianca"
        target="_blank"
        rel="noopener noreferrer">
        <SVG src="/icons/social/telegram.svg" />
      </motion.a>
      <motion.a
        whileTap={{ scale: 0.9 }}
        className="social__link"
        href="mailto:nicolas.cappabianca@gmail.com"
        target="_blank"
        rel="noopener noreferrer">
        <SVG src="/icons/social/email.svg" />
      </motion.a>

      <style jsx>
        {`
          .social {
            position: fixed;
            right: 15px;
            top: 15px;
            width: 170px;
            display: flex;
            justify-content: space-between;

            :global(&__link) {
              :global(svg) {
                width: 30px;
                height: 30px;

                :global(path) {
                  fill: var(--white);
                  transition: fill 0.3s;
                }
              }

              @media (hover: hover) {
                &:hover {
                  :global(svg) {
                    opacity: 0.6;
                    :global(path) {
                      fill: var(--black);
                    }
                  }
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Social;
