import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ModalOverlayCSS, ModalContentCSS } from './style';
import { styled } from '../../stitches.config';

const StyledModalWrapper = styled(DialogPrimitive.Content, ModalContentCSS);
const StyledModalOverlay = styled(DialogPrimitive.Overlay, ModalOverlayCSS);
const StyledModalContent = styled('div');

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean;
};

export const Modal = ({ children, overlay = true, ...props }: ModalProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      {overlay && <StyledModalOverlay />}
      {children}
    </DialogPrimitive.Root>
  );
};

export type ModalWrapperProps = DialogPrimitive.DialogContentProps &
  React.ComponentProps<typeof StyledModalWrapper> & {
    width?: number;
    maintainDimensions?: boolean;
  };

export const ModalWrapper = ({
  children,
  width = 700,
  maintainDimensions,
  ...props
}: ModalWrapperProps) => {
  return (
    <StyledModalWrapper
      {...props}
      css={{
        $$maxWidth: `${width}px`,
        ...(!maintainDimensions && {
          [`@media(max-width: ${width}px)`]: {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
          },
        }),
      }}
    >
      {children}
    </StyledModalWrapper>
  );
};

export const ModalTrigger = DialogPrimitive.Trigger;
ModalTrigger.displayName = 'ModalTrigger';

export const ModalContent = StyledModalContent;
ModalContent.displayName = 'ModalContent';
