import { shallow } from 'enzyme';
import React from 'react';
import HookApp from '../HookApp';

describe('Pruebas en <HookApp />', () => {
    test('se debe mostrar correctamente el componente', () => {
        const wrapper = shallow( <HookApp /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})
