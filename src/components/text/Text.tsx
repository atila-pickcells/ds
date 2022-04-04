import React, { forwardRef } from 'react';
import { styled } from '../../stitches.config';

import { TextCSS } from './style';

const StyledText = styled('p', TextCSS);

export type TextProps = React.ComponentProps<typeof StyledText> & {
  fontWeight?: string;
};

export const Text = forwardRef<React.ElementRef<typeof StyledText>, TextProps>(
  ({ children, fontWeight = '400', ...props }, forwardedRef) => {
    return (
      <StyledText
        ref={forwardedRef}
        css={{ fontWeight: fontWeight }}
        {...props}
      >
        {children}
      </StyledText>
    );
  }
);

Text.displayName = 'Text';
