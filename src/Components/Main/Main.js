import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesData } from './RoutesData.js';
import Login from '../../Pages/Login/Login.js';

export default function Main() {

  console.log(RoutesData)

  return (
    <div>
      <Routes>
        {
          RoutesData?.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))
        }
      </Routes>
    </div>
  )
}
