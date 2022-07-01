import React from 'react'
import InputHome from './InputHome'

const HomeScreen = () => {

 
    
  
  return (
    <div className='header'>
    <div className='headerCircle'></div>
   <h1 className='pokedexx'><img src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg" alt="" /></h1>
    <h1 className='homeMargin'>Podedex</h1>
    <h2 className='homeMargin'>¡Hola Entrenador!</h2>
    <InputHome />
  </div>
  )
}

export default HomeScreen