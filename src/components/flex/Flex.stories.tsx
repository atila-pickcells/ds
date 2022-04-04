import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex as FlexComponent } from './Flex';
import { Button } from '../button/Button';
import { Text } from '../text/Text';

export default {
  title: 'Container/Flex',
  component: FlexComponent,
  argTypes: {
    css: { table: { disable: true } },
    ref: { table: { disable: true } },
    as: { table: { disable: true } },
    direction: {
      options: ['row', 'column', 'rowReverse', 'columnReverse'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      control: { type: 'inline-radio' },
    },
    justify: {
      options: ['start', 'center', 'end', 'between'],
      control: { type: 'inline-radio' },
    },
    wrap: {
      options: ['noWrap', 'wrap', 'wrapReverse'],
      control: { type: 'inline-radio' },
    },
    gap: {
      options: [1, 2, 3, 4, 5, 6, 7, 8],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    direction: 'column',
    align: 'center',
    justify: 'center',
    wrap: 'noWrap',
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <FlexComponent {...args}>
      <Text css={{ color: '$whiteZero' }}>Olá</Text>
      <Button>Teste</Button>
    </FlexComponent>
  );
};

export const Flex = Template.bind({});
