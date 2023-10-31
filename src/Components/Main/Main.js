import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutesData } from './RoutesData.js';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

export default function Main() {

  return (
    <div>
      <Routes>
        {
          RoutesData?.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))
        }
      </Routes>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
      />
    </div>
  )
}
