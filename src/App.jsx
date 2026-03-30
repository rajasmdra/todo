import React, { useEffect, useState } from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Navbar } from './Element/Navbar'
import { Home } from './Page/Home'
import { Add } from './Page/Add'
import { Active } from './Page/Active'
import { Complete } from './Page/Complete'
import { TodoProvider } from './Context/TodoContext'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <TodoProvider>
        <HashRouter>
          <Navbar />
          <div className='flex-1 p-5 overflow-x-hidden'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add />} />
              <Route path="/active" element={<Active />} />
              <Route path="/complete" element={<Complete />} />
            </Routes>
          </div>
        </HashRouter>
      </TodoProvider>
    </div>
  )
}

export default App
