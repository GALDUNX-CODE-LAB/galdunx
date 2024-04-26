import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/HomeFile/Home'
import Sharedcomponent from './Sharedcomponent'
import Service from '../../Pages/ServiceFile/Service'
// import Serviceentry from '../../Pages/Service/Serviceentry'

const Entry = () => {
  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Sharedcomponent/>}>
                   <Route index element={<Home/>}/>
                   <Route path='service' element={<Service/>}/>
            </Route>
        </Routes>
   </BrowserRouter>
  )
}

export default Entry
