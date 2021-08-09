import React from 'react';

import { ComicList } from './features/comic-list/ComicList';
import { User } from './features/user/User';
import logo from './marvel_logo.png';
import './App.scss';
import { Container, Navbar } from 'react-bootstrap';

function App() {

  const Header = () => {
    return(
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo}></img>
          </Navbar.Brand>
          <User />
        </Container>
      </Navbar>
    )
  }


  return (
    <div className="App">
      <Header />
      <ComicList />
    </div>
  );
}

export default App;
