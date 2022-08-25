import React, { useState } from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';

const Contact = () => {
	const [errorType, setErrorType] = useState('');
  const [errorMessageText, setErrorMessageText] = useState('');
  const [formState, setFormState] = useState({ name:'', email:'', message:'' });
  const { name, email, message} = formState

  const handleClearError = (e) => {
    setErrorType('')
  }

  const handleChange = (e) => {
    console.log('handleChange fired')
    if (!e.target.value.length) {
      console.log(e.target.name+'-error')
      setErrorType(e.target.name + '-error');
		} else {
			console.log('else coming soon')
		}

    if(!errorType) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
      setErrorMessageText(`All fields are required. Please enter your ${e.target.name} to continue.`)
    }
    console.log('Error: ', errorType)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
  }

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
						onClick={handleClearError}
						onBlur={handleChange}
						id='inputName'
						name='name'
						placeholder='Enter your name'
					></input>
					{errorType === 'name-error' && (
						<div>
							<p name='name-error' className='error-text'>
								{errorMessageText}
							</p>
						</div>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='inputEmail'>Email address</label>
					<input
						type='email'
						className='form-control'
						defaultValue={email}
						onClick={handleClearError}
						onBlur={handleChange}
						id='inputEmail'
						name='email'
						placeholder='Enter your email'
					/>
					<small id='emailHelp' className='form-text text-muted'>
						I'll never share your email with anyone else.
					</small>
					{errorType === 'email-error' && (
						<div>
							<p name='email-error' className='error-text'>
								{errorMessageText}
							</p>
						</div>
					)}
				</div>
				<div className='form-group'>
					<label htmlFor='message'>Message</label>
					<textarea
						className='form-control'
						defaultValue={message}
						onClick={handleClearError}
						onBlur={handleChange}
						id='message'
						name='message'
						rows='5'
						placeholder='Leave me a message'
					></textarea>
					{errorType === 'message-error' && (
						<div>
							<p
                name='message-error'
                className='error-text'
							>{errorMessageText}
							</p>
						</div>
					)}
				</div>
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
