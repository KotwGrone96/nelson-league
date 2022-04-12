import insta from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import twitch from '../../assets/twitch.png';
import twitter from '../../assets/twitter.png';

export default function Footer() {
  return (
    <footer>
      <h2>Nelson Gamero</h2>
      <div className='social'>
        <figure>
          <a
            href='https://www.instagram.com/nelson_gamero/?hl=es'
            target='_blank'
            rel='noreferrer'>
            <img src={insta} alt='instagram' />
          </a>
        </figure>
        <figure>
          <a
            href='https://www.youtube.com/channel/UCroh0uYr_ROlLesmHSC3Olg'
            target='_blank'
            rel='noreferrer'>
            <img src={youtube} alt='youtube' />
          </a>
        </figure>
        <figure>
          <a
            href='https://www.twitch.tv/neruson_gamer'
            target='_blank'
            rel='noreferrer'>
            <img src={twitch} alt='twitch' />
          </a>
        </figure>
        <figure>
          <a
            href='https://twitter.com/elGrone96'
            target='_blank'
            rel='noreferrer'>
            <img src={twitter} alt='twitter' />
          </a>
        </figure>
      </div>
      <div className='text'>
        <h3>
          Todos los derechos pertenecen a <span>Riot Games</span>
        </h3>
        <h3>
          Recursos obtenidos de{' '}
          <a
            href='https://developer.riotgames.com/'
            target='_blank'
            rel='noreferrer'>
            Riot Developer Portal
          </a>
        </h3>
      </div>
    </footer>
  );
}
