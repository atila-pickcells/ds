import { css, keyframes } from '../../stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
  '100%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
});

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate3d(-50%, -50%, 0) scale(1)' },
  '100%': {
    opacity: 0,
    transform: 'translate3d(-50%, calc(-50% + 20px), 0) scale(.96)',
  },
});

export const ModalOverlayCSS = css({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'fixed',
  inset: 0,
  zIndex: '$overlay',
  '&[data-state=open]': {
    animation: `${overlayShow} 0.2s ease-in`,
  },
  '&[data-state=closed]': {
    animation: `${overlayHide} 0.2s ease-in`,
  },
});

export const ModalContentCSS = css({
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '$$maxWidth',
  padding: 25,
  '&[data-state=open]': {
    animation: `${contentShow} 0.2s ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${contentHide} 0.2s ease-out`,
  },
  '&:focus': { outline: 'none' },
});
