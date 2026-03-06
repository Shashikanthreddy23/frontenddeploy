import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Reg from "./reg"
import Home from "./home"
function App() {
  return (
    <>
      <h1>Iam App</h1>
      <BrowserRouter>
        <nav style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
          <Link to="/reg" style={{ marginRight: '15px' }}>Register</Link>
          <Link to="/h">Home</Link>
        </nav>
        <Routes>
          <Route path="/reg" element={<Reg />} />
          <Route path="/h" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App