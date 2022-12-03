import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({data}) => {
  return (
    <div className='row justify-center'> 
        {
            data.map((element,index) => <Item key={index} {...element}/>)
        }
    </div>
  )
}
