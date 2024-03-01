import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
    </>
  )
}

export default App
