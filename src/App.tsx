import { useState } from "react"
import './App.css'
function App() {
const [hello, setHello] = useState<string>("")
  return (
    <div className="hello">
      <h2>{hello}</h2>
      <button onClick={()=>setHello("hello world!")}>CLICK ME</button>
    </div>  
  )
}

export default App
