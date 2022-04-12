import ResponsiveHeader from './ResponsiveHeader';
import RiotLogo from '../../assets/riot-logo.svg';
import LolIcon from '../../assets/lol-icon.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='header'>
        <div className='header__img'>
          <figure>
            <NavLink to='/'>
              <img className='riot-logo' src={RiotLogo} alt='Riot Games' />
            </NavLink>
          </figure>
          <figure>
            <NavLink to='/'>
              <img className='lol-icon' src={LolIcon} alt='League of legends' />
            </NavLink>
          </figure>
        </div>
        <nav className='nav'>
          <div>
            <NavLink to='/'>Inicio</NavLink>
          </div>
          <div>
            <NavLink to='/champions'>Campeones</NavLink>
          </div>

          <div>
            <NavLink to='/download'>Descargas</NavLink>
          </div>
        </nav>
      </div>
      <div className='responsive__header'>
        <ResponsiveHeader />
      </div>
    </header>
  );
};

export default Header;
