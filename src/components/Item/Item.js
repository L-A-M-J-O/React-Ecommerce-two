import React from 'react'
import personajes from '../../data';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

export const Item = () => {
    return <>
    {
        personajes.map((element) => {
            return <ItemListContainer data={element}/>
        })
    }

    </>
}
