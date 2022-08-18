import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/product/Products';


function App() {
  return (
    <div className="flex flex-col ">
      <Header/>
      <Products/>
   
    </div>
  );
}

export default App;
