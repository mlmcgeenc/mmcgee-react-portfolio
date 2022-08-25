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
		<section className='contact-form col-12 col-sm-10 col-md-8 col-xl-6 m-auto test'>
			<form>
				<div clasName='form-group'>
					<label for='inputName'>Name</label>
					<input type='text' className='form-control' defaultValue={name} onBlur={handleChange} name='inputName' placeholder='Enter your name'></input>
				</div>
				<div class='form-group'>
					<label for='inputEmail'>Email address</label>
					<input type='email' class='form-control' id='inputEmail' aria-describedby='emailHelp' defaultValue={email} placeholder='Enter your email' />
					<small id='emailHelp' class='form-text text-muted'>
						We'll never share your email with anyone else.
					</small>
				</div>
				<div class='form-group'>
					<label for='message'>Message</label>
					<textarea class='form-control' id='message' rows='5' placeholder='Leave me a message'></textarea>
				</div>
				<button type='submit' class='btn btn-primary'>
					Submit
				</button>
			</form>

			<h1 data-testid='contactTitle'>Contact Me</h1>
			<form id='contact-form'>
				<div>
					<label htmlFor='name'>Name:</label>
					<input type='text' defaultValue={name} onBlur={handleChange} name='name'></input>
				</div>
				<div>
					<label htmlFor='email'>Email address:</label>
					<input type='email' defaultValue={email} onBlur={handleChange} name='email'></input>
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
				</div>
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button data-testid='contactButton' type='submit' onSubmit={handleSubmit}>
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
