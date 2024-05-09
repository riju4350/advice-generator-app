import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { FaDiceFive } from "react-icons/fa";


function App() {

const [advice, setAdvice] = useState({});
useEffect(()=>{
    handleGenerateAdvice();
},[]);


const handleGenerateAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdvice(data.slip))
}

    return (
        <>
        <div className='advice-container flex items-center justify-center h-screen'>
            <div className="advice-card p-10 rounded-lg w-1/3 text-center">            
            <span className='advice-id'>Advice # {advice.id}</span>
            <p className='text-2xl'>{advice.advice}</p>
           <div className="dice">
           <button onClick={handleGenerateAdvice}><FaDiceFive className='dice-icon'></FaDiceFive></button>
           </div>
            </div>
        </div>
        
        </>
    );
}

export default App
