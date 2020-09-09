import React from 'react';
import Button from '.';

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    type: "submit",
    text: 'Primary',
  };


export const DefaultStory = () => <Button type="button" text="Click me" />

DefaultStory.storyName = "Default";

export default {
    title: "Components/Button",
    component: DefaultStory
}