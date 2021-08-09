import React from 'react';
import logo from './logo.svg';

import { ComicList } from './features/comic-list/ComicList';
import { User } from './features/user/User';
import './App.scss';

function App() {
  return (
    <div className="App">
      <User />
      <ComicList />
    </div>
  );
}

export default App;
