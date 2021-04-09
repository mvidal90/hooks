import React from 'react';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';
import { shallow, mount } from "enzyme";
import { TodoApp } from '../../../components/08-useReducer/TodoApp';


describe('Pruebas con <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn( () => {} )

    test('Debe mostarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot(); 

    })
    
    test('Debe agregar un nuevo TODO', () => {
        
        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        })

        expect( wrapper.find('h1').text().trim() ).toBe('Todo App ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    })

    test('Debe eliminar un TODO', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );


        expect( wrapper.find('h1').text().trim() ).toBe('Todo App ( 0 )');


    })
    
    

})
