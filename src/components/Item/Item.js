import '../../components/Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, name, image}) => {
  return (
    <>
      <div class="card">
        <h3 class="title">{name}</h3>
        <img className='img-banner' src={image} alt='the character'/>
        {/* <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div> */}
        <Link to={`/detail/${id}`}>
          ENTrAR
        </Link>
      </div>
    </>
  )
}

export default Item

