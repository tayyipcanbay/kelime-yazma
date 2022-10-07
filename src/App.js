import './App.css';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Welcome from './pages/welcome';
import Type from './pages/type';
import Score from './pages/score';
import React from 'react';
function App() {
  const [score,setScore]=React.useState(0);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}/>
          <Route path="/type" element={<Type score={score} setScore={setScore}/>}/>
          <Route path="/score" element={<Score score={score}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
