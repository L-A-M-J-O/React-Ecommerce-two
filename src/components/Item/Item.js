import React from 'react'
import '../../components/Item/Item.css';
import { Link } from 'react-router-dom';

export const Item = ({id, name, species, gender, image}) => {
  return (
    <div className='card-item col-2 m-2 text-white'>
        <h2>{name}</h2>
        <p>{species}, {gender}</p>
        <img src={image} alt='imagePersonaje'/>
        <Link to={`/detail/${id}${name}`}>
            <button className="btn bg-indigo-200 border-black">
                Detalle
            </button>
        </Link>
    </div>
  )
}

