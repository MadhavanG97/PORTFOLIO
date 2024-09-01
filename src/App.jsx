import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Madhavan from './components/Madhavan';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/contact';

function App() {
  return (
    <div>
    <Navbar />
    <Madhavan />
    <About />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
