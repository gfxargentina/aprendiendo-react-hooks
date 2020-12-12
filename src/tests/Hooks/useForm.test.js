import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm';

describe('Prueba de componente useForm', () => {
    const initialForm = {
        name: 'luis',
        email: 'luis@email.com'
    };

    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    });

    test('debe de cambiar el value name del formulario', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Silvia'
                }
            });
        } );
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Silvia' })
        
    });

    test('debe de re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Silvia'
                }
            });
            reset();
        } );
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
    })
    
    

    
    
})
