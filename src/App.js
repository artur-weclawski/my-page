import './App.css';
import { useState } from 'react';
import HomePage from './HomePage';
import Projects from './Projects';
import { Routes, Route } from "react-router-dom";
function App(){
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App" id={theme}>
      <Routes>
      <Route path="/*" element={<HomePage theme={theme} setTheme={setTheme}/>}/>
      <Route path='/projects' element={<Projects theme={theme} setTheme={setTheme}/>}/>
      </Routes>
    </div>
  );
}

export default App;
