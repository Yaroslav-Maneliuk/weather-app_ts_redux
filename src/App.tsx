import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import MonthStatistics from './pages/monthStatistics/components/MonthStatistics';
import Header from './shared/header/Header';
import Popup from './shared/Popup/Popup';




function App() {
  return (
    <div className="global_container">
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statisticks" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
