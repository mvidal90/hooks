const { renderHook, act } = require("@testing-library/react-hooks")
const { useCounter } = require("../../hooks/useCounter")


describe('Pruebas con useCounter', () => {
    
    test('Debe retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter());

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    })

    test('Debe tener el counter en 100', () => {

        const { result } = renderHook( () => useCounter(100));

        expect( result.current.counter ).toBe(100);

    })

    test('Debe incrementar el counter en 1',() => {

        const { result } = renderHook( () => useCounter(100));
        const { increment } = result.current;

        act( () => {

            increment();

        })

        const { counter } = result.current;
        expect( counter ).toBe( 101 );

    })

    test('Debe decrementar el counter en 1',() => {

        const { result } = renderHook( () => useCounter(100));
        const { decrement } = result.current;

        act( () => {

            decrement();

        })

        const { counter } = result.current;
        expect( counter ).toBe( 99 );

    })

    test('Debe incrementar el counter en 1 y luego resetear el valor',() => {

        const { result } = renderHook( () => useCounter(100));
        const { increment } = result.current;
        const { reset } = result.current;


        act( () => {

            increment();
            reset();

        })

        const { counter } = result.current;
        expect( counter ).toBe( 100 );

    })

})
