import 'swiper/css/navigation';
import 'swiper/css';
import './App.css'

import Browse from './components/Browse'
import Home from './components/Home'
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='*' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
