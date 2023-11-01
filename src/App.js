
import './App.css';
import {useState} from 'react'

function App() {
  const[Input, SetInput]=useState("");

  const handleinput =(e)=>{
    e.preventDefault();
    SetInput(Input + e.target.value );

  }
  const handlesubmit =(e)=>{
    try{
      e.preventDefault();
      SetInput(eval(Input).toString());
    }catch(error){
      SetInput("Error");
    }
      }
  const handleclear =()=>{
    SetInput('');
  }

  return (
    <div className="App">
      <div className='calculator'>
        <input type='text' value={Input}/>
        <form >
        <button value="clear"  onClick ={handleclear} className='clear'>Clear</button>
        <button value="/ " onClick={handleinput}>&divide;</button>
        <button value=" *" onClick={handleinput}>*</button>
        <button value=" 7" onClick={handleinput}>7</button>
        <button value="8 " onClick={handleinput}>8</button>
        <button value=" 9" onClick={handleinput}>9</button>
        <button value="+ " onClick={handleinput}>+</button>
        <button value=" 4" onClick={handleinput}>4</button>
        <button value=" 5" onClick={handleinput}>5</button>
        <button value=" 6" onClick={handleinput}>6</button>
        <button value=" -" onClick={handleinput}>-</button>
        <button value=" 1" onClick={handleinput}>1</button>
        <button value=" 2" onClick={handleinput}>2</button>
        <button value=" 3" onClick={handleinput}>3</button>
        <button value="0 " onClick={handleinput}>0</button>
        <button value=" ." onClick={handleinput}>.</button>
        <button value="enter" onClick={handlesubmit}>Enter</button>
      </form>
      </div>
      
    </div>
  );
}

export default App;
