import React from 'react'
import { StyledUl } from '../styles/Nav.styled';

const RightNav = ({ open, currentPage, handlePageChange, handleChangeOpenStatus }) => {
  const setLinkStatus = (pageName) => `${currentPage === pageName ? 'active' : ''}`
  return (
    <StyledUl open={open} onClick={handleChangeOpenStatus}>
      <li name="about" className={setLinkStatus("about")} onClick={handlePageChange}>About Me</li>
      <li name="portfolio" className={setLinkStatus("portfolio")} onClick={handlePageChange}>Portfolio</li>
      <li name="contact" className={setLinkStatus("contact")} onClick={handlePageChange}>Contact</li>
      <li name="resume" className={setLinkStatus("resume")} onClick={handlePageChange}>Resume</li>
    </StyledUl>
  )
}

export default RightNav