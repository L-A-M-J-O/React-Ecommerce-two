import '../ItemListContainer/ItemListContainer.css';
import React,{useState, useEffect} from 'react'

import ItemList from '../ItemList/ItemList';
import Curiosidad from '../../pages/Curiosidad';

import { useParams } from 'react-router';

import { getDocs, collection, query, where} from 'firebase/firestore';
import { db } from '../../service/firebase/index';

// import personajes from '../../data';

export const ItemListContainer = ({tittle}) => {
  const [character, setCharacter] = useState([]);
  const[loading, setLoading] = useState(true);

  const {specie} = useParams();
  useEffect(() =>{

    const collectionRef = specie ? query(collection(db, 'character'), where('specie','==', specie) ):  collection(db, 'character')

    getDocs(collectionRef).then (response => {
        const productsAdapted = response.docs.map (element => {
            const data = element.data()
            return {id: element.id,...data}
        })
        setCharacter(productsAdapted)
    }).catch (error => {
        console.log (error)
    }).finally ( ( )=> {
      setTimeout(() => {
        setLoading(false);
      }, 0)
        
    })
}, [specie])
  if(loading){
      return(
        
      <section className='container box-loading' >
        <div className='row justify-center mt-5'>
          <div className='col-4'>
            <h1 className='loading'>Loading...</h1>
          </div>
          <div className='col-12'>
              <Curiosidad/>
            </div>
        </div>
      </section> 
      )
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

