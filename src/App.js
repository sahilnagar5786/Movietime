import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';


function App() {
const user =null;

  return (
    <BrowserRouter>
    <Routes>
      {!user ? (
       <Route exact path="/loginscreen" element= {<LoginScreen/>}/>
      ):(
        <Route exact path="/" element={<HomeScreen/>}/>
      )}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
