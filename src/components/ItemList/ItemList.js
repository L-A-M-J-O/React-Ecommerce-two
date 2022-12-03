import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({data}) => {
  return (
    <> 
        {
            data.map((element,index) => <Item key={index} {...element}/>)
        }
    </>
  )
}
