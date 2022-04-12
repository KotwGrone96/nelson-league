import React, { useRef } from 'react';
import RiotLogo from '../../assets/riot-logo.svg';
import LeagueLogo from '../../assets/lol-logo.svg';
import menu from '../../assets/icon-menu.svg';
import ResponsiveNav from './ResponsiveNav';
import { NavLink } from 'react-router-dom';

const ResponsiveHeader = () => {
  const nav = useRef(null);
  return (
    <>
      <figure className='fig__riot'>
        <NavLink to='/'>
          <img className='riot-logo' src={RiotLogo} alt='Riot Games' />
        </NavLink>
      </figure>
      <figure className='fig__lol'>
        <NavLink to='/'>
          <img className='lol-logo' src={LeagueLogo} alt='League of legends' />
        </NavLink>
      </figure>
      <figure
        onClick={() => (nav.current.style.margin = 0)}
        className='fig__menu'>
        <img className='menu' src={menu} alt='League of legends' />
      </figure>
      <div ref={nav} className='responsive__nav'>
        <ResponsiveNav nav={nav} />
      </div>
    </>
  );
};

export default ResponsiveHeader;
