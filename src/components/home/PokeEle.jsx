import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./pokedex/PokeCard";
import { useParams } from "react-router-dom";

const PokeEle = () => {
  const [isType, setIsType] = useState();
    

  const {type} = useParams()
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}/`)
      .then((res) => setIsType(res.data))
      .catch((err) => console.log(err));
  }, [type]);
  console.log(isType)
  
  return (
    
    <div className='header'>
      <div className='headerCircle'></div>
      <h1 className='pokedexx'><img src="https://raw.githubusercontent.com/sleduardo20/pokedex/0671af442dff1d8f7141e49eb83b438885bbc9e9/public/img/logo.svg" alt="" /></h1>
    
      
     
     <div className='flex margiTop'> 
     
     {isType?.pokemon?.map(itype => (
        <PokeCard key={itype.pokemon.url} url={itype.pokemon.url} />
      ))}
      </div>
       
    </div>
  );
};

export default PokeEle;
