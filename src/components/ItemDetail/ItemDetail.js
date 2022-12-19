import React,{useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/context';

const ItemDetail = ({name, image, id,}) => {
  const [quantityAdd, setQuantityAdd] = useState(0);
	const { addItem, getProductQuantity } = useContext(CartContext);

	const handleOnAdd = (quantity) => {
		setQuantityAdd(quantity);

		const productToAdd = {
			id,
			name,
			quantity,
		};
		if (quantity > 0) {
			addItem(productToAdd);
		}
	};
  return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={image} alt='the Character'/>
      </div>
    </>
  )
}

export default ItemDetail
