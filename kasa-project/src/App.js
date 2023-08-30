import {Routes, Route} from "react-router-dom"
import About from "./Pages/About";
import Accueil from "./Pages/Accueil";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil/>}/> 
        <Route path="/propos" element={<About/>}/>      
      </Routes>
      
    </div>
  )
}

export default App;
