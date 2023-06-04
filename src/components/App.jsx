import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Tweets from 'pages/Tweets/Tweets';

function App() {
  return (
    <div>
      <ul className='nav'>
        <li>
          <NavLink to="/">Home-page</NavLink>
        </li>
        <li>
          <NavLink to="/Tweets">Tweets</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tweets" element={<Tweets />} />
      </Routes>
    </div>
  );
}

export default App;
