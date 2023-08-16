import {Routes, Route} from "react-router-dom"
import Accueil from "./accueil/Accueil"
import Contenair from "./accueil/Contenair";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Accueil/>}/>       
      </Routes>
      <Contenair></Contenair>
    </div>
  )
}

export default App;
