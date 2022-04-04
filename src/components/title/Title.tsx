import React, { forwardRef } from 'react';
import { styled } from '../../stitches.config';

import { TitleCSS } from './style';

const StyledTitle = styled('h4', TitleCSS);

export type TitleProps = React.ComponentProps<typeof StyledTitle>;

export const Title = forwardRef<
  React.ElementRef<typeof StyledTitle>,
  TitleProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <StyledTitle ref={forwardedRef} {...props}>
      {children}
    </StyledTitle>
  );
});

Title.displayName = 'Title';
