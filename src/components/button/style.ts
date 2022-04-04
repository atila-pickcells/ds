import { css } from '../../stitches.config';

export const ButtonCSS = css({
  fontFamily: 'Roboto',
  fontWeight: 400,
  borderRadius: '4px',
  cursor: 'pointer',
  lineHeight: '1',
  boxShadow: '0px 2px 8px rgba(1, 22, 39, 0.25)',
  border: '0',
  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
  img: {
    marginLeft: 10,
    marginBottom: 2,
  },
  when: {
    sm: {
      minHeight: 60,
      borderRadius: 0,
    },
  },
  variants: {
    color: {
      blueBrandZero: {
        backgroundColor: '$blueBrandZero',
      },
      blueBrandPlusOne: {
        backgroundColor: '$blueBrandPlusOne',
      },
      greenBrandZero: {
        backgroundColor: '$greenBrandZero',
      },
      greenBrandPlusOne: {
        backgroundColor: '$greenBrandPlusOne',
      },
      blackZero: {
        backgroundColor: '$blackZero',
        color: '$whiteZero',
      },
      blackPlusOne: {
        backgroundColor: '$blackPlusOne',
        color: '$whiteZero',
      },
    },
    size: {
      sm: {
        padding: 8,
        fontSize: 16,
        img: {
          marginBottom: 1,
        },
      },
      md: {
        padding: 12,
        fontSize: 18,
      },
      lg: {
        padding: 14,
        fontSize: 20,
      },
    },
  },
  defaultVariants: { color: 'blueBrandZero', size: 'md' },
});
