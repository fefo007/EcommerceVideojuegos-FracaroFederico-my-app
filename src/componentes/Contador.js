
import React, {useState} from 'react';
import './Contador.css';

export default function App() {
    const [count, setCount] = useState(0);

    let countSuma = () => {
        if(count<6){
    setCount((count) => count + 1);}
    };

    let countResta = () => {
        if(count>0){
    setCount((count) => count - 1);}
    };

    return (
        <div className="contador">
            <p className='contador__parrafo'>Cantidad</p>
            <div className='contador__cuenta'>
                <button className='contador__cuenta__menos' onClick={() => countResta()}>-</button>
                <span className='contador__cuenta__numero'>{count}</span>
                <button className='contador__cuenta__mas' onClick={() => countSuma()}>+</button>
            </div>
        </div>
    );
}