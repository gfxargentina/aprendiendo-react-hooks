import React from 'react'

const TodoListItem = ({ todo, index, handleDelete, handleToggle  }) => {
    return (
        <li key={ todo.id } 
                 className="list-group-item"
                 >
               <p 
                  //si el todo esta true mostrar la clase sino no hacer nada
                  className={ `${ todo.done && 'complete' }` }
                  onClick={ () => handleToggle( todo.id ) }
                > 
                   { index + 1}.{ todo.descripcion } </p>
                <button
                   className="btn btn-danger ml-5"
                   onClick={ () => handleDelete( todo.id )}
                   > Borrar
                   </button> 
                </li>
    )
}

export default TodoListItem
