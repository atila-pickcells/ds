import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text as TextComponent } from './Text';

export default {
  title: 'Typography/Text',
  component: TextComponent,
  argTypes: {
    children: { control: { type: 'text' } },
    size: { options: ['sm', 'md', 'lg'], control: { type: 'inline-radio' } },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim vulputate est ut mollis. Cras quis pharetra magna. Suspendisse hendrerit consequat molestie. Proin feugiat ex sed ligula efficitur sodales. Sed nec mattis turpis, vitae ullamcorper justo. Ut mattis velit in odio aliquam, et fermentum urna dapibus. Etiam in diam at leo elementum euismod. Proin volutpat porttitor pharetra. Maecenas turpis est, gravida at gravida mollis, viverra et ante.',
    size: 'md',
  },
} as Meta;

const Template: Story = (args) => <TextComponent {...args} />;

export const Text = Template.bind({});
