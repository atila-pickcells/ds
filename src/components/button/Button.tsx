import React, { forwardRef } from 'react';
import { styled } from '../../stitches.config';

import { ButtonCSS } from './style';

import iconButton from '../../media/icons/iconButton.svg';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  rightIcon?: boolean;
};

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>(({ children, rightIcon, ...props }, forwardedRef) => {
  return (
    <StyledButton ref={forwardedRef} {...props}>
      <span>{children}</span>
      {rightIcon ? <img src={iconButton} /> : ''}
    </StyledButton>
  );
});

Button.displayName = 'Button';
