import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/hooks';
import React, { useState } from 'react';
import SkinsSlider from '../components/SkinsSlider';
import Skills from '../components/Skills';
import Tips from '../components/Tips';
import { Helmet } from 'react-helmet';

export default function Champ() {
  const params = useParams();
  let champion = params.champName;
  let url = `https://ddragon.leagueoflegends.com/cdn/12.5.1/data/es_AR/champion/${champion}.json`;
  const { data, loading, error } = useFetch(url);
  const [history, setHistory] = useState(false);

  const viewLore = () => {
    if (!history) return setHistory(true);
    setHistory(false);
  };

  if (loading || loading === null) {
    return (
      <main style={{ marginTop: '100px' }}>
        <h1>Cargando...</h1>
      </main>
    );
  }
  if (error) {
    return (
      <main style={{ marginTop: '100px' }}>
        <h1>Ha ocurrido un error en la carga de campeones 😢 😢 😢 </h1>
      </main>
    );
  }

  const backImage = {
    backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg)`,
  };

  const info = Object.values(data.data)[0];
  const name = info.name;
  const title = info.title;
  const blurb = info.blurb;
  const lore = info.lore;
  const skins = info.skins;

  return (
    <>
      <Helmet>
        <title>Nelson's League | {name}</title>
        <meta name='description' content={blurb} />
        <meta
          name='keywords'
          content={`lol, league of legends, ${name}, ${title}, ${
            name + ' ' + title
          }, riot games, riot, nelson, nelson gamero`}
        />
      </Helmet>
      <div className='champ-page'>
        <section style={backImage} className='champ-image'>
          <div className='image'>
            <figure>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}
                alt={name}
              />
            </figure>
            <figcaption className='image__title'>
              <h1>{name}</h1>
              <h2>{title}</h2>
            </figcaption>
          </div>
          <div className='lore'>
            <p>
              {history ? lore : blurb}{' '}
              <span onClick={viewLore}>
                {history ? 'ver menos' : 'ver más'}
              </span>
            </p>
          </div>
        </section>
        <section className='skins-container'>
          <h2>Aspectos</h2>
          <div className='skins'>
            <SkinsSlider name={name} champion={champion} skins={skins} />
          </div>
        </section>
        <section className='skills-container'>
          <Skills info={info} />
        </section>
        <section className='tips-container'>
          <Tips info={info} />
        </section>
      </div>
    </>
  );
}
