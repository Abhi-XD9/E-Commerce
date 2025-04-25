import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar1 from './Components/Navbar1'
import Cart from './Components/Cart'
import Fashion from './Components/Fashion'
import Beauty from './Components/Beauty'
import Gadgets from './Components/Gadgets'
import Liked from './Components/Liked'
import Mycontext from './Components/Mycontext'
import Checkout from './Components/Checkout'
import Footer from './Components/Footer'
function App() {

  return (
  
     <HashRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/gadgets' element={<Gadgets />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
   
  )
}

export default App
