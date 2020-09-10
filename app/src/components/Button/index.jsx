import React from 'react';

const Button = ({ text, type }) => (
    <>
        <p>type is: {type}</p>
        <button type={type}>{text}</button>
    </>
);

export default Button;