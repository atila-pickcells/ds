import React from 'react';
import { Story, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import {
  Modal as ModalComponent,
  ModalProps,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
} from './Modal';

import { Button } from '../button/Button';
import { Text } from '../text/Text';

export default {
  title: 'Overlay/Modal/Modal',
  component: ModalComponent,
  argTypes: {
    open: { control: 'boolean' },
    overlay: { control: 'boolean' },
    onOpenChange: { control: false },
    defaultOpen: { control: false },
  },
  args: {
    open: false,
    overlay: true,
  },
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <ModalComponent {...args} onOpenChange={(open) => updateArgs({ open })}>
      <ModalTrigger asChild>
        <Button rightIcon>Open Modal</Button>
      </ModalTrigger>
      <ModalWrapper>
        <ModalContent>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure saepe
            asperiores explicabo blanditiis, amet facere dolorum illo modi error
            ullam placeat architecto harum ad ipsum quae rerum quasi ducimus
            reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Doloribus alias modi voluptas velit ullam nisi. Quibusdam,
            distinctio? Quasi, maxime voluptates ullam quia nam velit
            perspiciatis hic eaque, placeat iure incidunt!
          </Text>
        </ModalContent>
      </ModalWrapper>
    </ModalComponent>
  );
};

export const Modal = Template.bind({});
