import {Routes, Route} from "react-router-dom"
import Banner from "./accueil/Banner";
import Contenair from "./accueil/Contenair-card";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/" element={<Contenair/>}/>
      </Routes>
    </div>
  )
}

export default App;
