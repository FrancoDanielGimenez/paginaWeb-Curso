import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login';
import Home from './pages/home/Home';


function App() {
  
  return (
    <>
      {/**Rutas */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> {/**Ver Todos los blogs*/}
          <Route path='/login' element={<Login/>}/> {/**Ver Todos los blogs*/}
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App;
