import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const {personajesid} = useParams;
  return (
    <div>
        Detalle de personaje
        <h1>{personajesid}</h1>
    </div>
  )
}

