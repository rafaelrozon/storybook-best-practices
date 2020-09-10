import React from 'react';

const HomePage = ({ greetings }) => (
    <div>
        <p>Home Page</p>
        {greetings && <p>{greetings}</p>}
    </div>
);

export default HomePage;