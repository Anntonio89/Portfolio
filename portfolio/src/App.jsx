import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import About from './Pages/About';
import './App.css'; 


function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Router>
        <Header />
        <main style={{ flex: "1" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/proyectos" element={<Projects />} />
          </Routes>
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
