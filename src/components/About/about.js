import React from "react";
import photo from '../../Assets/images/Matt.jpeg'

function About () {
  return (
		<div className='container'>
			<div className='row d-flex glass-effect about'>
				<img src={`${photo}`} alt="Matt sitting in an office chair" className='profile-picture col-12 col-md-4'></img>
        <div className="col-12 col-md-8 profile">
          <h1 className="about-header ms-3 mb-4">Hi! I'm Matt</h1>
          <hr className="mx-3 mb-4"/>
          <p className="about-text ms-3">I am a support technician with 12 years of experience in software education and troubleshooting. I have a passion for clean design and great UX and am launching my career as a full stack developer.</p>
        </div>
			</div>
		</div>
	);
}

export default About