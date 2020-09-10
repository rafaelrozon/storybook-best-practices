import React from 'react';
import HomePage from '.';

export const DefaultStory = () => <HomePage />

DefaultStory.storyName = "Default";

const Template = (args) => <HomePage {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    greetings: "Hello!"
}


export default {
    title: "Pages/Home",
    component: DefaultStory
}