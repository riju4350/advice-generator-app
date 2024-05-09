import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

//   const [advice, setAdvice] = useState({});

//     useEffect(() => {
//         fetchAdvice();
//     }, []);

//     const fetchAdvice = async () => {
//         try {
//             const response = await fetch('https://api.adviceslip.com/advice');
//             const data = await response.json();
//             setAdvice(data.slip);
//         } catch (error) {
//             console.error('Error fetching advice:', error);
//         }
//     };

//     const handleGenerateAdvice = () => {
//         fetchAdvice();
//     };

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
           <button onClick={handleGenerateAdvice}><img src="../src/assets/images/icon-dice.svg" alt="generate-icon" /></button>
           </div>
            </div>
        </div>
        
        </>
    );
}

export default App
