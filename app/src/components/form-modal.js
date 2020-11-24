import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const MIN_USERNAME_LENGTH = 8;
const MIN_PASSWORD_LENGTH = 8;

export let handleSubmit;

export const FormModalHeader = () => {
	return <p>form modal header</p>;
};

export const FormModalBody = props => {
	const initialState = {
		username: '',
		password: '',
		validationErrors: {
			username: '',
			password: ''
		},
		hasAttemptedSubmit: false,
		isSubmitting: false
	};

	const [state, setState] = useState(initialState);

	const handleUsernameChange = e => {
		const username = e.target.value;
		const isValidUsername = username.length >= MIN_USERNAME_LENGTH;

		setState({
			...state,
			validationErrors: {
				...state.validationErrors,
				username: isValidUsername
					? ''
					: 'Username must be eight or more characters'
			}
		});
	};

	const handlePasswordChange = e => {
		const password = e.target.value;
		const isValidPassword = password.length >= MIN_PASSWORD_LENGTH;

		setState({
			...state,
			validationErrors: {
				...state.validationErrors,
				password: isValidPassword
					? ''
					: 'Password must be eight or more characters'
			}
		});
	};

	useEffect(() => {
		handleSubmit = submit;
	}, [state]);

	const submit = () => {
		debugger;

		const isValid =
			!state.validationErrors.username ||
			!state.validationErrors.password;

		if (!isValid) {
			setState({ ...state, hasAttemptedSubmit: true });
		}

		setState({ ...state, hasAttemptedSubmit: true, isSubmitting: true });

		alert('test');
	};

	return (
		<div>
			<TextField
				onChange={handleUsernameChange}
				placeholder='Username'
			></TextField>
			<TextField
				onChange={handlePasswordChange}
				placeholder='Password'
				type='password'
			></TextField>
		</div>
	);
};

export const FormModalFooter = props => {
	return (
		<div>
			<Button onClick={handleSubmit}>Cancel</Button>
			<Button onClick={handleSubmit}>Submit</Button>
		</div>
	);
};
