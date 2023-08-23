import {Routes, Route} from "react-router-dom"
import Accueil from "./accueil/Accueil"
import Contenair from "./accueil/Contenair";
import About from "./A_propos/About";


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
