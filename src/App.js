import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import { useState } from 'react';
import Input from './components/input/input';
import Heading from './components/headings/heading';

function App() {

  return (

    <>
  <Heading name="sayyami" age={18}/>

  <Heading name="anamika" age={21}/>

  <Heading name="ravina" age={17}/>
    </>
  );
}

export default App;
