import React from 'react';

const AboutPage = ({ greetings }) => (
    <div>
        <p>About Page</p>
        {greetings && <p>{greetings}</p>}
    </div>
);

export default AboutPage;