import { css } from '../../stitches.config';

export const TitleCSS = css({
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  color: '$blackZero',
  variants: {
    color: {
      linearBackground: {
        display: 'flex',
        alignItems: 'center',
        color: '$whiteMinusOne',
        background: '$textBackgroundGradient',
      },
      linearFontColor: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: '$textBackgroundGradient',
      },
    },
    size: {
      sm: {
        fontSize: 24,
        '@sm': {
          fontSize: 20,
        },
      },
      md: {
        fontSize: 36,
        '@sm': {
          fontSize: 24,
        },
      },
      lg: {
        fontSize: 54,
        '@sm': {
          fontSize: 20,
        },
      },
    },
  },
});
