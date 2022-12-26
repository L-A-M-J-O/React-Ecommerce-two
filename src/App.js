import './App.css';

import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Footer } from './pages/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import { CartContextProvider} from './context/context';
import { CartChracter } from './components/CartCharacter/CartChracter';

function App() {
  return (
    <CartContextProvider>
      <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/personajes" element={<ItemListContainer />}>
							<Route path=":specie" element={<ItemListContainer />} />
					</Route>
          <Route path="/detail/:personajesid" element={<ItemDetailContainer />} />
          <Route path="/characters" element={<CartChracter />} />
          <Route path='/cartCharacter' element={<CartChracter/>}/>
        </Routes>
    </CartContextProvider>

  );
}

export default App;
