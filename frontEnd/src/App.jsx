import "./App.css"
import './components/ForReservatiion.jsx';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import Home from "../src/Pages/Home"
import Success from "../src/Pages/Success"
import NotFound from "../src/Pages/NotFound.jsx";



const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    <Toaster/>
  </Router>
    
  
}

export default App