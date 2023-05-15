import logo from './logo.svg';
import './App.css';
import Button from './Button'
import { Routes,Route } from 'react-router-dom';
import Img from './Img'
import './button.css'

function App() {
  return (
    <>
    <div className="App">
     
    </div>

    <Routes>
      <Route path='img' element={<Img />} > </Route>
      <Route path='/' element={<Button />} > </Route>
    </Routes>
    </>
  );
}

export default App;
