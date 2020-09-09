import React from 'react';
import HomePage from '.';

export const DefaultStory = () => <HomePage />

DefaultStory.storyName = "Default";

export default {
    title: "Pages/Home",
    component: DefaultStory
}