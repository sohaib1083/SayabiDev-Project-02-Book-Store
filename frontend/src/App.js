import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {
BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addBooks' element={<AddBooks />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
