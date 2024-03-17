import React from 'react';
import './App.scss';

import Layout from './Layout';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          {/* <Route path="not-found" element={<NotFound />} /> */}


          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
