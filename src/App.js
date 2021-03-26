import './App.css'
import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList.js'
import Context from './context.js'
//import AddTodo from './Todo/AddTodo.js'
import Loader from './loader.js'
import Modal from './modal/Modal.js'

// ленивая загрузка компонента React.lazy
const AddTodo = React.lazy(()=>{
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve(import('./Todo/AddTodo.js'))
    }, 3000)
  })
})

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading,setLoading] = React.useState(true) // можно не использовать т.к. отображается по условию

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false) // можно не использовать т.к. отображается по условию
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    console.log("toggle id: " + id);

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isFinished = !todo.isFinished;
        }

        return todo;
      })
    );
  }

  function removeTodo(id){
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  function addTodo(title){
    let newId = todos.length ? todos[todos.length-1].id + 1 : 1
    setTodos(
      todos.concat([{
        id: newId,
        title: title,
        isFinished: false
      }])
    )
  }

  //React.Suspense используется при ленивой загрузке компонентов/модулей
  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <h3>My todo</h3>

        <Modal/>

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>
        
        {
          todos.length 
            ? (<TodoList todos={todos} onToggle={toggleTodo}/>)
            : (loading 
                ? <Loader/>
                : <p>No todo! </p>)
        }
        
      </div>
    </Context.Provider>
  );
}

export default App;
