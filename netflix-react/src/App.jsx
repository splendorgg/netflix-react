import './App.css'
import Browse from './components/Browse'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='*' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
