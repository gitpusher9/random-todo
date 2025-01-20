import { useState } from 'react'
import {useEffect} from 'react'


function App() {
  const [todos, setTodos] = useState([])


  useEffect(() => {
      const Interval = setInterval(() => {
        fetch('http://localhost:3000/todos')
          .then(async (res) => {
          const json = await res.json()
          setTodos(json.todos);})
        },10000)
        return() => clearInterval(Interval)
},[Todo])

 return(
  <div>
      
      {todos.map(todo => <Cardwrapper> 
        <Todo>
        <div>{todo.title}</div>
         <div>{todo.description}</div>
         </Todo>
         </Cardwrapper>)}
      
  </div>
 )
}

function Todo({children}){
  return(
    <div>
      
      <h1>{children[0]}</h1>
      <h3>{children[1]}</h3>
    </div>
  )
}
function Cardwrapper({children}){
  
  return(
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
      {children}
    </div>
  )
}


export default App
