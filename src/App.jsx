import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './layout/sidebar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex'>
        <Sidebar />
        <div className="flex-1 p-6">
          {/* Ini tempat konten halaman akan ditampilkan */}
          <Routes>
            <Route path="/" element={<div>Dashboard Content</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
