import { globalCss, createStitches } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    scrollBehavior: 'smooth',
  },
  'body.overflow-hidden': {
    overflow: 'hidden',
  },
});

export const { styled, css, keyframes } = createStitches({
  theme: {
    space: {
      1: '10px',
      2: '20px',
      3: '40px',
    },
    colors: {
      blueBrandMinusOne: '#66B6F2',
      blueBrandZero: '#42A7F2',
      blueBrandPlusOne: '#2D88CC',
      greenBrandMinusOne: '#5CA781',
      greenBrandZero: '#42A774',
      greenBrandPlusOne: '#2D8056',
      blackMinusOne: '#241135',
      blackZero: '#0A1128',
      blackPlusOne: '#00000A',
      whiteMinusOne: '#FFE7F0',
      whiteZero: '#EDE7E3',
      whitePlusOne: '#D8C0C5',
      successHelper: '#003E1F',
      errorHelper: '#BA1200',
      warningHelper: '#FFA62B',
      infoHelper: '#034078',
      backgroundGradient:
        'linear-gradient(90deg, rgba(66, 167, 242, 0.15) 0%, rgba(66, 167, 116, 0.15) 100%)',
      textBackgroundGradient:
        'linear-gradient(90deg, #42A7F2 0%, #42A775 100%)',
    },
  },
  media: {
    sm: '(max-width: 480px)',
  },
});
