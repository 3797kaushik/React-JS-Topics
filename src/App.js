import React, { useState } from 'react'
import Events  from "./Events";
const App = () => {

  const [count, setCount] = useState(1);
  const IncNum = () => {
    setCount(count + 1);
  }
  const [time, setTime] = useState((new Date()).toLocaleTimeString());


  const UpdateTime = () => {
    setTime((new Date()).toLocaleTimeString());
  }
  setInterval(() => {
    setTime((new Date()).toLocaleTimeString());
  }, 1000);
  return (<>
    <h1>{count}</h1>
    <button onClick={IncNum}> Click Me</button>
    <h1>{time}</h1>
    <button onClick={UpdateTime}> Click Me</button>
    
  </>
  )
}

export default App;