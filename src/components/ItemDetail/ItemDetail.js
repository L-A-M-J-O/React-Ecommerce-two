import React,{useState, useContext, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/context';
import { setLogLevel } from 'firebase/app';

const ItemDetail = ({name, image, id, origin, specie, status, genere, episode}) => {
	const [episodeData, setEpisodeData] = useState(episode);
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
	useEffect(() => {
		setEpisodeData(episodeData);
	},[episodeData])
  return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={image} alt='the Character'/>
				<p>{origin},{specie},{status}, {genere}</p>
				<h2>{episodeData.date}, {episodeData.code}, {episodeData.name}</h2>
      </div>
    </>
  )
}

export default ItemDetail
