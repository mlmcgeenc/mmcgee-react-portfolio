import React, { useState } from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
	const [errorType, setErrorType] = useState('');
	const [errorMessageText, setErrorMessageText] = useState('');
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;

	const handleChange = (e) => {
		if (!e.target.value.length) {
			setErrorType(e.target.name + '-error');
			setErrorMessageText(`All fields are required. Please enter your ${e.target.name} to continue.`);
		} else {
			setErrorType('');
			console.log('else1');
			if (e.target.name === 'email') {
				const isValid = validateEmail(e.target.value);
				console.log('Validating email:', isValid);
				if (!isValid) {
					setErrorType('email-error');
					setErrorMessageText('Please enter a valid email address.');
				} else {
					console.log('els2');
				}
			}
		}

		if (!errorType) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
		console.log('Error: ', errorType);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formState);
	};

	return (
		<section className='contact-form  glass-effect col-12 col-sm-10 col-md-8 col-xl-6 mx-auto'>
			<h1 data-testid='contactTitle'>Contact Me</h1>
			<hr />
			<form>
				<div className='form-group'>
					<div>
						<label htmlFor='inputName'>Name</label>
						{errorType === 'name-error' && (
							<span name='name-error' className='error-text ms-2'>
								{errorMessageText}
							</span>
						)}
					</div>
					<input
						type='text'
						className='form-control'
						defaultValue={name}
						onBlur={handleChange}
						id='inputName'
						name='name'
						placeholder='Enter your name'
					></input>
				</div>
				<div className='form-group'>
					<div>
						<label htmlFor='inputEmail'>Email address</label>
						{errorType === 'email-error' && (
							<span name='email-error' className='error-text ms-2'>
								{errorMessageText}
							</span>
						)}
					</div>
					<input
						type='email'
						className='form-control'
						defaultValue={email}
						onBlur={handleChange}
						id='inputEmail'
						name='email'
						placeholder='Enter your email'
					/>
					<small id='emailHelp' className='form-text text-muted'>
						I'll never share your email with anyone else.
					</small>
				</div>
				<div className='form-group'>
					<div>
						<label htmlFor='message'>Message</label>
						{errorType === 'message-error' && (
								<span name='message-error' className='error-text ms-2'>
									{errorMessageText}
								</span>
						)}
					</div>
					<textarea
						className='form-control'
						defaultValue={message}
						onBlur={handleChange}
						id='message'
						name='message'
						rows='5'
						placeholder='Leave me a message'
					></textarea>
				</div>
				<div className='d-flex justify-content-around'>
					<button data-testid='contactButton' className='btn btn-lg btn-primary col-6 mt-4' type='submit' onSubmit={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</section>
	);
};

export default Contact;
