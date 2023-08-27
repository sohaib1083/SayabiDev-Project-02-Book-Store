import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from "./pages/Books"; // Import your Books component
import AddBooks from "./pages/AddBooks"; // Import your AddBooks component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
