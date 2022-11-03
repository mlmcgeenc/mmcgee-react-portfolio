import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/css/custom.css'
import Header from './components/Header/header';
import Navbar from './components/styles/Nav/Navbar';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Portfolio from './components/Portfolio/portfolio';
import Contact from './components/Contact/contact';
import Resume from './components/Resume/resume';

function App() {
  	const [currentPage, setCurrentPage] = useState('about');

		const handlePageChange = (e) => {
			console.log('STATE => currentPage: ', e.target.getAttribute('name'));
			setCurrentPage(e.target.getAttribute('name'));
		};

		const RenderPage = () => {
			switch (currentPage) {
				case 'about':
					return <About />;
				case 'portfolio':
					return <Portfolio />;
				case 'contact':
					return <Contact />;
				case 'resume':
					return <Resume />;
        default : return <About />;
			}
		};

  return (
		<div className='App custom-fonts'>
			<Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Navbar />
			<main>
				<RenderPage />
			</main>
			<Footer />
		</div>
	);
}

export default App;
