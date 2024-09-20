import { useState } from "react";

const Contador = () => {
    return(
        <div>
            <h2>Contador</h2>
            <p>number</p>
            <button className="btn btn-primary">Sumar</button>
            <button className="btn btn-danger">Restar</button>
            <button className="btn btn-dark">Reset</button>
        </div>
        
    )
}

export default Contador;