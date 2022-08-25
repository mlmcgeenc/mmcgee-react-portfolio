import React from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';
import Logo from '../../Assets/images/Circle-Logo.png'

const Navigation = () => {
	return (
		<nav className='navbar fixed-top navbar-expand-lg'>
			<div className='container'>
				<div className='d-flex align-items-center'>
					<img className='nav-logo' src={Logo} alt='webpage logo'></img>
					<a className='navbar-brand' href='#About'>
						Matt McGee
					</a>
				</div>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#About'>
								About Me
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a className='nav-link dropdown-toggle' href='#Portfolio' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
								Portfolio
							</a>
							<ul className='dropdown-menu'>
								<li>
									<a className='dropdown-item' href='#All-Projects'>
										All Projects
									</a>
								</li>
								<li>
									<hr className='dropdown-divider'></hr>
								</li>
								<li>
									<a className='dropdown-item' href='#Local-Music-Scene'>
										Local Music Scene
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#Movie-Search'>
										Movie Search
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#Contact'>
								Contact
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link disabled' href='#Resume'>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
