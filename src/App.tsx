import Login from './pages/Login';
import Home from './pages/home';
import Cadastro from './pages/Cadastro';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
    </Routes>
    </BrowserRouter>
      )
}