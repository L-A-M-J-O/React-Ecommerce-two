import React, {useState} from 'react'
import '../Form/Formulario.css';
import { Link, useParams } from 'react-router-dom';
import { Confirmacion } from '../Confirmacion/Confirmacion';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const Formulario = () => {
  const [datos, setDatos] =useState({
    name : '',
    password: '',
    lastname: '',
    email: '',
  })

  const handleInputChange = (event) => {
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
  }
  
  const enviarDatos = (event) => {
    event.preventDefault()
  }
  console.log(datos);
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div className='col-3'>
          <form  onSubmit={enviarDatos}>
            <div class="background" id="background"></div>
            <div class="bg-white rounded p-10 text-center shadow-md">
              <h1 class="text-3xl text-black bg-white">Tu compra</h1>
              <p class="text-sm text-gray-700 bg-white">Change the password to see the effect</p>
              <div class="my-4 text-left bg-white">
                <label class="text-gray-800 bg-white">Name:</label>
                <input onChange={handleInputChange} name='name' type="text" class="bg-white text-black border block w-full p-2 mt-2 rounded" placeholder="Enter Name..." />
              </div>
              <div class="my-4 text-left bg-white">
                <label class="text-gray-800 bg-white">Last Name:</label>
                <input onChange={handleInputChange} name='lastname' type="text" class="bg-white text-black border block w-full p-2 mt-2 rounded" placeholder="Enter last Name..." />
              </div>
              <div class="my-4 text-left bg-white">
                <label class="text-gray-800 bg-white">Email:</label>
                <input onChange={handleInputChange} name='email' type="email" class="bg-white text-black border block w-full p-2 mt-2 rounded" placeholder="Enter Email..." />
              </div>
              <div class="my-4 text-left bg-white">
                <label class="text-gray-800 bg-white">Password:</label>
                <input onChange={handleInputChange} name='password' id="password" type="password" class="border block w-full p-2 mt-2 rounded bg-white text-black" placeholder="Enter Password..." />
              </div>
              <button type="submit" className='button-6'><Link className='text-black bg-white hover:text-black' to='/enviado'>Comprar</Link></button>
            </div>
          </form>
         </div>
        </div>
      </div>
  )
}

