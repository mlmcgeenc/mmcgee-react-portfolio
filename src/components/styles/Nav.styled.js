import styled from "styled-components";

export const Nav = styled.nav`
	width: 100%;
	height: 55px;
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;

	.logo {
		padding: 15px 0;
	}
`;

export const StyledUl = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	margin: 0;
	padding: 0;

	li {
		font-size: 18px;
		color: var(--medium-blue);
		margin-left: 18px;
		margin-right: 18px;
		transition: 0.2s;
		min-width: 75px;

		&:hover {
			color: var(--orange);
		}

		&.active {
			font-weight: bold;
			/* color: var(--dark-blue) !important; */
		}
	}

	@media (max-width: 768px) {
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		flex-flow: column nowrap;
		justify-content: center;
		background-color: #0f2643;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 65%;
		transition: 0.3s;
		z-index: 1;

		li {
			font-size: 36px;
			color: #aebbc9;
			margin: 18px auto;
		}
	}
`;

export const StyledBurger = styled.div`
	width: 2rem;
	height: 2rem;
	position: fixed;
	top: 15px;
	right: 20px;
	display: flex;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 3;

	div {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? "#aebbc9" : "#0f2643")};
		display: none;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}

		@media (max-width: 768px) {
			display: block;
		}
	}
`;