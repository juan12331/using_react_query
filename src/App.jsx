import { useState } from 'react'
import './App.css'
// "https://pokeapi.co/api/v2/pokemon/ditto"
//

import { useQuery } from '@tanstack/react-query'

function App() {
  const {data ,error , isLoading} = useQuery(
    {
      queryKey: ['todo'], // usando o todo pois podemos colocar multiplas apikey
      queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) => //queryfunction, tem que usar o fetch
       res.json()
       ),

    } // basicamente o que essa função faz é retornar um json com todas as informações do link dentro do fetch incluindo tudo mesmo
    )

    if (error) return <div> Error </div>

    if (isLoading) return <div> Error </div>
return (
    <div>
    {" "}
      {data.map((todo) =>( 
      <div>
         <h1>ID: {todo.id} </h1>
         <h1>title: {todo.title} </h1>
      </div>
      ))}
    </div>
  )
}

export default App

// caso queira aprender mais: https://www.youtube.com/watch?v=NOvx4LB6Hfk&ab_channel=PedroTech
