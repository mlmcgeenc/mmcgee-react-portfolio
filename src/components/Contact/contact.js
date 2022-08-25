import React, { useState } from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';

const Contact = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [formState, setFormState] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = formState;

	function handleChange(e) {
		// if (e.target.name === 'email') {
		// 	const isValid = validateEmail(e.target.value);
		// 	console.log(isValid);
		// 	if (!isValid) {
		// 		setErrorMessage('Please provide a valid email');
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// } else {
		// 	if (!e.target.value.length) {
		// 		setErrorMessage(`${e.target.name} is required.`);
		// 	} else {
		// 		setErrorMessage('');
		// 	}
		// }

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
		console.log('errorMessage:', errorMessage);
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	console.log(formState);

	return (
			<section className='contact-form  glass-effect col-12 col-sm-10 col-md-8 col-xl-6 mx-auto'>
				<h1 data-testid='contactTitle'>Contact Me</h1>
				<hr />
				<form>
					<div className='form-group'>
						<label htmlFor='inputName'>Name</label>
						<input
							type='text'
							className='form-control'
							defaultValue={name}
							onBlur={handleChange}
							id='inputName'
							name='inputName'
							placeholder='Enter your name'
						></input>
					</div>
					<div class='form-group'>
						<label htmlFor='inputEmail'>Email address</label>
						<input
							type='email'
							className='form-control'
							defaultValue={email}
							onBlur={handleChange}
							id='inputEmail'
							name='inputEmail'
							placeholder='Enter your email'
						/>
						<small id='emailHelp' className='form-text text-muted'>
							I'll never share your email with anyone else.
						</small>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
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
					{errorMessage && (
						<div>
							<p className='error-text'>{errorMessage}</p>
						</div>
					)}
					<row className='d-flex justify-content-around'>
						<button data-testid='contactButton' className='btn btn-lg btn-primary col-6 mt-4' type='submit' onSubmit={handleSubmit}>
							Submit
						</button>
					</row>
				</form>
			</section>
	);
};

export default Contact;
