import { useFetch } from '../hooks/hooks';
import Card from '../components/Card';
import Filter from '../components/Filter';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../components/banner/Banner';
import { Helmet } from 'react-helmet';

export default function Champinos() {
  let url =
    'https://ddragon.leagueoflegends.com/cdn/12.5.1/data/es_AR/champion.json';

  const { data, error, loading } = useFetch(url);

  const [rol, setRol] = useState('All');
  const [difficulty, setDifficulty] = useState('AllDiff');

  const [searchParams] = useSearchParams();
  const filter = searchParams.get('champion') || '';

  useEffect(() => {
    const scrollHeight = () => {
      let height = window.innerHeight;
      if (window.scrollY === height) return;
      window.scroll(0, height - 150);
    };

    setTimeout(() => {
      scrollHeight();
    }, 500);
  }, []);

  if (loading || loading === null) {
    return (
      <>
        <Helmet>
          <title>Nelson's League | Campeones</title>
          <meta
            name='description'
            content='Mira toda la información relacionada a tu campeón favorito de League OF Legends. Desde su historia y las habilidades, también podrás encontrar consejos para jugar con y contra el campeón'
          />
          <meta
            name='keywords'
            content='lol, league of legends, champions, runaterra, nelson gamero, gamero, riot games, riot'
          />
        </Helmet>
        <main>
          <h1>Cargando...</h1>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Ha ocurrido un error en la carga de campeones 😢 😢 😢 </h1>
      </main>
    );
  }

  const champions = Object.values(data.data);

  return (
    <>
      <Banner />
      <main>
        <h1>CAMPEONES</h1>
        <Filter setDifficulty={setDifficulty} setRol={setRol} />
        <div className='card-container'>
          {champions
            .filter((champRol) => {
              if (rol === 'All') return true;
              return champRol.tags.includes(rol);
            })
            .filter((champDiff) => {
              if (difficulty === 'AllDiff') return true;
              const numDiff = champDiff.info.difficulty;
              const medium = [4, 5, 6, 7];
              const hard = [8, 9, 10];

              if (difficulty === 'easy') return numDiff <= 3;
              if (difficulty === 'medium') return medium.includes(numDiff);
              if (difficulty === 'hard') return hard.includes(numDiff);
              return true;
            })
            .filter((champ) => {
              if (!filter) return true;
              let name = champ.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((e) => (
              <Card
                key={e.id}
                id={e.id}
                name={e.name}
                tags={e.tags}
                img={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${e.id}_0.jpg`}
              />
            ))}
        </div>
      </main>
    </>
  );
}
