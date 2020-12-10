import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { descripcion }, handleInputChange, reset ] =  useForm({
        descripcion: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [ todos ])

    

    

    //console.log(todos)

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

       const action = {
           type: 'add',
           payload: newTodo
       }
       dispatch( action );
       reset();
    }


    return (
        <div className="container">
            <h1>Todo App ({ todos.length })</h1>
            <hr/>
            <div className="row ">
                <div className="col-7">
                       <ul className="list-group list-group-flush" >
                      { todos.map( (todo, i) => (
                           <li key={ todos.id } 
                               className="list-group-item"
                           >
                              { i + 1}.{ todo.descripcion } {todo.id} </li>
                           ) )                           
                        }
                       </ul>
                       <button
                          className="btn btn-danger"
                       > Borrar</button>                      
                </div>

                <div className="col-5">
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
                </div>

            </div>
            
        </div>
    )
}
