import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from '../../context/context';
import '../CartCharacter/CartCharacter.css';

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
				<table class="table text-white">
				<tbody className='text-white'>
				{cart.map((guia) => {
									return (
										<tr key={guia.id}>
											<td>
											<td>
												<Link
													className="n-a linkProduct "
													to={`../Detail/${guia.id}`}
												>
													{guia.name}
												</Link>
											</td>
												<img
													width={28}
													src=''
													alt="borrar"
													onClick={() => removeItem(guia.id)}
													id={guia.id}
												/>
											</td>
											<td>${guia.status}</td>
											<td>{guia.quantity}</td>
											<td>${guia.total}</td>

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
