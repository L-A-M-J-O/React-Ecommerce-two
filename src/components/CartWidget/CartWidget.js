import '../CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import CartContext from '../../context/context';

export default function CartWidget() {
  const {getQuantity} = useContext(CartContext);
  const quantity =  getQuantity()
  return (
    <>
      <button className='btn-cart text-xs text-black'>
        <Link to='/characters'>
          <div className='row'>
            <div className='col-auto p-0 m-0 bg-white text-center text-black'>
              Your Characters: 
            </div>
            <div className='col-auto p-0 m-0 bg-white'>
            <span className='text-center quantity-span text-black bg-white'>{quantity}</span>
            </div>
          </div>
        </Link>
      </button>
    </>
  ) 
}
