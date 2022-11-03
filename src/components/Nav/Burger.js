import React, { useState } from 'react'
import { StyledBurger } from '../styles/Nav.styled'
import RightNav from './RightNav'

const Burger = ({ currentPage, handlePageChange, setLinkStatus }) => {
  const [open, setOpen] = useState(false)

  const handleChangeOpenStatus = () => {
    setOpen(!open);
  }

  return (
    <>
      <StyledBurger open={open} onClick={handleChangeOpenStatus}>
      <div />
      <div />
      <div />
      </StyledBurger>
      <RightNav open={open} handleChangeOpenStatus={handleChangeOpenStatus} currentPage={currentPage} handlePageChange={handlePageChange} setLinkStatus={setLinkStatus}/>
    </>
  )
}

export default Burger