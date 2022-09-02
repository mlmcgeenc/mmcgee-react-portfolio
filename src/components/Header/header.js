import React from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';
import Logo from '../../Assets/images/Circle-Logo.png';

const Header = ({ currentPage, handlePageChange }) => {
 
  const setLinkStatus = (pageName) => `nav-link ${currentPage === pageName ? 'active' : ''}`

	return (
		<section className='container-fluid add-space'>
			<nav className='navbar fixed-top white-background navbar-expand-lg'>
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
							<li
								name='about'
								className={setLinkStatus('about')}
								onClick={handlePageChange}
							>
								About Me
							</li>
							<li
								name='portfolio'
								className={setLinkStatus('portfolio')}
								onClick={handlePageChange}
							>
								Portfolio
							</li>
							<li
								name='contact'
								className={setLinkStatus('contact')}
								onClick={handlePageChange}
							>
								Contact
							</li>
							<li
								name='resume'
								className={setLinkStatus('resume')}
								onClick={handlePageChange}
							>
								Resume
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Header;
