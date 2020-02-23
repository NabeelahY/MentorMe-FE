import React from 'react';
import { NavStyle } from '../styles/NavBar';

export const NavBar = ({ displayModal }) => {
  
  return (
    <NavStyle>
      <button onClick={displayModal}>Ask a question</button>
    </NavStyle>
  );
};
