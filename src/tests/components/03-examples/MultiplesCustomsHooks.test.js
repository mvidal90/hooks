import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomsHooks } from '../../../components/03-examples/MultipleCustomsHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Pruebas en <MultiplesCustomsHooks />', () => {
    
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('Debe mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomsHooks />);
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe mostrar la información', () => {
        
       useFetch.mockReturnValue({
           data: [{
               author: 'Marcos',
               quote: 'Hola Mundo'
           }],
           loading: false,
           error: null
       })

       const wrapper = shallow( <MultipleCustomsHooks />);

       expect( wrapper.find('.alert').exists() ).toBe( false );
       expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' );
       expect( wrapper.find('footer').text().trim() ).toBe( 'Marcos' );

    })
    
    
})
