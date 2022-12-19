import React,{useState} from 'react';

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
    <>
    <div className='count'>
      <button onClick={subtract} className='btnC me-3'><img width={26} src='{borrar}' alt='borrar'/ > </button>

        <input sonChange={handleChange}  value={quantity}/>

      <button onClick={add} className='btnC ms-3'>
          <img width={26} src='{agregar}' alt='agregar'/>
      </button>   
    </div>
    <button className='btnB mt-5' onClick={()=> onAdd(quantity)}>Add to Cart</button>
    </>
  )
}
