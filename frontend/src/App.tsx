import './App.css'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
function App() {

  return (
    <div>
    <Navbar />
    <section id="about" className="h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">About Me</h1>
    </section>
    <section id="experience" className="h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">Experience</h1>
      <Experience />
    </section>
    <section id="projects" className="h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">Projects</h1>
    </section>
    <section id="contact" className="h-screen flex items-center justify-center">
      <h1 className="text-5xl font-bold">Contact</h1>
    </section>
  </div>
  )
}

export default App
