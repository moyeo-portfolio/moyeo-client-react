import React, { createContext, useContext, useState, useEffect, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import { BaseContext } from './store/baseStore';

export default function App() {
  const [page, setPage] = useState(0);

  const [resize, setResize] = useState([0, 0]);
  const handleResize = () => {
    setResize([window.innerWidth, window.innerHeight]);
  };

  useEffect(()=>{
    setResize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  },[]);

  return (
    <BaseContext.Provider value={{ page: page, setPage: (num: number)=>setPage(num), }}>
      <Router>
        <Header resize={resize} />
        <Routes>
          <Route path="/" element={<Main resize={resize} />} />
        </Routes>
      </Router>
    </BaseContext.Provider>
  );
}
