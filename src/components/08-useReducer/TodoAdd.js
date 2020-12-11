import React from 'react'
import { useForm } from '../../hooks/useForm';


const TodoAdd = ({ handleAddTodo }) => {

    const [ { descripcion }, handleInputChange, reset ] =  useForm({
        descripcion: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
          //validacion form
          if ( descripcion.trim().length <= 1 ) {
            return;
          }
  
         //console.log('nueva tarea')
         const newTodo = {
          id: new Date().getTime(),
          descripcion: descripcion,
          done: false
         };
  
         handleAddTodo( newTodo );
         reset();
      }

    return (
        <>
            <h4>Agregar Todo</h4>
                        <hr/>

                        <form onSubmit={ handleSubmit }  >
                            <input 
                            type="text"
                            className="mb-3"
                            name="descripcion"
                            placeholder="descripcion"
                            value={ descripcion }
                            onChange={ handleInputChange }
                            />

                            <button 
                                type="submit"
                                className="btn btn-outline-primary btn-block" >
                                Agregar
                            </button>

                        </form>
            
        </>
    )
}

export default TodoAdd
