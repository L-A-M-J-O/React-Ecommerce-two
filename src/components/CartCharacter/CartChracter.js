import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from '../../context/context';
import '../CartCharacter/CartCharacter.css';
import eliminar from '../../assets/img/eliminar.png';

export const CartChracter = () => {

  const { cart, clearCart, removeItem,} = useContext(CartContext);
  return (
		<>
			{cart.length === 0 ? (
				<>
					<h1 className="text-center mt-4 text-white">Your cart is empty</h1>
					<div className="row justify-content-center mt-3">
						<div className="col-12 col-sm-12 col-md-5 col-lg-5 text-center">
							<Link to="/personajes" className="m-txt-a" aria-current="page">
								<button className="btnB mt-4">Characters</button>
							</Link>
						</div>
					</div>
				</>
			) : (
				<>
				<h1 className="text-center mt-4 text-white">Your purchase</h1>
				<table class="table text-white mt-5 table-box">
				<tbody className='text-white'>
				{cart.map((element) => {
					console.log(element);
									return (
										<tr key={element.id}>
											<td>
											<td>
												<Link
													className="n-a linkProduct "
													to={`../Detail/${element.id}`}
												>
													{element.name}
												</Link>
											</td>
											</td>
											<td>${element.status}</td>
											<td>${element.price}</td>
											<td>{element.quantity}</td>
											<td>${element.total}</td>
											<td><img className='imagen-eliminar'
													width={25}
													src={eliminar}
													alt="borrar"
													onClick={() => removeItem(element.id)}
													id={element.id}
												/></td>
										</tr>
										
									);
								})}
				</tbody>
				{cart.length !== 0 && (
							<div className="row justify-content-center">
								<div className="col-2">
									<button className="btnI" onClick={clearCart}>
										Clean cart
									</button>
								</div>
								<div className="col-2">
									<Link className="m-a-c" to="/cervezas">
										Keep buying
									</Link>
								</div>
								<div className="col-2">
									<Link to="/form">
										<button className="btnI">To buy</button>
									</Link>
								</div>
							</div>
						)}
			</table>
				</>
			)}
		</>
  )
}
