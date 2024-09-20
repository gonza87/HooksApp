import { useState } from "react";
import "./Contador.css";

const Contador = () => {
    return(
        <div className="mt-5">
            <h2>Contador</h2>
            <p className="numero">0</p>
            <button className="btn btn-primary">Sumar</button>
            <button className="btn btn-danger">Restar</button>
            <button className="btn btn-dark">Reset</button>
        </div>
        
    )
}

export default Contador;