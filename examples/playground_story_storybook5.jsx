import React from "react";
import {storiesOf} from "@storybook/react";
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from ".";


const storiesOf("Button", module).
    addDecorator(withKnobs)
    add("Default", () => {
        return <Button type="button" text="Click me" />
    }).
    add("Playground", () => {
        const typePropLabel = 'type';
        const typePropOptions = {
            submit: 'submit',
            input: 'input'
        };
        const typePropDefaultValue = typePropOptions.submit;

        const textPropLabel = "text";
        const textDefaultValue = "Click me";

        return (
            <Button type={select(typePropLabel, typePropOptions, typePropDefaultValue)} text={text(textPropLabel, textDefaultValue)} />
        )
    })