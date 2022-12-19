import '../../components/Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, image}) => {
  return (
    <div className='card-item col-2 m-2 text-white'>
        <h2>{name}</h2>
        <img src={image} alt='the character'/>
        <Link to={`/detail/${id}`}>
            <button className="btn bg-indigo-200 border-black">
                Detalle
            </button>
        </Link>
    </div>
  )
}

export default Item

