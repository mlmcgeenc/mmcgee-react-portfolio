import React from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';
import CodepenLogo from '../../Assets/images/codepen-brands.svg';
import GithubLogo from '../../Assets/images/github-brands.svg';
import LeetcodeLogo from '../../Assets/images/leetcode.svg';
import LinkedinLogo from '../../Assets/images/linkedin-brands.svg';


const Footer = () => {
	return (
		<div className='justify-content-center fixed-bottom footer'>
			<a className='me-4' href='https://github.com/mlmcgeenc'>
				<img className='footer-logo' src={GithubLogo} alt='github logo'></img>
			</a>
			<a className='mx-4' href='https://www.linkedin.com/in/mattmcgeenc/'>
				<img className='footer-logo' src={LinkedinLogo} alt='linked in logo'></img>
			</a>
			<a className='mx-4' href='https://codepen.io/mlmcgeenc'>
				<img className='footer-logo' src={CodepenLogo} alt='codepen logo'></img>
			</a>
			<a className='ms-4' href='https://leetcode.com/mlmcgeenc/'>
				<img className='footer-logo' src={LeetcodeLogo} alt='leetcode logo'></img>
			</a>
		</div>
	);
};

export default Footer;
