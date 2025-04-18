
import './App.css'
import Navbar from './components/Navbar/Navbar'

import About from './pages/About/About'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact/Contact'
import Project from './pages/Project/Project'

function App() {
  

  return (
    <>     
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />   
    </>
  )
}

export default App
