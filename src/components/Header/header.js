import React from 'react';
import 'bootstrap';
import '../../Assets/css/custom.css';
import Logo from '../../Assets/images/Circle-Logo.png';
import { StyledHeader, StyledLogo, StyledBrand, StyledName } from '../styles/Header.styled';
import { StyledContainer } from '../styles/Container.styled';
import Burger from '../Nav/Burger';

const Header = ({ currentPage, handlePageChange}) => {
 
  const setLinkStatus = (pageName) => `${currentPage === pageName ? 'active' : ''}`

	return (
		<>
			<StyledContainer>
				<StyledHeader>
					<StyledBrand>
						<StyledLogo src={Logo}></StyledLogo>
						<StyledName>Matt McGee</StyledName>
					</StyledBrand>
					<Burger currentPage={currentPage} handlePageChange={handlePageChange} setLinkStatus={setLinkStatus}/>
				</StyledHeader>
			</StyledContainer>
		</>
	);
};

export default Header;
