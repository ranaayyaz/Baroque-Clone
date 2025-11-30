import React from 'react';
import './App.css';
import MainFooter from './Footer/MainFooter';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import MainBanner from './MainBanner';
function App() {
  return (
    <div className="App">
      {/* Your other components */}
        <TopHeader />
        <Navigation/>
      {/* <MainFooter /> */}
      {/* <h1 class="text-3xl font-bold underline"></h1> */}
      <MainBanner/>
    </div>
  );
}

export default App;