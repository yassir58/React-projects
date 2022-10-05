

import React, { useCallback } from 'react';
 



const TodoItem = ({ todo, id, onRemoveTodo , onToggleTodoDone, isDone  }) => {
  const removeTodoHandler = useCallback(() => onRemoveTodo(id), [id, onRemoveTodo])
  const toggleTodoDoneHandler = useCallback(() => onToggleTodoDone(id), [id, onToggleTodoDone])

  return (
    <div className="card-action">
 <button className="checkbox-btn" onClick={toggleTodoDoneHandler} >{` ${isDone ? "✅":
 
  "⬜"
  
  }`}</button>
    <div className="todo-erea">
    <span  style={{textDecoration: isDone ? 'line-through' : 'none'} }>{todo}</span>
      <button className="remove-btn" onClick={removeTodoHandler}> <i class="fas fa-trash"></i> </button>
    </div>
            
    </div>
  )
};
export default React.memo(TodoItem); ;