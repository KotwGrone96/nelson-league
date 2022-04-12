import { NavLink } from 'react-router-dom';

export default function Card({ img, name, id }) {
  return (
    <NavLink to={`/champions/${id}`}>
      <div className='card'>
        <figure className='card-avatar'>
          <img src={img} alt={img} />
        </figure>
        <figcaption className='card-title'>{name}</figcaption>
      </div>
    </NavLink>
  );
}
