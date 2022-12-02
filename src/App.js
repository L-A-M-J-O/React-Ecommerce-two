import './App.css';

import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Series } from './components/Series/Series';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path="/personajes" element={<ItemListContainer />}>
							<Route path=":especie" element={<ItemListContainer />} />
					</Route>
          <Route path="Detail/:prodId" element={<ItemDetailContainer />} />
        </Routes>
    </div>

  );
}

export default App;
