const { todoReducer } = require("../../../components/08-useReducer/todoReducer");
import { addTodo } from "../../fixtures/addTodo";
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en todoReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        
        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );

    })
    
    test('Debe ragregar un TODO', () => {
        
        const action = {
            type: 'add',
            payload: addTodo
        }

        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, addTodo] );

    })

    test('Debe Borrar un TODO', () => {
        
        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[0] ] );

    })

    test('Debe hacer el TOOGLE del TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 2
        }

        const state = todoReducer( demoTodos, action );

        expect( state[1].done ).toBe( true );
        expect( state[0] ).toEqual( demoTodos[0] );
    })
    
    
})
