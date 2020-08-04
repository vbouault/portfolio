import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FolderIcon from '@material-ui/icons/Folder';
import EmailIcon from '@material-ui/icons/Email';

const Header = () => {
  return (
    <ul className='navbar'>
      <li><HomeIcon className='header-icon' style={{fontSize: '35px'}}/><NavLink className='nav-link' to='/'><i>Accueil</i></NavLink></li>
      <li><PersonIcon className='header-icon' style={{fontSize: '35px'}}/><NavLink to='/about'><i>A propos</i></NavLink></li>
      <li><FolderIcon className='header-icon' style={{fontSize: '35px'}}/><NavLink to='/projects'><i>Projets</i></NavLink></li>
      <li><EmailIcon className='header-icon' style={{fontSize: '35px'}}/><NavLink to='/contact'><i>Contact</i></NavLink></li>
    </ul>
  )
}

export default Header;
