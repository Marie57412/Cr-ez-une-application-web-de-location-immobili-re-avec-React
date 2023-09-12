import {Routes, Route} from "react-router-dom"
import About from "./Pages/About";
import Accueil from "./Pages/Accueil";
import Logement from "./Logement";
import Error from "./Pages/Error";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil/>}/> 
        <Route path="/propos" element={<About/>}/>
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </div>
  )
}

export default App;
