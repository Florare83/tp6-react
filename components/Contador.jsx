import { useState } from 'react'

function Contador() {
    //           variable   setter         valor inicial
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2 style={{ color: count > 0 ? 'green' : 'red' }}>
                Contador: {count}
            </h2>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button disabled={count === 0} onClick={() => setCount(count - 1)}>
                -1
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
// Cada vez que llamás a setContador, React RE-RENDERIZA
// el componente con el nuevo valor.
export default Contador