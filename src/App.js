import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState("light")
  const [toggleTxt, settoggleTxt] = useState("Enable Dark Mode")

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      settoggleTxt("Disable Dark Mode")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      settoggleTxt("Enable Dark Mode")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} toggleTxt={toggleTxt}/>
      <TextForm heading="Enter Text Here " mode={mode} />
      {/* <About/> */}
    </>
  );
}

export default App;
