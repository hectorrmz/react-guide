import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
