import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

const SignUp = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);

        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }

    return (
        <div>
            <form onSubmit={handleSignUp} className='sign-up-form'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id=''
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id=''
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id=''
                    required
                />

                <button type="submit">Sign Up</button>
                <p ><small>Already Have an Account? <Link to="/login">Login</Link></small></p>
                <p style={{ color: 'red' }}>{error}</p>
            </form>

        </div>
    );
};

export default SignUp;