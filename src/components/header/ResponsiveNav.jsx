import React from 'react';
import close from '../../assets/icon-close.svg';
import LeagueLogo from '../../assets/lol-logo.svg';

import { NavLink } from 'react-router-dom';

const ResponsiveNav = ({ nav }) => {
  return (
    <>
      <div className='icons'>
        <figure
          onClick={() => {
            nav.current.style.marginLeft = '100%';
          }}
          className='icons__fig__lol'>
          <NavLink to='/'>
            <img
              className='lol-logo'
              src={LeagueLogo}
              alt='League of legends'
            />
          </NavLink>
        </figure>
        <figure
          onClick={() => {
            nav.current.style.marginLeft = '100%';
          }}
          className='icons__fig__close'>
          <img className='close' src={close} alt='close' />
        </figure>
      </div>
      <nav className='nav'>
        <NavLink
          onClick={() => {
            nav.current.style.marginLeft = '100%';
          }}
          to='/'>
          Inicio
        </NavLink>
        <NavLink
          onClick={() => {
            nav.current.style.marginLeft = '100%';
          }}
          to='/champions'>
          Campeones
        </NavLink>

        <NavLink
          onClick={() => {
            nav.current.style.marginLeft = '100%';
          }}
          to='/download'>
          Descargas
        </NavLink>
      </nav>
    </>
  );
};

export default ResponsiveNav;
