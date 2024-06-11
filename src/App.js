import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/shoppingapp" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
