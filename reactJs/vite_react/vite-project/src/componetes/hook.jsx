import React from 'react'
import { useState } from 'react';




const NumCounter=()=> {
    const [count, setCount] = useState(0);
  
    const Increment = () => {
      setCount(count + 1);
    };
  
    const Decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
      <div className='flex item-center min-h-screen'>
        <button className='button1 h-12 w-12 bg-blue-400 font-extrabold text-xl' onClick={Increment}>+</button>
        <p className='h-12 w-20 text-center leading[11px] bg-red-400 ml-5 mr-5'>Count: {count}</p>
        <button className='button1 h-12 w-12 bg-blue-400 font-extrabold text-xl' onClick={Decrement} disabled={count === 0}>-</button>
      </div>
    );
  }
  
  export default NumCounter