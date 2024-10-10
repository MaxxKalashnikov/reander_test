import { useState } from "react"
import './App.css'
function App() {
const [hello, setHello] = useState<string>("")
  return (
    <div className="hello">
      <h2>{hello}</h2>
      <button onClick={()=>setHello("hello world!")}>CLICK ME</button>
      <button onClick={()=>setHello("hello world from the second button!")}>CLICK ME AGAIN</button>
      <button onClick={()=>setHello("hi there!")}>CLICK</button>
      <button onClick={()=>setHello("hi there!")}>CLICK</button>
    </div>  
  )
}

export default App
