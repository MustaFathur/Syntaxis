// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProgramPemerintah from './components/ProgramPemerintah';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/beranda" element={<Beranda />} /> */}
          <Route path="/program" element={<ProgramPemerintah />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
