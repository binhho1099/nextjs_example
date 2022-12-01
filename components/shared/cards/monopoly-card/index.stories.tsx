import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IMonopolyCard, MonopolyCard } from '.';
import { mockBaseTemplateProps } from '../../../../mocks/MonopolyCard.mock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'cards/MonopolyCard',
  component: MonopolyCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MonopolyCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MonopolyCard> = (args) => (
  <MonopolyCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IMonopolyCard;
