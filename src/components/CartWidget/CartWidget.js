import '../CartWidget/CartWidget.css';
import CartWidgetImg from '../../assets/img/cartwidget.png'

export default function CartWidget() {
  return (
    <button className='btn-cart'>
      <img className='img-cart' src={CartWidgetImg} alt='CartWidget'/>
    </button>
  )
}
