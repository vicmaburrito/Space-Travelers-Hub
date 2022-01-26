import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { getRockets } from './redux/rockets/rockets';
import './App.css';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile/MyProfile';
import Rockets from './components/Rockets/RocketViews';
import Header from './components/Header/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="mt-3">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
