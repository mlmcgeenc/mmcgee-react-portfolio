import React from "react";
import { useMenuOpen, useMenuOpenUpdate } from "../../MenuOpenContext";
import { StyledBurger } from "../styles/Nav.styled";
import RightNav from "./RightNav";

const Burger = ({ currentPage, handlePageChange, setLinkStatus }) => {
	// const [open, setOpen] = useState(false);
  // const handleChangeOpenStatus = () => {
  // 	setOpen(!open);
  // };
  const open = useMenuOpen()
  const toggleMenuOpen = useMenuOpenUpdate()

	return (
		<>
			<StyledBurger open={open} onClick={toggleMenuOpen}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav
				currentPage={currentPage}
				handlePageChange={handlePageChange}
				setLinkStatus={setLinkStatus}
			/>
		</>
	);
};

export default Burger;
