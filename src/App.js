import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MapPage = lazy(() => import('pages/MapPage'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<MapPage />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
