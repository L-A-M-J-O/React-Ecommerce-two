import '../ItemListContainer/ItemListContainer.css';
import React,{useState, useEffect} from 'react'

import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router';

import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../service/firebase/index';

// import personajes from '../../data';

export const ItemListContainer = ({tittle}) => {
  const [character, setCharacter] = useState([]);
  const[loading, setLoading] = useState(true);

  const {status} = useParams();
  useEffect(() =>{

    const collectionRef = status ? query(collection(db, 'character'), where('status','==', status)):  collection(db, 'character')

    getDocs(collectionRef).then (response => {
        const productsAdapted = response.docs.map (element => {
            const data = element.data()
            return {id: element.id,...data}
        })
        setCharacter(productsAdapted)
    }).catch (error => {
        console.log (error)
    }).finally ( ( )=> {
        setLoading(false)
    })

}, [status])

  if(loading){
      return <span>Loading...</span>
  }
  return (
    <>
    <span>{tittle}</span>
      <div className='container banner-card'>
          <ItemList character={character}/>
      </div>
    </>
  )
}

