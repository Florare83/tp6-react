import { useState } from "react";

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();  // evita recarga de página
        alert(`Hola ${nombre}! Tu email es ${email}. Tu mensaje es ${mensaje}`);
        console.log({ nombre, email, mensaje });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={nombre}                    // controlado
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
            />
            <input
                type="email"
                value={email}                     // controlado
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
            />
            <input
                type="text"
                value={mensaje}                     // controlado
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Tu mensaje"
            />
            <button type="submit" disabled={!nombre || !email || !mensaje}>Enviar</button>
            <p>Preview: Hola, {nombre || "..."}</p><p>Email: {email}</p><p>Mensaje: {mensaje}</p>
        </form>
    );
}

export default Formulario
