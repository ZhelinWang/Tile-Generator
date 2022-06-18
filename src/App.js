import logo from './logo.svg';
import './App.css';
import {  useState  } from "react";
import Dropdown from "./DropdownTile"

function App() {
  const[selected, setSelected] = useState("Select Type of Tile ")
  return (
    <div className='App'>
    <Dropdown selected={selected} setSelected={setSelected} />
    <Dropdown selected={selected} setSelected={setSelected} />
    </div>
    
  );
} 


export default App;
