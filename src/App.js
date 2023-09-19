// Importation des composants et des éléments nécessaires depuis React Router
import {Routes, Route} from "react-router-dom"

// Importation des différentes pages de l'application
import About from "./Pages/About";
import Accueil from "./Pages/Accueil";
import Logement from "./Pages/Logement";
import Error from "./Pages/Error";


function App() {
  return (
    <div className="app">
       {/* Configuration des routes de l'application */}
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
