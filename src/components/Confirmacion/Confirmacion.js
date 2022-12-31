import React from 'react'
import '../Confirmacion/Confirmacion.css';
import { useParams } from 'react-router';

export const Confirmacion = () => {
  let {username} = useParams();
  return (
    <div class="box bg-white">
      <div class="content-box text-black bg-white">
        <h1 className=' text-black bg-white'></h1>
        <h3 className=' text-black bg-white'>Sus datos han sido enviados correctamente, podria seguir comprando espero su pedido le llegue bien</h3>
      </div>
      <div class="flap"></div>
    </div>
  )
}
