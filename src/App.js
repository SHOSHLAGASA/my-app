// import React, {useState} from 'react'
import Header from './components/header'
import Main from './components/main'
import CheckOut from './components/views/CheckOut'
import Results from './components/views/Results'
import Home from './components/views/Home'
import './App.css';





function App() {
  return (
    <div>
      <Header title="Tickets to Shtetl Band"/>
      <Main />
      <CheckOut />
            <Results/>
            <Home/>
    </div>
  );
}

// setState(newState);
export default App;