import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import './App.css'; 


function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/proyectos" element={<Projects />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
