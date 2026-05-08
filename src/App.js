import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import { useState } from 'react';
import Input from './components/input/input';

function App() {
  const [age, setAge] = useState(10)
  return (

    <>
   <div className='container'>
    <h1>Login</h1>
    <Input />
    <Input/>
    <Button/>
   </div>
    </>
  );
}

export default App;
