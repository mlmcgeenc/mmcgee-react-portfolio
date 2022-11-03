import React, { useState } from 'react'
import { StyledBurger } from '../styles/Nav.styled'
import RightNav from './RightNav'

const Burger = ({ currentPage, handlePageChange, setLinkStatus }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
      </StyledBurger>
      <RightNav open={open} currentPage={currentPage} handlePageChange={handlePageChange} setLinkStatus={setLinkStatus}/>
    </>
  )
}

export default Burger