import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import PokedexScreen from './components/home/pokedex/PokedexScreen'
import HomeScreen from './components/home/HomeScreen'
import PokeInfo from './components/home/pokedex/pokeInfo/PokeInfo'
import PokeType from './components/home/pokedex/PokeType'
import PokeEle from './components/home/PokeEle'
import Login from './components/ProtectRoutes/login'
import { Switch } from 'antd'




function App() {
  const [logged, setLogged] = useState(false)
  const [toggle, setToggle] = useState(false);
  const toggler = () =>{
    toggle ? setToggle(false): setToggle(true)
  }



  return (
    <div className="App">
      <div >
    
      <Routes>
        
        <Route path='/' element={<HomeScreen setLogged={setLogged}/>} />
        <Route element={<Login logged={logged}/>}/>
        <Route className='head' path='/pokedex' element={<PokedexScreen />} />
        <Route path='/pokedex/:id' element={<PokeInfo />} />
        {/* <Route  path='/pokedex/:id' element={<PokeType /> }/> */}
        <Route path='pokedex/type/:type' element={<PokeEle />}/>
      
       
      </Routes>
    </div>
    </div>
  )
}

export default App
