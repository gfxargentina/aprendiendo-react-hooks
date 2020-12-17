import React from 'react';
import  {shallow}  from 'enzyme';
import  TodoAdd  from '../../../components/08-useReducer/TodoAdd';
//import  {demoTodos}  from '../../fixtures/demoTodos';

describe('Pruebas en <TodoAdd />', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo= { handleAddTodo }
        />
    )

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        
    })
    test('NO debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
        
    })

    test('debe de llamar la funcion handleAddTodo', () => {

        const value = 'Aprendiendo Testing 2';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'descripcion'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        //espera que envia cualquier numero para el id
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            descripcion: value,
            done: false
        }
            );
        //boton reset se espera que limpie los campos y no haiga nada
            expect( wrapper.find('input').prop('value') ).toBe('');

    })
    
    
    
    
})

