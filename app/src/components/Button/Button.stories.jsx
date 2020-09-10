import React from "react";
import Button from ".";

// Args Setup
const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});

const buttonTypes = {
  SUBMIT: 'submit',
  INPUT: 'input'
}

Playground.args = {
  type: buttonTypes.INPUT,
  text: "Primary",
};

Playground.argTypes = {
  type: {
    control: {
      type: "select",
      options: [buttonTypes.INPUT, buttonTypes.SUBMIT]
    }
  },
  text: {
    control: "text"
  }
}

export const DefaultStory = () => <Button type="button" text="Click me" />;

DefaultStory.storyName = "Default";

export default {
  title: "Components/Button",
  component: DefaultStory,
};
