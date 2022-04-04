import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input as InputComponent } from './Input';

export default {
  title: 'Form/Input',
  component: InputComponent,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    style: {
      options: ['default', 'success', 'error'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    placeholder: 'Placeholder',
    style: 'default',
  },
} as Meta;

const Template: Story = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
