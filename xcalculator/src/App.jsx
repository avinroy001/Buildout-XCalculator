import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState('');
  const [ans,setAns] = useState(null);
  const answer=()=>{
    setAns(eval(value));
    if(value==false){
      setAns("Error");
    }
  }
  const clear=()=>{
    setValue('');
    setAns(null);
  }
  return (
    <div className='container'>
      <h1>React Calculator</h1>
      <input type='text' value={value}></input>
      <div className='ans'>{ans}</div>
      <div>
      <div className='operator'>
        <button onClick={(e)=>setValue(value+e.target.value)} value="7">7</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="8">8</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="9">9</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="+">+</button>
      </div>
      <div>
        <button onClick={(e)=>setValue(value+e.target.value)} value="4">4</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="5">5</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="6">6</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="-">-</button>
      </div>
      <div>
        <button onClick={(e)=>setValue(value+e.target.value)} value="1">1</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="2">2</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="3">3</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="*">*</button>
      </div>
      <div>
        <button onClick={()=>clear()} value="C">C</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="0">0</button>
        <button onClick={()=>answer()} value="=">=</button>
        <button onClick={(e)=>setValue(value+e.target.value)} value="/">/</button>
      </div>
      </div>
    </div>
  )
}

export default App
