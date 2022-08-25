import React from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';
import CodepenLogo from '../../Assets/images/codepen-brands.svg';
import GithubLogo from '../../Assets/images/github-brands.svg';
import LeetcodeLogo from '../../Assets/images/leetcode.svg';
import LinkedinLogo from '../../Assets/images/linkedin-brands.svg';


const Footer = () => {
	return (
		<div className='d-flex justify-content-center align-items-center fixed-bottom footer'>
			<div className='d-flex col-12 col-md-8 col-lg-4 justify-space-between'>
				<a className='col' href='https://github.com/mlmcgeenc'>
					<img className='footer-logo' src={GithubLogo} alt='github logo'></img>
				</a>
				<a className='col' href='https://www.linkedin.com/in/mattmcgeenc/'>
					<img className='footer-logo' src={LinkedinLogo} alt='linked in logo'></img>
				</a>
				<a className='col' href='https://codepen.io/mlmcgeenc'>
					<img className='footer-logo' src={CodepenLogo} alt='codepen logo'></img>
				</a>
				<a className='col' href='https://leetcode.com/mlmcgeenc/'>
					<img className='footer-logo' src={LeetcodeLogo} alt='leetcode logo'></img>
				</a>
			</div>
		</div>
	);
};

export default Footer;
