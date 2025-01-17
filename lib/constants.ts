import Color from 'color-js';

export const Colors = {
  black: Color('#000000'),
  white: Color('#ffffff'),
  darkBlue: Color('#003366'),
  lightBlue: Color('#0059B3'),
  darkGray: Color('#2F2F2F')
};

export const Media = {
  small: '(min-width: 36em)',
  medium: '(min-width: 48em)',
  large: '(min-width: 62em)',
  extraLarge: '(min-width: 75em)',
  extraExtraLarge: '(min-width: 87.5em)',
  iMac: '(min-width: 90.063em)',
  safari: '(-webkit-touch-callout: none)',
  // iPhone Media
  iPhone11:
    'only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
  iPhone11Pro:
    'only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
  iPhone11ProMax:
    'only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
  iPhoneSE: 'only screen and (min-device-width: 375px) and (max-device-width: 667px)',
  iPhone8Plus:
    'only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3)'
};

/**
 * Application Meta Data
 */
export const AppData = {
  title: 'Nicolás Cappabianca',
  siteName: 'Nicocappabianca',
  description: 'FullStack Developer from argentina',
  siteUrl: 'https://nicocappabianca.com',
  shareMessage: 'Nicolás Cappabianca | Software Developer',
  gtagId: undefined,
  fbAppId: undefined
};
