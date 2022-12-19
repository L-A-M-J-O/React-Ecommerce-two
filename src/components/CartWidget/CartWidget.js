import '../CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import CartContext from '../../context/context';

export default function CartWidget() {
  const {getQuantity} = useContext(CartContext);
  const quantity = getQuantity()
  return (
    <>
      <button className='btn-cart text-xs text-black'>
        <Link to='/personajes'>Carrito
          <span className='text-white'>{quantity}</span>
        </Link>
      </button>
    </>
  ) 
}
