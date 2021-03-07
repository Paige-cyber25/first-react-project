import React from 'react';
import Topnav from './components/TopNav/TopNav';
import Topsection from './components/TopSection/TopSection';
import TopPhotoCard from './components/TopPhotoCard/TopPhotoCard';
import MidPhotoCard from './components/MidPhotoCard/MidPhotoCard';
import './App.css';
import BottomPhotoCard from './components/BottomPhotoCard/BottomPhotoCard';


function App() {
  return (
    <div className="App">
     <Topnav />
     <Topsection />
     <TopPhotoCard />
     <MidPhotoCard />
     <BottomPhotoCard />
    </div>
  );
}

export default App;
