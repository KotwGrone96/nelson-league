import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

export default function Filter({ setRol, setDifficulty }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const menuChamps = useRef();
  const menuChampsSelect = useRef();

  const menuDifficulty = useRef();
  const menuDifficultySelect = useRef();

  const handleChange = (e) => {
    setSearchParams({ champion: e.target.value });
  };
  const menuView = () => {
    menuChamps.current.classList.toggle('menu-active');
    menuDifficulty.current.classList.remove('menu-active');
  };

  const handleSelectChamp = (e) => {
    menuChampsSelect.current.innerHTML = e.target.textContent;
    setRol(e.target.id);
  };

  const difficultyView = () => {
    menuDifficulty.current.classList.toggle('menu-active');
    menuChamps.current.classList.remove('menu-active');
  };

  const handleSelectDifficulty = (e) => {
    menuDifficultySelect.current.innerHTML = e.target.textContent;
    setDifficulty(e.target.id);
  };

  return (
    <div className='filter-container'>
      <div className='input'>
        <input
          value={searchParams.get('champion') || ''}
          type='text'
          onChange={handleChange}
          placeholder='buscar'
          onClick={() => {
            menuChamps.current.classList.remove('menu-active');
            menuDifficulty.current.classList.remove('menu-active');
          }}
        />
      </div>
      <div onClick={menuView} className='dropdown-tags'>
        <p ref={menuChampsSelect}>Todos los roles</p>
        <span> ⬇ </span>
        <div ref={menuChamps} className='tags'>
          <span id='All' onClick={handleSelectChamp}>
            Todos los roles
          </span>
          <span id='Assassin' onClick={handleSelectChamp}>
            Asesinos
          </span>
          <span id='Fighter' onClick={handleSelectChamp}>
            Luchadores
          </span>
          <span id='Mage' onClick={handleSelectChamp}>
            Magos
          </span>
          <span id='Marksman' onClick={handleSelectChamp}>
            Tiradores
          </span>
          <span id='Support' onClick={handleSelectChamp}>
            Soportes
          </span>
          <span id='Tank' onClick={handleSelectChamp}>
            Tanques
          </span>
        </div>
      </div>
      <div onClick={difficultyView} className='dropdown-tags'>
        <p ref={menuDifficultySelect}>Todas las dificultades</p>
        <span> ⬇ </span>
        <div ref={menuDifficulty} className='tags'>
          <span id='AllDiff' onClick={handleSelectDifficulty}>
            Todas las dificultades
          </span>
          <span id='easy' onClick={handleSelectDifficulty}>
            Fácil
          </span>
          <span id='medium' onClick={handleSelectDifficulty}>
            Medio
          </span>
          <span id='hard' onClick={handleSelectDifficulty}>
            Difícil
          </span>
        </div>
      </div>
    </div>
  );
}
