import { useState } from "react"
import './App.css'
function App() {
const [hello, setHello] = useState<string>("")
  return (
    <div className="hello">
      <h1>Render test</h1>
      <h2>{hello}</h2>
      <button onClick={()=>setHello("hello world!")}>CLICK ME</button>
      <button onClick={()=>setHello("hello world from the second button!")}>CLICK ME AGAIN</button>
    </div>  
  )
}

export default App
