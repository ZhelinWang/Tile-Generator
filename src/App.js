import logo from './logo.svg';
import './App.css';
import {  useState  } from "react";
import DropdownTile from "./DropdownTile"
import DropdownDeal from "./DropdownDeal"

function App() {
  const[selectedTile, setSelectedTile] = useState("Select Type of Tile ")
  const[selectedDeal, setSelectedDeal] = useState("Select Type of Tile ")
  return (
    <div className='App'>
    <DropdownTile style={{zIndex: '1'}} selected={selectedTile} setSelected={setSelectedTile} />
    <DropdownDeal style={{zIndex: '10'}} selected={selectedDeal} setSelected={setSelectedDeal} />
    </div>
    
  );
} 


export default App;
