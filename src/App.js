import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import ThemeState from './context/themes/ThemeState';
import NovelState from "./context/books/NovelState";

function App() {
  return (
    <>
      <ThemeState>
        <NovelState>
          <Router>
            <Navbar />
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/signup' element={<Signup />} />
              </Routes>
            </div>
          </Router>
        </NovelState>
      </ThemeState>
    </>
  );
}

export default App;
