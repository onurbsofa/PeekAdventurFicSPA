import './App.css'
import Menu from '../components/Menu'
import Historia from '../components/Historia'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Menu/>} />
      <Route path="/historia/:id" element={<Historia/>} />
    </Routes>
  </Router>
  )
}

export default App
