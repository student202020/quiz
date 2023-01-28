import React from "react"
import Loading from "./Loading";
import Start from "./Start";
import Pitanja from "./Pitanja";
import { useGlobalContext } from "./context";

import './App.css';

function App() {
  const{loading, pitanja, index, waiting} = useGlobalContext()
  if(loading){ return <Loading />}
  if(waiting){ return <Start />}
  return (
    <div className="App">
    
      <Pitanja />
      
    </div>
  );
}

export default App;
