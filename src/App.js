import React from 'react';
import './App.css';
import MainFooter from './Footer/MainFooter';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import MainBanner from './MainBanner';
import OwnYourLook from './OwnYourLook';
function App() {
  return (
    <div className="App">
        <TopHeader />
        <Navigation/>
      <MainBanner/>
<OwnYourLook/>




      
        <MainFooter />
    </div>
  );
}

export default App;