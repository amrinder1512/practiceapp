import './App.css';
import Navbar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import PageDetails from './PageDetails';
import Check from './check.js';
import NotFound from './NotFound.js';

function App() {
const title = "Welcome to Our New Page";

  return (
    <Router>
      <div className='header'>
        <h1>{title}</h1>
          <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/PageDetails/:id" element={<PageDetails/>} />
            <Route path="/check" element={<Check/>} />
            <Route path="*" element={<NotFound/>}/>
            </Routes>
      </div>
    </Router>
 
  );
}

export default App;
