const { act } = require("@testing-library/react-hooks");
const { renderHook } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");


describe('Pruebas con UseForm', () => {
    
    const initialForm = {
        name: 'Marcos',
        email: 'marcos@gmail.com'
    }

    test('Debe regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current; 


        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
        
    })
    
    test('debe cambiar el nombre de del formulario', () => {

        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange] = result.current; 

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Ariel'
                }
            });
        })

        const [ values ] = result.current;
        expect( values ).toEqual( {...initialForm, name: 'Ariel' })
        
    })

    test('debe re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current; 

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Ariel'
                }
            });
            reset();
        })

        const [ values ] = result.current;
        expect( values ).toEqual( initialForm );

    })
    
    
})
