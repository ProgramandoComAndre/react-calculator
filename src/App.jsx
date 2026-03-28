import { useState } from 'react'
import Display from './components/Display'
import Keyboard from './components/Keyboard'
function App() {

  let [display, setDisplay] = useState("0");
  let [holdDisplay, setHoldDisplay] = useState(true)

  function handleNumber(num) {
    if(holdDisplay) {
      setHoldDisplay(false)
      setDisplay(num)
    }
    else {
      if(num === "=") {
        setDisplay(eval(display))
      }
      else {
      setDisplay(display + num)
      }
    }
  }
  return (
    <>
    <h1>Calculator</h1>
    <div className='calculator'>
      
      <Display display={display} />
      <Keyboard handleNumber={handleNumber} />
      <button onClick={() => {
        setDisplay("0")
        setHoldDisplay(true)
      }}style={{marginTop: "20px"}}>Clear</button>
    </div>
      
    </>
  )
}

export default App
