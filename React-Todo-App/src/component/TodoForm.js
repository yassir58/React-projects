
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ onAddTodo }) => {
  
  const formik = useFormik({
    
    validateOnChange: false,
    validateOnBlur: false,
    
    initialValues: {
      todo: '',
    },
    
    validationSchema: Yup
      .object()
      .shape({
        todo: Yup.string()
          .min(3, 'Todo text is too short.')
          .max(20, 'Todo text is too long.')
          .required('Todo text is required.')
        }
      ),
    onSubmit: (values, { resetForm }) => {
      onAddTodo(values.todo);

      
      resetForm();
    },
  })

  
  const errorKeys = Object.keys(formik.errors);

  const aFormikError = errorKeys.length > 0 ? formik.errors[errorKeys[0]] : null;

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      
      <input
        id="todo"
        name="todo"
        type="text"
        placeholder="Create a new todo .."
        onChange={formik.handleChange}
        value={formik.values.todo}
        autoComplete="off"
      />
     
      
    </form>
    {aFormikError && <span style={{color:"red"}} >{aFormikError}</span>}
    </div>
  )
};
export default React.memo(TodoForm);