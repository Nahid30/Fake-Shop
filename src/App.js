import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route,  } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
