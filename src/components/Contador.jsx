import { useState } from "react";
import "./Contador.css";

const Contador = () => {
    const [count, setCount] = useState(0);
    
    const handleAdd = () => {
        setCount(prevState => prevState +1)
    }

    const handleRestar = () => {
        if(count >= 1 ){
            setCount(prevState => prevState -1) 
        }
       
    }

    const handleReset = () => {
        setCount(0)
    }
    return(
        <div className="mt-5">
            <h2>Contador</h2>
            <p className="numero">{count}</p>
            <button className="btn btn-primary" onClick={handleAdd}>Sumar</button>
            <button className="btn btn-danger" onClick={handleRestar}>Restar</button>
            <button className="btn btn-dark" onClick={handleReset}>Reset</button>
        </div>
        
    )
}

export default Contador;