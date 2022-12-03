import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({id, name, species, gender, image}) => {
  return (
    <div className='col'>
        <h2>{name}</h2>
        <Link to={`/detail/${id}${name}`}>
            <button className="btn bg-indigo-200 border-black">
                detalle
            </button>
        </Link>
    </div>
  )
}

