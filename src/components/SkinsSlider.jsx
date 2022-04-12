import { useRef } from 'react';

export default function SkinsSlider({ skins, champion, name }) {
  const skinsContainer = useRef();

  const next = (e) => {
    const firstImg = skinsContainer.current.children[0];
    const width = skinsContainer.current.offsetWidth;
    firstImg.style.transition = 'margin .5s';
    firstImg.style.marginLeft = `-${width}px`;
    setTimeout(() => {
      skinsContainer.current.insertAdjacentElement('beforeend', firstImg);
      firstImg.style.transition = 'none';
      firstImg.style.marginLeft = `0px`;
    }, 500);
  };
  const back = (e) => {
    const firstImg = skinsContainer.current.children[0];
    const width = skinsContainer.current.offsetWidth;
    const last = skinsContainer.current.children.length - 1;
    const lastImg = skinsContainer.current.children[last];
    skinsContainer.current.insertAdjacentElement('afterbegin', lastImg);
    firstImg.style.marginLeft = `-${width}px`;
    setTimeout(() => {
      firstImg.style.transition = 'margin .5s';
      firstImg.style.marginLeft = `0px`;
    });
    setTimeout(() => {
      firstImg.style.transition = 'none';
    }, 500);
  };

  return (
    <div className='skin-window'>
      <div ref={skinsContainer} className='skins-content'>
        {skins.map((skin) => {
          return (
            <figure key={skin.id} className='image'>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin.num}.jpg`}
                alt={skin.name}
              />
              {skin.name === 'default' ? (
                <figcaption className='title'>{name}</figcaption>
              ) : (
                <figcaption className='title'>{skin.name}</figcaption>
              )}
            </figure>
          );
        })}
      </div>
      <div className='actionButtons'>
        <button onClick={back}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </div>
    </div>
  );
}
