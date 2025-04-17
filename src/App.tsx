
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About/About'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
    </>
  )
}

export default App
