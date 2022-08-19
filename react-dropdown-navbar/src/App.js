import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/consulting' element={<Consulting/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
