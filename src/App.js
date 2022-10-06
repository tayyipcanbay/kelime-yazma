import './App.css';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Welcome from './pages/welcome';
import Type from './pages/type';
import Score from './pages/score';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/type" element={<Type/>}/>
          <Route path="/score" element={<Score/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
