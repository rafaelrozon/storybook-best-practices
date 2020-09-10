import React from 'react';
import SignUpForm from '.';

export const DefaultStory = () => <SignUpForm />

DefaultStory.storyName = "Default";

const Template = (args) => <SignUpForm {...args} />;

export const Playground = Template.bind({});

Playground.args = {
    errorMessage: "Wrong email"
};

export default {
    title: "Pages/Home/Components/SignUpForm",
    component: DefaultStory
}