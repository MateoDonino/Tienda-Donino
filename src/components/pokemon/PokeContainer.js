import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'

const PokeContainer = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons()

  }, [])
  
  const getPokemons = () => {
    const URL = "https://pokeapi.co/api/v2/pokemon/?limit=25"

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        //console.log(data.results);
        setPokemons(data.results)
      })
  }


  return (
    <div>
      { pokemons.map(p => <li key={p.url}>{p.name}</li>)}
    </div>
  )
}

export default PokeContainer