import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NavStyle } from '../styles/NavBar';
import { clearLocalStorage } from '../utils/localStorage';

const NavBar = ({ displayModal }) => {
  const { pathname } = useLocation();

  return (
    <NavStyle>
      <Link to='/' className='logo'>
        Mentor Me
      </Link>
      {pathname === '/' && (
        <button onClick={displayModal}>Ask a question</button>
      )}
      <div className='user'>
        {pathname !== '/chats' && <Link to='/chats'>Chats</Link>}
        <Link to='/dashboard'>Dashboard</Link>
        <div onClick={clearLocalStorage}>Log out</div>
      </div>
    </NavStyle>
  );
};

export default NavBar;
