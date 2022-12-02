import '../CartWidget/CartWidget.css';
import CartWidgetImg from '../../assets/img/cartwidget.png'
import { Link } from 'react-router-dom';

export default function CartWidget() {
  return (
    <button className='btn-cart'>
      <Link to='/personajes'>Carrito</Link>
      <p className='cantidad'>0</p>
    </button>
  ) 
}
