import {Routes, Route} from "react-router-dom"
import {Dashboard} from "./Dashboard/Dashboard"
import {Login} from "./Login/Login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App