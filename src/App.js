import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode has been Enabled", "success");
      // document.title = 'TextUtil - Darkmode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success")
      document.title = 'TextUtil - Home';
    }
  }
//   const [myStyle, setMyStyle] = useState({
//     backgroundColor: 'white',
//     color: 'black'
// })
// const [btnText, setBtnText] = useState("Enable Darkmode")
// const darkMode = ()=> {
//     if(myStyle.color === 'white'){
//         setMyStyle({
//             backgroundColor: 'white',
//             color: 'black'
//         })
//         setBtnText("Enable Darkmode")
//     }
//     else{
//         setMyStyle({
//             backgroundColor: 'black',
//             color: 'white',
//             border: '1px solid white'
//         })
//         setBtnText("Enable Lightmode")
//     }
// }
  return (
    <>
      {/* <div className="body"> */}
      <Router>
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
         <Switch>
           <Route path="/about">
             <About mode={mode}/>
           </Route>
           <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
           </Route>
         </Switch>
       </div>
       {/* <button className="my-3 mx-2 bg-primary btn btn-dark" onClick={darkMode}>{btnText}</button> */}
       {/* </div> */}
       </Router>
    </>
  );
}

export default App;
