// import React, {useState} from 'react'
import Header from './components/header'
import Main from './components/main'
import Axios from "axios";
import './App.css';





function App() {
  return (
    <div>
      <Header title="Tickets to Shtetl Band"/>
      <Main />
      <Axios />
    </div>
  );
}

// setState(newState);
export default App;