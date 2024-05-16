// NavbarContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <NavbarContext.Provider value={{ navbarOpen, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
