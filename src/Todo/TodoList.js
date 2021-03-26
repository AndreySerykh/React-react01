import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles = {
    ul:{
        listStyle: 'none',
        padding: 0,
        margin: 0
    }
}

 function TodoList(props) {
   return (
     <ul style={styles.ul}>
       {props.todos.map((todo, i) => {
         return (
            <TodoItem   
                key={todo.id}
                todo={todo} 
                index={i} 
                onChenge={props.onToggle}
            />
         );
       })}
     </ul>
   );
 }

 TodoList.propTypes = { 
        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        onToggle: PropTypes.func.isRequired 
    };

 export default TodoList;