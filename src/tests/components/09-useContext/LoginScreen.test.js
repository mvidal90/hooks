import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas con <LoginScreen />', () => {
    
    const setUser = jest.fn();

    const wrapper = mount( 
        <UserContext.Provider value = {{ 
            setUser
         }}>
            <LoginScreen />
        </UserContext.Provider>
    );
    
    test('Debe mostrase correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe ejecutarse el setUser con el argumento esperado', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: 1234,
            mail: "marcos.vidal@gmail.com",
            name: 'Marcos'
        })


    })
    

})
