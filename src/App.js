import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import News1 from './components/News1';
import News2 from './components/News2';
import News3 from './components/News3';
import News4 from './components/News4';
import News5 from './components/News5';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News />}></Route>
          <Route path="/news1" element={<News1 />}></Route>
          <Route path="/news2" element={<News2 />}></Route>
          <Route path="/news3" element={<News3 />}></Route>
          <Route path="/news4" element={<News4 />}></Route>
          <Route path="/news5" element={<News5 />}></Route>


        </Routes>

      </Router>

    </div>
  )
}

// App.state = {
//   progress: 0
// }
export default App
