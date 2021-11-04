import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light")
  const [toggleTxt, settoggleTxt] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      settoggleTxt("Disable Dark Mode")
      showAlert("Dark mode activated","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      settoggleTxt("Enable Dark Mode");
      showAlert("Light mode activated","success");
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} toggleTxt={toggleTxt}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter Text Here " mode={mode} showAlert={showAlert} />
      {/* <About mode={mode}/> */}
    </>
  );
}

export default App;
