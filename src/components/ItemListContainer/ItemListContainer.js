import {useState} from 'react'
import personajes from '../../data';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {
  const [character, setCharacter] = useState(personajes);
 
  return (
    <>
        <ItemList data={character}/>
    </>
  )
}

