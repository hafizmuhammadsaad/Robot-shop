
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Product from './Pages/Product/Product'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>

        <Route path='/' element = {<Home/>} />
      <Route path = "/product" element = {<Product/>}/>
      <Route path = "/contact" element = {<Contact/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
