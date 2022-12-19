import ItemDetail from '../ItemDetail/ItemDetail';

import React,{useState, useEffect} from 'react';
import { db } from '../../service/firebase/index';
import { getDoc, doc} from 'firebase/firestore';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

  const [character, setCharacter] = useState();
  const [loadingDetail, setLoadingDetail] = useState  (true);

  const {personajesid} = useParams ();

  useEffect ( ( ) => {
    getDoc(doc(db, 'character', personajesid)).then(response =>{
        const data = response.data
        const productsAdapted = {id: response.id, ...data}
        setCharacter(productsAdapted)
    }).catch(error => {
        console.log(error)
    }).finally(( )=> {
        setLoadingDetail (false)
    })
  }, [personajesid] )
  if (loadingDetail){
      return <span>Loading...</span>
  }
  return (
    <div className="container text-center text-white">
        <h2 className='h2-detail'>
          <ItemDetail {...character}/>
        </h2>
    </div>
  )
}

