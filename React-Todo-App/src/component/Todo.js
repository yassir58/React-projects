import React, {useState,useCallback} from "react";
import TodoForm from "./TodoForm";
import Background from "./bg-desktop-dark.jpg";
import BackgroundLight from "./bg-desktop-light.jpg"
import TodoList from "./TodoList";
import { getTodoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './helpers'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
const Todo=()=>{
  
   
   const [todoItems, setTodoItems] = useState(getTodoItemsFromLocalStorage('todo') || [])

  
   const addTodoHandler = useCallback(todo => {
    
     let latestTodoItem = null
     if (todoItems.length === 1) {
       latestTodoItem = todoItems[0]
     }
     else if (todoItems.length > 1) {
      const todoItemsDescendingSortedById = todoItems.sort((a, b) => a.id > b.id)
      latestTodoItem = todoItemsDescendingSortedById[0]
    }

    
    const newTodoItems = [
      {
        id: latestTodoItem ? latestTodoItem.id + 1 : 0,
        todo,
      },
      ...todoItems,
    ]

    
    setTodoItems(newTodoItems)

    
    saveTodoItemsToLocalStorage('todo', newTodoItems)
  }, [todoItems]) 
  const removeTodoHandler = useCallback(id => {
   
    const newTodoItems = todoItems.filter(todoItem => todoItem.id !== id)

    
    setTodoItems(newTodoItems)

    
    saveTodoItemsToLocalStorage('todo', newTodoItems)
  }, [todoItems])
  const toggleTodoDoneHandler = useCallback(id => {
    const todo = todoItems.find(todoItem => todoItem.id === id)
    todo.isDone = !todo.isDone

    
    setTodoItems([...todoItems])

   
    saveTodoItemsToLocalStorage('todo', todoItems)

  }, [todoItems])

  const [theme, setTheme] = useState('light');


const toggleTheme = () => {
  
  if (theme === 'light') {
    setTheme('dark');
  
  } else {
    setTheme('light');
  }
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="todo" >
      <div className="intro-section"style={{ backgroundImage:`url(${theme === 'light' ? Background :BackgroundLight})`}}>
      <div className="header">
    <h3 style={{color:"white"}}> TODO</h3>
    <button id="switcher" onClick={toggleTheme}>
{
  theme === 'light' ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>
}
      
      
      </button>
  </div>
  <TodoForm
        onAddTodo={addTodoHandler} 
      />
      </div>

      

      <TodoList
       
        todoItems={todoItems} 
        onRemoveTodo={removeTodoHandler}
        onToggleTodoDone={toggleTodoDoneHandler}
      />
    </div>
    </ThemeProvider>
  );
}


export default React.memo(Todo);