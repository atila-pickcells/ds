import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Button as ButtonComponent } from './Button';

export default {
  title: 'Form/Button',
  component: ButtonComponent,
  argTypes: {
    css: { table: { disable: true } },
    children: { control: { type: 'text' } },
    color: {
      options: [
        'blueBrandZero',
        'blueBrandPlusOne',
        'greenBrandZero',
        'greenBrandPlusOne',
        'blackZero',
        'blackPlusOne',
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    rightIcon: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: 'LABEL',
    color: 'blueBrandZero',
    size: 'md',
    rightIcon: false,
    disabled: false,
  },
} as Meta;

const Template: Story = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
