import { SyntheticEvent, useState } from 'react';

export default function Forms() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState('');
    const [emailError, setEmailError] = useState('');

    const onUsernameChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = event;

        setUsername(value);
    };

    const onEmailChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = event;
        setEmailError('');
        setEmail(value);
    };

    const onPasswordChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = event;

        setPassword(value);
    };

    const onSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email, username, password);
        if (username === '' || email === '' || password === '') {
            setFormErrors('All fields are required');
        }

        if (!email.includes('@')) {
            setFormErrors('email is required');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                value={username}
                onChange={onUsernameChange}
                type={'text'}
                placeholder="Username"
                required
                minLength={5}
            />
            <input
                value={email}
                onChange={onEmailChange}
                type={'email'}
                placeholder="Email"
                required
            />
            {emailError}
            <input
                value={password}
                onChange={onPasswordChange}
                type={'password'}
                placeholder="Password"
                required
            />
            <input type={'submit'} value="Create Account" />
        </form>
    );
}
