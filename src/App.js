import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/products' element={<Products />} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
