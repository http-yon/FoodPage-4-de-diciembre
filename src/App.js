import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Contact from './pages/Contact';
import About from './pages/About';
import Menu from './pages/Menu';
import Service from './pages/Service';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/service' element={<Service />} />


        <Route path='*' element={<Home />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
