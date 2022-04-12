import lolWall from '../assets/lol-wallpaper.webp';
import valorant from '../assets/valorant-wallpaper.jpg';
import lor from '../assets/lor-wallpaper.jpg';
import tft from '../assets/tft-wallpaper.webp';
import wild from '../assets/wild-wallpaper.png';
import ruined from '../assets/ruined-wallpaper.jpg';
import hextech from '../assets/hextech-wallpaper.webp';
import convergense from '../assets/convergense-wallpaper.jpeg';
import nunu from '../assets/nunu-wallpaper.jpg';
import Banner from '../components/banner/Banner';
import { Helmet } from 'react-helmet';

export default function Download() {
  const scroll = () => {
    const height = window.innerHeight;
    window.scroll(0, height - 150);
  };

  setTimeout(scroll, 500);

  return (
    <>
      <Helmet>
        <title>Nelson's League | Descargas</title>
        <meta
          name='description'
          content='Riot Games ofrece una amplia variedad de juegos para que puedas disfrutar del género que te guste. Podrás elegir desde FPS hasta aventuras, descarga el juego que te guste.'
        />
        <meta
          name='keywords'
          content='lol, league of legends, valorant, teamfight tactis, tft, wild rift, legends of runaterra, lor, ruined king, rey arruinado, hextech mayhem, convergence, ekko, song of nunu, nunu, nelson, nelson gamero, riot, riot games'
        />
      </Helmet>
      <Banner />
      <main>
        <h1>Descargas</h1>
        <section className='download-container'>
          <p className='text'>
            Acá podrás encontrar los enlaces oficiales de Riot Games para poder
            descargar League Of Leagends. <br />
            Además, Riot Games cuenta con diversos juegos dentro de su
            plataforma, todos Free To Play.
          </p>
          <div className='links'>
            <h2>League Of Legends</h2>
            <div className='lol-link'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://signup.las.leagueoflegends.com/es/signup/redownload?page_referrer=index'>
                DESCARGAR
              </a>
            </div>
          </div>
          <div className='lol-wall'>
            <a
              href='https://www.leagueoflegends.com/es-mx/'
              target='_blank'
              rel='noreferrer'>
              <img src={lolWall} alt='wallpaper' />
            </a>
          </div>
          <h3>Otros Juegos</h3>
          <div className='other-links'>
            <div className='valorant link'>
              <a
                href='https://playvalorant.com/es-mx/'
                target='_blank'
                rel='noreferrer'>
                <img src={valorant} alt='valorant' />
              </a>
            </div>
            <div className='tft link'>
              <a
                href='https://teamfighttactics.leagueoflegends.com/es-mx/'
                target='_blank'
                rel='noreferrer'>
                <img src={tft} alt='teamfight tactics' />
              </a>
            </div>
            <div className='wild link'>
              <a
                href='https://wildrift.leagueoflegends.com/es-mx/'
                target='_blank'
                rel='noreferrer'>
                <img src={wild} alt='wild rift' />
              </a>
            </div>
            <div className='lor link'>
              <a
                href='https://playruneterra.com/es-es/'
                target='_blank'
                rel='noreferrer'>
                <img src={lor} alt='legends of runeterra' />
              </a>
            </div>
            <div className='ruined link'>
              <a
                href='https://ruinedking.com/en-us/'
                target='_blank'
                rel='noreferrer'>
                <img src={ruined} alt='ruined king' />
              </a>
            </div>
            <div className='hextech link'>
              <a
                href='https://hextechmayhem.com/es-mx/'
                target='_blank'
                rel='noreferrer'>
                <img src={hextech} alt='hextech mayhem' />
              </a>
            </div>
            <div className='conver link'>
              <a
                href='https://convrgencegame.com/'
                target='_blank'
                rel='noreferrer'>
                <img src={convergense} alt='ekko convergense' />
              </a>
            </div>
            <div className='nunu link'>
              <a
                href='https://songofnunu.com/es-mx/'
                target='_blank'
                rel='noreferrer'>
                <img src={nunu} alt='song of nunu' />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
