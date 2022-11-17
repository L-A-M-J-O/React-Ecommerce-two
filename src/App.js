import './App.css';
import Item from './components/Item/Item';
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Item/>
    </div>

  );
}

export default App;
