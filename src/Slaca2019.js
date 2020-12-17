// import logo from './logo.svg';
// import React from 'react';
import SideMenu from './components/SideMenu.jsx';
import MainContent from './components/MainContent.jsx';
// import './App.css';
import './css/classes.css'
import './css/style.css'
import './css/reset.css'

function App() {
  return (
<div className="page-wrap">
      <div className="page">
        <SideMenu />
        {/* COMEÇAR POR AQUI */}
        <MainContent/>
        
      </div>
    </div>
  );
}

export default App;
