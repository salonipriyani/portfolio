import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {
  return (
    <div id="app" className="App">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
        
    </div>
  );
}

export default App;