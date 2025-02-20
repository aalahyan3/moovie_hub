import { useState } from 'react'
import NavBar from './components/NavBar'
import MoviesList from './components/MoviesList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import MovieDetails from './components/MovieDetails'
import Search from './components/Search'

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
    </BrowserRouter>
  )
}

export default App
