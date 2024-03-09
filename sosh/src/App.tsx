import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/sighin" element={<signin />} />
        <Route path="/signUp" element={<signUp />} />
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App
