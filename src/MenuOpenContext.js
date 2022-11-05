import React, { useContext, useState } from 'react'

const MenuOpenContext = React.createContext()
const MenuOpenUpdateContext = React.createContext()

export function useMenuOpen() {
  return useContext(MenuOpenContext)
}

export function useMenuOpenUpdate() {
  return useContext(MenuOpenUpdateContext)
}

export function MenuOpenProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenuOpen() {
		setMenuOpen(prevMenuOpen => !prevMenuOpen);
	}

  return (
		<MenuOpenContext.Provider value={menuOpen}>
			<MenuOpenUpdateContext.Provider value={toggleMenuOpen}>
          {children}
			</MenuOpenUpdateContext.Provider>
		</MenuOpenContext.Provider>
	);
}