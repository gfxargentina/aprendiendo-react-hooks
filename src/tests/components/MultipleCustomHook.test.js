import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHook } from '../../components/MultipleCustomHook';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHook />', () => {

    beforeEach( () =>  {
 
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> );
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('Debe de mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Luis',
                quote: 'Aprendiendo Testing'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> );
        //console.log( wrapper.html() )
        expect( wrapper.find('.alert').exists() ).toBe(false);
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Aprendiendo Testing');
        expect( wrapper.find('footer').text().trim() ).toBe('Luis');

        
        
    })
    
    
})
