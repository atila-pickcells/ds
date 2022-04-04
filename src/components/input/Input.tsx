import React, { forwardRef } from 'react';
import { styled } from '../../stitches.config';

import { InputCSS } from './style';

const StyledInput = styled('input', InputCSS);

export type InputProps = React.ComponentProps<typeof StyledInput>;

export const Input = forwardRef<
  React.ElementRef<typeof StyledInput>,
  InputProps
>(({ ...props }, forwardedRef) => {
  return <StyledInput ref={forwardedRef} {...props} />;
});

Input.displayName = 'Input';
