import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    })

    test('debe de incrementar el counter en 1', () => {
        const { result } = renderHook( () => useCounter(50) );
        const { increment } = result.current;

        act( () =>{
            increment();
        } )

        const { counter } = result.current;
        expect( counter ).toBe(51);
       
    })

    test('debe de restarle al counter en 1', () => {
        const { result } = renderHook( () => useCounter(50) );
        const { decrement } = result.current;

        act( () =>{
            decrement();
        } )

        const { counter } = result.current;
        expect( counter ).toBe(49);
        
    })

    test('debe de resetear el counter a 10', () => {
        const { result } = renderHook( () => useCounter(10) );
        const { reset } = result.current;

        act( () =>{
            reset();
        } )

        const { counter } = result.current;
        expect( counter ).toBe(10);
        
    })
    
    
    
})
