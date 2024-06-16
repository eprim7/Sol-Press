import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Menu from './Pages/Menu/Menu'; // Make sure this path is correct

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
