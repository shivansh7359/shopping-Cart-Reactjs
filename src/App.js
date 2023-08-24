import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div >
      <div className='bg-slate-900'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  )
};

export default App;
