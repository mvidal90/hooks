import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';


describe('Pruebas en <RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomsHooks').exists() ).toBe(false);

    })

    test('Debe mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomsHooks').exists() ).toBe(true);

    })
    
    
})
