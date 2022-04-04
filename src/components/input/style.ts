import { css } from '../../stitches.config';

export const InputCSS = css({
  borderRadius: 4,
  height: 35,
  margin: '10px 0',
  padding: '0 0 0 8px',
  width: '$$width',
  fontFamily: 'Libre Franklin',
  background: 'transparent',
  '&:focus': {
    outline: 'none',
  },
  '@sm': {
    maxWidth: '22rem',
  },
  variants: {
    style: {
      default: {
        border: '1px solid $blackZero',
        color: '$blackZero',
      },
      success: {
        border: '1px solid $greenBrandZero',
        color: '$greenBrandZero',
      },
      error: {
        border: '1px solid #E9705D',
        color: '#E9705D',
      },
    },
  },
  defaultVariants: { style: 'default' },
});
