import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    
    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    }

    

    return (
        <form onSubmit={ handleSubmit } className="container">
            <h1>Form with custom Hook</h1>
            <hr/>

            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="tu nombre"
                value={ name }
                onChange={ handleInputChange }
                />

            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                className="form-control"
                placeholder="tu correo"
                value={ email }
                onChange={ handleInputChange }
                />

            </div>

            <div className="form-group">
                <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="tu contaseña"
                value={ password }
                onChange={ handleInputChange }
                />

            </div>

            <button type="submit" className="btn btn-success" > Guardar</button>
            
        </form>
    )
}
