import React from 'react';
import './App.css';
import MainFooter from './Footer/MainFooter';
import TopHeader from './TopHeader';
import Navigation from './Navigation';
import MainBanner from './MainBanner';
import OwnYourLook from './OwnYourLook';
import ReadyToWear from './ReadyToWear';
import ChantelleCollection from './ChantelleCollection';
import Essentials from './Essentials';
import Newsletter from './Newsletter';
function App() {
  return (
    <div className="App">
        <TopHeader />
        <Navigation/>
      <MainBanner/>
<OwnYourLook/>
<ReadyToWear/>

<ChantelleCollection/>
<Essentials/>
      <Newsletter />
        <MainFooter />
    </div>
  );
}

export default App;