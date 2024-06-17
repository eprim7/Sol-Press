import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Menu from './Pages/Menu/Menu'; // Make sure this path is correct
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
