import { useState } from 'react'
import { Link, Routes, Route } from "react-router-dom";
import './App.css'
import { Navbar } from './Components';
import { Home, Portfolio, About, Contact } from './pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
        
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>

      
    </>
  )
}

export default App
