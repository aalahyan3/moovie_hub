import { useState } from 'react'
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import MovieDetails from './components/MovieDetails'
import Search from './components/Search'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <BrowserRouter >
    <NavBar />
    <Loader />
    <Routes>
      <Route path='/' element={<MoviesList />}/>
      <Route path='/details/:id' element={<MovieDetails />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
      <div className="p-4 bg-black flex items-center justify-center font-mono mt-10">
        <p>created by <a href="https://aalahyan3.tech">aalahyan3</a> </p>
      </div>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
