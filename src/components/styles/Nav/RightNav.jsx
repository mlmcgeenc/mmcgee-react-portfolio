import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  
  li {
    font-size: 18px;
    color: var(--medium-blue);
    margin: 0 18px 0 18px;
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
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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

const RightNav = ({ open, currentPage, handlePageChange }) => {
  const setLinkStatus = (pageName) => `${currentPage === pageName ? 'active' : ''}`
  return (
    <StyledUl open={open}>
      <li name="about" className={setLinkStatus("about")} onClick={handlePageChange}>About Me</li>
      <li name="portfolio" className={setLinkStatus("portfolio")} onClick={handlePageChange}>Portfolio</li>
      <li name="contact" className={setLinkStatus("contact")} onClick={handlePageChange}>Contact</li>
      <li name="resume" className={setLinkStatus("resume")} onClick={handlePageChange}>Resume</li>
    </StyledUl>
  )
}

export default RightNav