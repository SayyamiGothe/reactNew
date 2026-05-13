import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import About from './components/pages/about';


function App() {

  return (

    <>

<BrowserRouter>

<Routes>

<Route  path='/' element={<Home/>} />

<Route  path='/contact' element={<Contact/>}/>

<Route path='/about' element={<About/>}/>




</Routes>


</BrowserRouter>


    </>
  );
}

export default App;
