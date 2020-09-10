import React from 'react';
import AboutPage from '.';

export const DefaultStory = () => <AboutPage />

DefaultStory.storyName = "Default";

const Template = (args) => <AboutPage {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    greetings: "Hello!"
}


export default {
    title: "Pages/About",
    component: DefaultStory
}