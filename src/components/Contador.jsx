import { useState } from "react";
import "./Contador.css";

const Contador = () => {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(prevState => prevState +1)
    }
    return(
        <div className="mt-5">
            <h2>Contador</h2>
            <p className="numero">{count}</p>
            <button className="btn btn-primary" onClick={handleAdd}>Sumar</button>
            <button className="btn btn-danger">Restar</button>
            <button className="btn btn-dark">Reset</button>
        </div>
        
    )
}

export default Contador;