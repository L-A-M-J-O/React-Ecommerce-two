import '../CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  return (
    <>
      <button className='btn-cart text-sm text-white'>
        <Link to='/personajes'>Carrito 0</Link>
      </button>
    </>
  ) 
}
