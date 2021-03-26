import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context.js'
            
const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        border: '1px solid black',
        borderRadius: '5px',
        marginBottom: '5px',
        background: '#ccc'
    },
    button: {
        width: '24px',
        height: '24px',
        background: 'red',
        color: 'white',
        borderRadius: '12px',
        border: 'none'
    }
}
function TodoItem({ todo, index, onChenge }) {
  console.log("todo", todo);

  const { removeTodo } = useContext(Context);
  let classes = [];

  if (todo.isFinished) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.isFinished}
          onChange={() => {
            onChenge(todo.id);
          }}
        />
        <strong>{index + 1}: </strong>
        {todo.title}
      </span>
      <button
        className="btn-close"
        style={styles.button}
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        <strong>&times;</strong>
      </button>
    </li>
  );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

export default TodoItem