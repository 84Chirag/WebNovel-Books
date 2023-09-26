import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ThemeState from './context/notes/ThemeState';

function App() {
  return (
    <>
      <ThemeState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </Router>
      </ThemeState>
    </>
  );
}

export default App;
