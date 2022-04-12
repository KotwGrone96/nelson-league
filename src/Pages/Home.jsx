import { NavLink } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import LolImg from '../assets/lol-wallpaper.jpg';
import { Helmet } from 'react-helmet';

export default function Home() {
  const navStyle = {
    fontWeight: 'bold',
    color: '#00a0ba',
    textTransform: 'uppercase',
  };

  return (
    <>
      <Helmet>
        <title>Nelson's League | Inicio</title>
        <meta
          name='description'
          content='Acá podrás encontrar toda la información relacionada a tu campeón favorito en el universo de League Of Legends'
        />
        <meta
          name='keywords'
          content='lol, league of legends, champions, runaterra, nelson gamero, gamero, riot games, riot'
        />
      </Helmet>
      <Banner />
      <main>
        <h1>bienvenid@s</h1>
        <section className='home-container'>
          <p>
            Acá podrás encontrar toda la información relacionada a tu campeón
            favorito.
            <br />
            Dirígite a la sección{' '}
            <NavLink style={navStyle} to='/champions'>
              Campeones
            </NavLink>{' '}
            para conocer la variedad de personajes que componen a League Of
            Legends.
          </p>
        </section>
        <section className='home-image'>
          <img src={LolImg} alt='League Of legends' />
        </section>
      </main>
    </>
  );
}
