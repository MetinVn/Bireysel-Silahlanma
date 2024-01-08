import React from 'react'
import { Routes,Route,useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Details from './components/Details'
import Main from './components/Main'
import Error from './components/Error'
import './styles.css'
function App(){
    const location = useLocation()
  return (
    <>
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
        <Route index path="/Bireysel-Silahlanma" element={<Main/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/*" element={<Error/>}/>
    </Routes>
    </AnimatePresence>
    </>
  )
}

export default App;