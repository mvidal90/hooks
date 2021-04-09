import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Pruebas con <HomeScreen />', () => {
    
    const user = {
        name: "Marcos",
        email: "marcos.vidal.007@gmail.com"
    }

    const wrapper = mount( 
        <UserContext.Provider value = {{ 
            user
         }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot(); 
    })
    

})
