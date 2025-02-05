import React from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Main from './components/main/main';

const App = () => {
  console.log("hello")

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Main></Main>
    </div>
  );
}

export default App;
