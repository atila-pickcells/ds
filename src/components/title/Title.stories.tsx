import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Title as TitleComponent } from './Title';

export default {
  title: 'Typography/Title',
  component: TitleComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    size: { options: ['sm', 'md', 'lg'], control: { type: 'inline-radio' } },
  },
  args: {
    children: 'Heading',
    size: 'md',
  },
} as Meta;

const Template: Story = (args) => <TitleComponent {...args} />;

export const Title = Template.bind({});
