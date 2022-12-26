import React,{useState} from 'react';
import añadir from '../../assets/img/añadir.png';
import resta from '../../assets/img/resta.png'
import '../ItemDetailContainer/ItemDetailContainer.css';

export const ItemCount = ({status, onAdd, initial= 1}) => {
  const [quantity, setQuantity] =  useState( status>0 ? initial : status);
    
  const handleChange = (parametro) =>{
      if(parametro.target.value <= status){
          setQuantity(parametro.target.value)
      }
  }

  const add = () => {
      if (quantity<status){
          setQuantity(Number(quantity) + 1)
      }
  } 

  const subtract = () => {
      if (quantity>0){
          setQuantity(quantity - 1)
      }
  }
  return (
    <div className='row row-cols-1 p-0 m-0'>
      <div className='col-auto mt-5'>
        <button onClick={subtract} className='btnC me-3'><img width={22} src={resta} alt='borrar'/ > </button>
          <input className='input-count'  wsonChange={handleChange}  value={quantity}/>
        <button onClick={add} className='btnC ms-3'>
            <img width={20} src={añadir} alt='agregar'/>
        </button>   
      </div>
      <div className='col-auto'>
        <button className='btnB mt-5' onClick={()=> onAdd(quantity)}>Add to Cart</button> 
      </div>
    </div>
  )
}
