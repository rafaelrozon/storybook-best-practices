import React from 'react';

const SignUpForm = ({ errorMessage }) => (
    <div>
        <p>Sign up form</p>
        {errorMessage && <p>{errorMessage}!!</p>}
        <form>
            <input type="email" />
            <button type="submit">Sign Up</button>
        </form>
    </div>
);

export default SignUpForm;