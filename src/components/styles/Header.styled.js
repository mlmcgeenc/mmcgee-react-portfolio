import styled from "styled-components";
import logo from "../../Assets/images/Circle-Logo.png";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBrand = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const StyledLogo = styled.img`
	width: 36px;
	height: 36px;
	margin: 0px 18px 0 0;
	padding: 0 0 0 0;
	/* background-image: url(${logo}); */
`;

export const StyledName = styled.div`
  font-size: 36px;
  color: var(--dark-blue);
  transition: 0.2s;

	&:hover {
		color: var(--orange);
	}
`;

export const StyledNav = styled.div`
	display: flex;
	flex-direction: row;
`;

export const StyledNavLink = styled.div`
	font-size: 18px;
	color: var(--medium-blue);
	margin: 0 18px 0 18px;
	transition: 0.2s;

	&:hover {
		color: var(--orange);
	}

	&.active {
		font-weight: bold;
		color: var(--dark-blue) !important;
	}
`;