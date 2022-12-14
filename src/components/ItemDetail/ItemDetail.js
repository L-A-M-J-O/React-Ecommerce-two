import React,{useState, useContext, useEffect} from 'react';
import '../ItemDetailContainer/ItemDetailContainer.css';
import {ItemCount} from '../ItemCount/ItemCount';
import CartContext from '../../context/context';
import { setLogLevel } from 'firebase/app';
import {Link} from 'react-router-dom';

const ItemDetail = ({name, image, id, origin, specie, status, genere, episode, price}) => {
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
		},[episodeData]);

	
	const productQuantity = getProductQuantity(id);

  return (
    <>
		<h1>{name}</h1>
			<div className="min-h-screen w-full card-box">
				<div className="max-w-screen-md mx-auto px-10 pt-20">
					<div className="md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
						<div className="w-full md:w-1/2 p-4">
							<h3 className="text-3xl font-bold">{specie}</h3>
							<p className=''>{origin}</p>
							<p className=''>{genere}</p>
							<p className='text-5xl mt-2'>{status}</p>
							<p>	incl. 19% VAT. (the VAT of the respective EU country will be calculated at the checkout.) plus</p>
							<h3 className='text-white text-4xl font-semibold m-2'>€{price}</h3>
							<div>{quantityAdd <= 0 ? (
							<ItemCount status={status} initial={productQuantity} onAdd={handleOnAdd}/>) : ( <div className='row justify-content-center'><div className='col-5'><Link to='/cartCharacter'><button className='button-6 mt-4'>Buy</button></Link></div><div className='col-5'><Link to='/personajes'><button className='button-6 mt-4'>Characters</button></Link></div></div>)}</div>
						</div>
						<div className="w-full md:w-1/2 p-4 md:p-0">
							<img src={image} alt="" className="w-100 mx-auto"/>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default ItemDetail
