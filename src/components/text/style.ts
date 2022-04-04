import { css } from '../../stitches.config';

export const TextCSS = css({
  fontFamily: 'Libre Franklin',
  fontWeight: '$$fontWeight',
  color: '$blackZero',
  variants: {
    size: {
      sm: {
        fontSize: 16,
        '@sm': {
          fontSize: 14,
        },
      },
      md: {
        fontSize: 24,
        '@sm': {
          fontSize: 16,
        },
      },
      lg: {
        fontSize: 36,
        '@sm': {
          fontSize: 24,
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
